'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Ticket, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export default function TicketPage() {
  const [step, setStep] = useState<'details' | 'tickets' | 'attendee' | 'confirmation'>('details');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const ticketTypes = [
    {
      id: 'general',
      name: 'General Admission',
      price: 500,
      description: 'Standard entry access to the event',
      available: 500
    },
    {
      id: 'vip',
      name: 'VIP Access',
      price: 1000,
      description: 'Premium seating with exclusive access',
      available: 100
    },
    {
      id: 'early-bird',
      name: 'Early Bird',
      price: 300,
      description: 'Discounted rate for early registration',
      available: 200
    }
  ];

  const eventDetails = {
    title: 'Jowih Foundation Launch Event',
    date: 'Coming Soon',
    time: 'TBD',
    venue: 'Kisii, Kenya',
    description: 'Join us for the official launch of the Jowih Foundation and the Great African Grid initiative. This event will bring together stakeholders, partners, and community members to witness the beginning of a new era in African development.',
    totalCapacity: 800
  };

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicket(ticketId);
    setQuantity(1);
  };

  const handleProceed = () => {
    if (selectedTicket) {
      setStep('attendee');
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setStep('confirmation');
  };

  const getTicketTotal = () => {
    if (!selectedTicket) return 0;
    const ticket = ticketTypes.find(t => t.id === selectedTicket);
    return ticket ? ticket.price * quantity : 0;
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-6 border-b" style={{ borderColor: 'var(--line-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(21, 33, 30, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-2" style={{ color: 'var(--brass)' }}>
                EVENT TICKET
              </span>
              <h1 className="text-3xl sm:text-4xl uppercase tracking-tight">
                {eventDetails.title}
              </h1>
            </div>
            <div className="hidden sm:block">
              <Ticket className="w-8 h-8" style={{ color: 'var(--brass)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 'details' && (
          <div className="space-y-8">
            {/* Event Info */}
            <div className="p-8" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <h2 className="text-2xl uppercase tracking-tight mb-6">Event Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--brass)' }} />
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Date</p>
                    <p className="font-bold">{eventDetails.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--brass)' }} />
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Time</p>
                    <p className="font-bold">{eventDetails.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--brass)' }} />
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Venue</p>
                    <p className="font-bold">{eventDetails.venue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--brass)' }} />
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Capacity</p>
                    <p className="font-bold">{eventDetails.totalCapacity} attendees</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: 'var(--line-light)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {eventDetails.description}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button
                onClick={() => setStep('tickets')}
                className="inline-flex items-center gap-3 px-10 py-4 text-white font-mono font-bold text-sm uppercase tracking-wider transition-colors"
                style={{ background: 'var(--brass)' }}
              >
                Select Tickets
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 'tickets' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl uppercase tracking-tight">Select Your Tickets</h2>
              <button
                onClick={() => setStep('details')}
                className="text-sm font-mono uppercase tracking-wider"
                style={{ color: 'var(--muted)' }}
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => handleTicketSelect(ticket.id)}
                  className={`p-6 cursor-pointer transition-all ${
                    selectedTicket === ticket.id
                      ? 'ring-2 ring-[var(--brass)]'
                      : 'hover:shadow-lg'
                  }`}
                  style={{
                    background: selectedTicket === ticket.id ? 'var(--sage)' : 'var(--white)',
                    border: selectedTicket === ticket.id ? '2px solid var(--brass)' : '1px solid var(--line-light)'
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight">{ticket.name}</h3>
                      <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
                        {ticket.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold" style={{ color: 'var(--green)' }}>
                        KES {ticket.price.toLocaleString()}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>per person</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--line-light)' }}>
                    <span className="text-sm" style={{ color: 'var(--muted)' }}>
                      {ticket.available} available
                    </span>
                    {selectedTicket === ticket.id && (
                      <span className="text-xs font-bold" style={{ color: 'var(--brass)' }}>
                        ✓ Selected
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {selectedTicket && (
              <div className="p-6 mt-8" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-bold uppercase tracking-wider">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center border"
                      style={{ background: 'var(--white)', borderColor: 'var(--line-light)' }}
                    >
                      -
                    </button>
                    <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center border"
                      style={{ background: 'var(--white)', borderColor: 'var(--line-light)' }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--line-light)' }}>
                  <span className="text-sm">Total</span>
                  <span className="text-2xl font-bold" style={{ color: 'var(--green)' }}>
                    KES {getTicketTotal().toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleProceed}
                  className="w-full mt-4 py-4 text-white font-mono font-bold text-sm uppercase tracking-wider transition-colors"
                  style={{ background: 'var(--brass)' }}
                >
                  Continue to Attendee Info
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
              </div>
            )}
          </div>
        )}

        {step === 'attendee' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl uppercase tracking-tight">Attendee Information</h2>
              <button
                onClick={() => setStep('tickets')}
                className="text-sm font-mono uppercase tracking-wider"
                style={{ color: 'var(--muted)' }}
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+254 XXX XXX XXX"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>

              <div className="p-6" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Company or institution"
                  className="w-full px-4 py-3 border focus:outline-none"
                  style={{ borderColor: 'var(--line-light)' }}
                />
              </div>
            </div>

            <div className="p-6" style={{ background: 'var(--sage)', border: '1px solid var(--line-light)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold uppercase tracking-tight">Order Summary</h3>
                <button
                  onClick={() => setStep('tickets')}
                  className="text-xs font-mono uppercase tracking-wider"
                  style={{ color: 'var(--muted)' }}
                >
                  Edit
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Ticket Type</span>
                  <span className="font-bold">
                    {ticketTypes.find(t => t.id === selectedTicket)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span className="font-bold">{quantity}</span>
                </div>
                <div className="flex justify-between pt-2 border-t" style={{ borderColor: 'var(--line-light)' }}>
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-xl" style={{ color: 'var(--green)' }}>
                    KES {getTicketTotal().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 text-white font-mono font-bold text-sm uppercase tracking-wider transition-colors disabled:opacity-50"
              style={{ background: 'var(--brass)' }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin inline mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  Complete Booking
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </>
              )}
            </button>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="max-w-2xl mx-auto text-center space-y-8 py-12">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: 'var(--green)', color: 'var(--white)' }}>
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl uppercase tracking-tight">Booking Confirmed!</h2>
            <p className="text-lg" style={{ color: 'var(--ink-soft)' }}>
              Your ticket has been successfully reserved. You will receive a confirmation email with your digital ticket and QR code.
            </p>

            <div className="p-8 text-left" style={{ background: 'var(--white)', border: '1px solid var(--line-light)' }}>
              <h3 className="font-bold uppercase tracking-tight mb-4">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--line-light)' }}>
                  <span style={{ color: 'var(--muted)' }}>Event</span>
                  <span className="font-bold">{eventDetails.title}</span>
                </div>
                <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--line-light)' }}>
                  <span style={{ color: 'var(--muted)' }}>Ticket Type</span>
                  <span className="font-bold">{ticketTypes.find(t => t.id === selectedTicket)?.name}</span>
                </div>
                <div className="flex justify-between border-b pb-2" style={{ borderColor: 'var(--line-light)' }}>
                  <span style={{ color: 'var-muted)' }}>Quantity</span>
                  <span className="font-bold">{quantity}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold">Total Paid</span>
                  <span className="font-bold text-xl" style={{ color: 'var(--green)' }}>
                    KES {getTicketTotal().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 text-xs text-center" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              This is a proposed event. Actual dates, venue, and pricing will be confirmed closer to the event. This booking does not constitute a commitment to purchase.
            </div>

            <button
              onClick={() => setStep('details')}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors"
              style={{ background: 'var(--ink)', color: 'var(--white)' }}
            >
              Back to Event Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

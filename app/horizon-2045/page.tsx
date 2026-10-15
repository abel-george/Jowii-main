import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Horizon2045Page() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 border-b" style={{ background: 'var(--ink)', color: 'var(--white)', borderColor: 'var(--line-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-6"
            style={{ color: 'rgba(255, 254, 250, 0.7)' }}
          >
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--brass)' }} />
            <span>Back to Home</span>
          </Link>

          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--brass)' }}>
            FROM HORIZON 2045 DOCUMENT
          </span>
          <h1 className="text-4xl sm:text-6xl uppercase tracking-tight leading-[1.02] max-w-4xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            THE COMPLETE 2045 HORIZON ARC
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mt-6 leading-relaxed" style={{ color: 'rgba(255, 254, 250, 0.75)' }}>
            The Foundation&apos;s 20-year milestone arc &mdash; three phases from Bond-Funded Ecosystem Launch to a First-World Africa.
          </p>
        </div>
      </div>

      <div className="py-16 pb-24" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 leading-relaxed">
            <h2 id="phase-1" className="text-2xl sm:text-3xl uppercase tracking-tight mt-14 first:mt-0" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              PHASE 1 (YEARS 1-5): THE BOND-FUNDEDEcosystem LAUNCH
            </h2>
            <p className="leading-relaxed">What happens in parallel:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Exchange programs for global expertise across all economic sectors</li>
              <li>New Dawn City (core infrastructure)</li>
              <li>Jowih CRT phase 1</li>
              <li>All 6 R&amp;D Centers (Health, Water/Ag, Energy, AI/Tech, Infrastructure, Mining)</li>
              <li>Jowih Asta  Adoption in Africa and abroad</li>
              <li>Jowih Credits implementation</li>
              <li>Air Jowih framework and first Airport SEZ</li>
              <li>Jowih Health Framework phase 1</li>
              <li>Jowih urbanization framework to handle ADFA,CDE projects and New Dawn City</li>
              <li>Howih Space framework</li>
              <li>Jowih STEM education framework</li>
              <li>Jowih VC to feed startups and createEcosystem</li>
              <li>Jowih TechnologiesEcosystem from partnerships(phones, laptops, wearables launching Year 4-5)</li>
              <li>Jowih Developers Community (100,000+ developers by Year 5)</li>
              <li>Animation &amp; Gaming Hub (revenue starting Year 3)</li>
              <li>CDEs (30,000+ by Year 5)</li>
              <li>Infrastructure company to handle sovereign continental infra</li>
              <li>Strategic stakes and acquisitions</li>
            </ul>
            <p className="leading-relaxed">What this enables by Year 5:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Revenue: $1-40B annually across the Grid</strong></li>
              <li><strong>Workforce: 35,000 exchange program graduates + existing professionals</strong></li>
              <li><strong>Ecosystem: Fully integrated digital and physical infrastructure</strong></li>
              <li><strong>Bond interest: Covered 2-200 times</strong></li>
            </ul>
            <h2 id="phase-2" className="text-2xl sm:text-3xl uppercase tracking-tight mt-14 first:mt-0" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              PHASE 2 (YEARS 5-10): HEAVY EXECUTION AND SCALING
            </h2>
            <p className="leading-relaxed">What happens in Phase 2:</p>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              JOWIH CRT:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>New lines in Accra, Addis Ababa, Dakar, Luanda, Casablanca, Johannesburg</li>
              <li>Ridership grows to millions per day</li>
              <li>Branches to manufacturing of Robotaxis &amp; RoboVans, robotics, drones</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              NEW DAWN CITY:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>New Dawn City scaling into Economic giant ,Infra &amp; Tech heavy etc</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              ENERGY :
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Solar farms/trees, wind farms, geothermal plants, hydroelectric dams</li>
              <li>Built across all 5 African regions</li>
              <li>Funded by Infrastructure Bond proceeds + revenue from Phase 1</li>
              <li>Spin-offs from Energy R&amp;D Center manufacture and install</li>
              <li>Powers: R&amp;D Centers, Data centers,Jowih CRT, New Dawn City, CDEs, ADFA projects</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              MEGA HOSPITALS (3 world-class hospitals):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hospital 1 (North or West Africa): Cardiology, Oncology, General Surgery</li>
              <li>Hospital 2 (East or Central Africa): Neurology, Neurosurgery, Infectious Diseases</li>
              <li>Hospital 3 (Southern Africa): Trauma, Emergency, Pediatrics, Maternal Health</li>
              <li>Built alongside other long ongoing projects from Phase 1</li>
              <li>Staffed by exchange program graduates and Mega STEM University graduates</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              ADFA INFRASTRUCTURE with host government and private sector(Heavy execution):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Global standard Roads, ports, power plants, broadband, water systems,</li>
              <li>Executed in partnership with host states,private sector</li>
              <li>Funded by Infrastructure Bond + host state contributions</li>
              <li>Foundation-owned construction company (acquired Phase 1) leads execution</li>
              <li>Exchange programs graduates &amp; trained Comrade Hub provides workforce</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              SPIN-OFFS FROM R&amp;D CENTERS (30+ companies):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Health R&amp;D spin-offs: pharmaceutical, medical devices, diagnostics, vaccines</li>
              <li>Water &amp; Agriculture spin-offs: irrigation equipment, seeds, food processing</li>
              <li>Energy R&amp;D spin-offs: solar panels, batteries, wind turbines, grid management</li>
              <li>AI/Tech/Robotics spin-offs: consumer electronics, industrial robots, drones, AI services</li>
              <li>Infrastructure spin-offs: construction materials, modular housing, smart sensors</li>
              <li>Mining spin-offs: mineral processing equipment, safety technology, remediation</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              JOWIH TECHNOLOGIESEcosystem EXPANSION:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>More phone and laptop models</li>
              <li>LLMs, Robotics,drones etc</li>
              <li>Wearables, smart home devices, IoT sensors</li>
              <li>Distribution Ware Houses and through Jowih Asta</li>
              <li>Manufacturing by partner companies (investees of Jowih VC)</li>
              <li>Jowih Asta  Strategic Expansion Globally</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              CDE SCALING:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>From 30,000 to 100,000+ communities</li>
              <li>Revenue-generating CDEs (agribusiness, logistics, digital services, energy)</li>
              <li>Profit share flows to Jowih Care Fund and Country Pot Funds</li>
            </ul>
            <p className="leading-relaxed">What this enables by Year 10:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Revenue: $50-200B+</strong></li>
              <li>Workforce: 100,000+ exchange program graduates + millions of Comrades</li>
              <li>Spin-offs: 30+ companies, many becoming market leaders</li>
              <li>Energy: Africa&apos;s energy deficit significantly reduced</li>
              <li>Healthcare: 3 world-class hospitals serving the continent more Mobile Health Capsules released across all 54 countries</li>
              <li>Infrastructure: Major ADFA projects completed across multiple countries</li>
            </ul>
            <h2 id="phase-3" className="text-2xl sm:text-3xl uppercase tracking-tight mt-14 first:mt-0" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              PHASE 3 (YEARS 10-20): EXTREME URBANIZATION AND FIRST WORLD AFRICA
            </h2>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              By Year 10,we have:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>New Dawn City as city of the Future . Richest in Africa</li>
              <li>30+ spin-offs generating billions in revenue</li>
              <li>Jowih CRT in several African cities</li>
              <li>6 R&amp;D Centers fully operational</li>
              <li>3 world-class hospitals</li>
              <li>Massive energy infrastructure</li>
              <li>Jowih Asta  with 500M - 1B users globally</li>
              <li>Jowih Credits as the bridge settlement for Africa</li>
              <li>100,000+ exchange program graduates</li>
              <li>Millions of trained Comrades</li>
              <li>African advanced Animations and Games</li>
              <li>Initial phases of all Foundation adopted frameworks adopted</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              What happens in Years 10-20:
            </h3>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              SMART CITIES (Extreme urbanization):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>50 cities transformed to first-world standards.Not prototypes. Full deployment.</li>
              <li>Smart infrastructure: IoT sensors, renewable micro-grids, automated traffic, smart street lighting, waste management sensors, public safety systems, integrated public transport.Robotaxis,Robovans.Drone Deliveries from Ecomerce and Pharmacies</li>
              <li>Modern skyscrapers, high-rise residential, wide paved roads.reduced fleet on roads</li>
              <li>High-speed internet , clean water, reliable electricity</li>
              <li>Parks, green spaces, recreational facilities</li>
              <li>Advanced healthcare, modern schools and universities</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              HIGH-SPEED RAIL in partnership with host government (Strategic corridors):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Lagos-Accra-Abidjan</li>
              <li>Nairobi-Mombasa</li>
              <li>Cairo-Alexandria</li>
              <li>Johannesburg-Pretoria</li>
              <li>Plans for Regional and transcontinental connections</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              AFRICAN-OWNED SATELLITES:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>reusable satellite capability</li>
              <li>Constellation</li>
              <li>Independent space capability by Year 20</li>
              <li>Applications: internet, GPS, Earth observation, communications</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              AFRICAN-DESIGNED CHIPS:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Assembly, Test, and Packaging facility operational by Year 10-12</li>
              <li>African-designed chips in production by Year 12-15</li>
              <li>Africa designs and manufactures chips for its own devices by Year 20</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              SOVEREIGN AI INFRASTRUCTURE:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>AI supercomputing center operational by Year 10-12</li>
              <li>AI infrastructure deployed across all 5 regions by Year 15</li>
              <li>African-trained AI models power governance, healthcare, education, economic planning</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              QUANTUM COMPUTING APPLICATIONS:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Practical applications for African problems by Year 12-15</li>
              <li>Deployed quantum applications by Year 15-18</li>
              <li>African quantum research capacity by Year 20</li>
              <li>Applications: logistics optimization, drug discovery, climate modeling, materials science</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              NEUROTECHNOLOGY FOR MEDICAL USE:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Brain-computer interface applications approved for medical use by Year 15</li>
              <li>Neural implants restore mobility for paralysis patients by Year 18</li>
              <li>Neurotechnology deployed across Foundation hospitals by Year 20</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              ADVANCED ROBOTICS AND AUTOMATION:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Deployed in Foundation-owned manufacturing by Year 12-15</li>
              <li>African-designed robots across the continent by Year 14</li>
              <li>Competitive manufacturing automation by Year 18</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              METAVERSE PLATFORMS (AR/VR):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Deployed for education, cultural preservation, virtual tourism by Year 10-12</li>
              <li>Used across all 54 countries by Year 15</li>
              <li>Africa as leader in metaverse content creation by Year 20</li>
            </ul>
            <h3 className="text-lg uppercase tracking-tight mt-6">
              Phase 1 of FIRST WORLD LIVING STANDARDS (By Year 20):
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Universal healthcare (Standard Hospitals,Foundation hospitals and clinics serve all citizens)</li>
              <li>Quality education for every child (Standard Schools,Foundation-supported schools, Mega STEM University, TVET institutions, online learning, metaverse classrooms)</li>
              <li>Clean water and sanitation for every household</li>
              <li>Reliable electricity 24/7 across the continent</li>
              <li>Food security (climate-resilient farming, agritech, food storage)</li>
              <li>Affordable housing for all income levels (slums eradicated)</li>
            </ul>
            <h2 id="horizon-achieved" className="text-2xl sm:text-3xl uppercase tracking-tight mt-14" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              END OF MILESTONE 1 (YEAR 20): 2045 HORIZON ACHIEVED
            </h2>
            <p className="leading-relaxed">Africans own and operate their own satellites, chips, AI systems, quantum computers, and neurotechnology.</p>
            <p className="leading-relaxed">African cities are smart, clean, and efficient. African infrastructure is modern and reliable.</p>
            <p className="leading-relaxed">Every African has access to healthcare, education, clean water, electricity, internet, and affordable housing.</p>
            <p className="leading-relaxed">Africa is a net exporter of technology and intellectual property. African standards are adopted globally.</p>
            <p className="leading-relaxed font-semibold">The Foundation&apos;s FIRST MILESTONE mission is complete. Ready for MILESTONE TWO called Horizon 2065</p>
        </div>
      </div>
    </div>
  );
}

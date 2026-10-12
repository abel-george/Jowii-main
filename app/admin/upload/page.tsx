'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Copy, ImagePlus, Loader2, Trash2 } from 'lucide-react';

const TOKEN_KEY = 'jowih_admin_upload_token';

interface UploadedBlob {
  url: string;
  pathname: string;
  size?: number;
}

export default function AdminUploadPage() {
  const [token, setToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [lastUrl, setLastUrl] = useState('');
  const [blobs, setBlobs] = useState<UploadedBlob[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = sessionStorage.getItem(TOKEN_KEY);
      if (saved) {
        setToken(saved);
        setIsAuthed(true);
      }
    } catch {
      // sessionStorage unavailable — ignore
    }
  }, []);

  const authHeaders = useCallback(() => ({ Authorization: `Bearer ${token}` }), [token]);

  const refreshList = useCallback(async () => {
    setLoadingList(true);
    setError('');
    try {
      const res = await fetch('/api/admin/upload', { headers: authHeaders() });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to load uploads.');
      setBlobs(data.blobs || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load uploads.');
    } finally {
      setLoadingList(false);
    }
  }, [authHeaders]);

  useEffect(() => {
    if (isAuthed && token) void refreshList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthed]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const value = tokenInput.trim();
    if (!value) return;
    setToken(value);
    setIsAuthed(true);
    try {
      sessionStorage.setItem(TOKEN_KEY, value);
    } catch {
      // ignore
    }
  };

  const handleLogout = () => {
    setIsAuthed(false);
    setToken('');
    setTokenInput('');
    setBlobs([]);
    try {
      sessionStorage.removeItem(TOKEN_KEY);
    } catch {
      // ignore
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
    setMessage('');
    setError('');
    setLastUrl('');
    if (preview) URL.revokeObjectURL(preview);
    setPreview(selected ? URL.createObjectURL(selected) : '');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Choose an image first.');
      return;
    }
    setUploading(true);
    setMessage('');
    setError('');
    setLastUrl('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: authHeaders(),
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Upload failed.');
      setLastUrl(data.url);
      setMessage('Uploaded.');
      setFile(null);
      setPreview('');
      if (inputRef.current) inputRef.current.value = '';
      void refreshList();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (pathname: string) => {
    if (!window.confirm('Delete this file?')) return;
    setError('');
    try {
      const res = await fetch(`/api/admin/upload?pathname=${encodeURIComponent(pathname)}`, {
        method: 'DELETE',
        headers: authHeaders(),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Delete failed.');
      void refreshList();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed.');
    }
  };

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setMessage('Copied to clipboard.');
    } catch {
      setError('Could not copy — select and copy manually.');
    }
  };

  if (!mounted) return null;

  if (!isAuthed) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
        <div className="max-w-md mx-auto px-4 py-24">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-8" style={{ color: 'var(--muted)' }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="p-8 border" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
            <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--brass)' }}>
              RESTRICTED
            </p>
            <h1 className="text-3xl uppercase tracking-tight mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Admin Upload
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              Enter the admin token to continue. It is kept only in this browser session.
            </p>
            <form onSubmit={handleAuth} className="space-y-4">
              <input
                type="password"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Admin token"
                className="w-full px-4 py-3 border text-sm outline-none"
                style={{ background: 'var(--paper)', borderColor: 'var(--line)' }}
                autoComplete="off"
              />
              {error ? <p className="text-sm" style={{ color: '#b91c1c' }}>{error}</p> : null}
              <button
                type="submit"
                className="w-full py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors"
                style={{ background: 'var(--ink)', color: 'var(--white)' }}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <button onClick={handleLogout} className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            Lock
          </button>
        </div>

        <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--brass)' }}>
          RESTRICTED · ADMINISTRATOR
        </p>
        <h1 className="text-4xl uppercase tracking-tight mb-8" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
          Media Upload
        </h1>

        <form onSubmit={handleUpload} className="p-6 border mb-8" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label htmlFor="admin-file" className="flex items-center gap-2 px-4 py-3 border cursor-pointer text-sm" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }}>
              <ImagePlus className="w-4 h-4" />
              {file ? file.name : 'Choose image'}
            </label>
            <input ref={inputRef} id="admin-file" type="file" accept="image/png,image/jpeg,image/webp,image/avif,image/gif" onChange={onFileChange} className="hidden" />
            <button type="submit" disabled={uploading || !file} className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest disabled:opacity-50" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {uploading ? 'Uploading' : 'Upload'}
            </button>
          </div>

          {preview ? (
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Preview" className="max-h-64 border" style={{ borderColor: 'var(--line)' }} />
            </div>
          ) : null}

          {message ? <p className="mt-4 text-sm" style={{ color: 'var(--green)' }}>{message}</p> : null}
          {error ? <p className="mt-4 text-sm" style={{ color: '#b91c1c' }}>{error}</p> : null}
          {lastUrl ? (
            <div className="mt-4 flex items-center gap-2">
              <a href={lastUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline break-all" style={{ color: 'var(--green)' }}>
                {lastUrl}
              </a>
              <button type="button" onClick={() => copy(lastUrl)} className="p-1 border" style={{ borderColor: 'var(--line)' }} aria-label="Copy URL">
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : null}
        </form>

        <div className="p-6 border" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>
              Uploaded Media
            </h2>
            <button onClick={refreshList} disabled={loadingList} className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              {loadingList ? 'Loading…' : 'Refresh'}
            </button>
          </div>
          {blobs.length === 0 ? (
            <p className="text-sm" style={{ color: 'var(--muted)' }}>No uploads yet.</p>
          ) : (
            <ul className="divide-y" style={{ borderColor: 'var(--line)' }}>
              {blobs.map((blob) => (
                <li key={blob.pathname} className="flex items-center gap-3 py-3">
                  <a href={blob.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-sm underline break-all" style={{ color: 'var(--green)' }}>
                    {blob.pathname}
                  </a>
                  <button type="button" onClick={() => copy(blob.url)} className="p-1 border" style={{ borderColor: 'var(--line)' }} aria-label="Copy URL">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => handleDelete(blob.pathname)} className="p-1 border" style={{ borderColor: 'var(--line)', color: '#b91c1c' }} aria-label="Delete">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

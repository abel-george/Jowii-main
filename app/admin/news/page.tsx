'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ImagePlus, Loader2, Pencil, Trash2 } from 'lucide-react';

const TOKEN_KEY = 'jowih_admin_upload_token';

interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body?: string;
  image?: string;
  createdAt: string;
}

const EMPTY_FORM = { title: '', date: '', category: 'Announcement', excerpt: '', body: '', image: '' };

export default function AdminNewsPage() {
  const [token, setToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [setupNotice, setSetupNotice] = useState(false);
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
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
      const res = await fetch('/api/news');
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to load news.');
      setPosts(data.posts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load news.');
    } finally {
      setLoadingList(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthed) void refreshList();
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
    setPosts([]);
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    try {
      sessionStorage.removeItem(TOKEN_KEY);
    } catch {
      // ignore
    }
  };

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    e.target.value = '';
    if (!file) return;
    setUploadingImage(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', headers: authHeaders(), body: formData });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === 'token_not_set') setSetupNotice(true);
        throw new Error(data.message || 'Image upload failed.');
      }
      setForm((f) => ({ ...f, image: data.url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Image upload failed.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError('A title is required.');
      return;
    }
    setSaving(true);
    setMessage('');
    setError('');
    setSetupNotice(false);
    try {
      const res = await fetch('/api/news', {
        method: editingId ? 'PUT' : 'POST',
        headers: { ...authHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingId || undefined, ...form }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === 'token_not_set') setSetupNotice(true);
        throw new Error(data.message || 'Saving failed.');
      }
      setMessage(editingId ? 'Post updated. It appears on the homepage immediately.' : 'Published. It appears on the homepage immediately.');
      setForm({ ...EMPTY_FORM });
      setEditingId(null);
      await refreshList();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Saving failed.');
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (post: NewsPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      date: post.date,
      category: post.category,
      excerpt: post.excerpt || '',
      body: post.body || '',
      image: post.image || '',
    });
    setMessage('');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this post?')) return;
    setError('');
    setSetupNotice(false);
    try {
      const res = await fetch(`/api/news?id=${encodeURIComponent(id)}`, { method: 'DELETE', headers: authHeaders() });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === 'token_not_set') setSetupNotice(true);
        throw new Error(data.message || 'Delete failed.');
      }
      if (editingId === id) {
        setEditingId(null);
        setForm({ ...EMPTY_FORM });
      }
      await refreshList();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed.');
    }
  };

  const fieldStyle = { borderColor: 'var(--line)', background: 'var(--paper)' } as const;

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--paper)' }}>
        <form onSubmit={handleAuth} className="w-full max-w-md p-8 border" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
          <h1 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Admin · News</h1>
          <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
            Enter your admin token to publish news and announcements.
          </p>
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Admin token"
            className="w-full px-4 py-3 border text-sm"
            style={fieldStyle}
            autoFocus
          />
          <button type="submit" className="mt-4 w-full px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
            Unlock
          </button>
          <Link href="/admin/upload" className="mt-4 inline-flex items-center gap-1 text-xs underline" style={{ color: 'var(--muted)' }}>
            <ArrowLeft size={12} /> Back to media uploads
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: 'var(--paper)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Admin · News</h1>
          <button onClick={handleLogout} className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            Lock
          </button>
        </div>
        <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-wider">
          <Link href="/admin/upload" style={{ color: 'var(--muted)' }}>Media uploads</Link>
          <span style={{ color: 'var(--green)', fontWeight: 700 }}>Publish news</span>
        </div>

        {setupNotice ? (
          <div className="mb-6 p-4 border text-sm" style={{ borderColor: '#b45309', background: '#fef3c7', color: '#78350f' }}>
            <strong>Admin token not configured on the server.</strong> Go to your Vercel dashboard → your site →
            Settings → Environment Variables. Add <code>ADMIN_UPLOAD_TOKEN</code> with any long random value you
            invent (for example a 40-character random string), then redeploy. Enter that same value here — it is
            your token; nothing generates one for you.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="p-6 border mb-8" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--green)' }}>
            {editingId ? 'Edit post' : 'New post'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider mb-1">Title</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-3 border text-sm" style={fieldStyle} placeholder="Statement or announcement title" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 border text-sm" style={fieldStyle} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Category</label>
            <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-3 border text-sm" style={fieldStyle} placeholder="Announcement, Event, Speech, Report…" />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Summary (shown on the homepage)</label>
            <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={3} className="w-full px-4 py-3 border text-sm" style={fieldStyle} placeholder="One or two sentences summarising the news." />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Full text (optional)</label>
            <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} rows={6} className="w-full px-4 py-3 border text-sm" style={fieldStyle} placeholder="The full statement. Shown under 'Read full statement' on the homepage." />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wider mb-1">Image (optional)</label>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 px-4 py-2 border text-sm cursor-pointer" style={{ borderColor: 'var(--line)', background: 'var(--paper)' }}>
                <ImagePlus className="w-4 h-4" />
                {uploadingImage ? 'Uploading…' : form.image ? 'Replace image' : 'Choose image'}
                <input type="file" accept="image/png,image/jpeg,image/webp,image/avif,image/gif" onChange={onImageChange} className="hidden" disabled={uploadingImage} />
              </label>
              {form.image ? (
                <button type="button" onClick={() => setForm({ ...form, image: '' })} className="text-xs underline" style={{ color: '#b91c1c' }}>Remove</button>
              ) : null}
            </div>
            {form.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={form.image} alt="Post preview" className="mt-3 max-h-40 border" style={{ borderColor: 'var(--line)' }} />
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={saving} className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest disabled:opacity-50" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {saving ? 'Saving' : editingId ? 'Update post' : 'Publish'}
            </button>
            {editingId ? (
              <button type="button" onClick={() => { setEditingId(null); setForm({ ...EMPTY_FORM }); }} className="text-xs underline" style={{ color: 'var(--muted)' }}>
                Cancel edit
              </button>
            ) : null}
          </div>
          {message ? <p className="mt-4 text-sm" style={{ color: 'var(--green)' }}>{message}</p> : null}
          {error ? <p className="mt-4 text-sm" style={{ color: '#b91c1c' }}>{error}</p> : null}
        </form>

        <div className="p-6 border" style={{ background: 'var(--white)', borderColor: 'var(--line)' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--green)' }}>Published posts</h2>
            <button onClick={refreshList} disabled={loadingList} className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              {loadingList ? 'Loading…' : 'Refresh'}
            </button>
          </div>
          {posts.length === 0 ? (
            <p className="text-sm" style={{ color: 'var(--muted)' }}>No posts yet. Published posts appear in the homepage &ldquo;Latest&rdquo; section.</p>
          ) : (
            <ul className="divide-y" style={{ borderColor: 'var(--line)' }}>
              {posts.map((post) => (
                <li key={post.id} className="flex items-start gap-3 py-3">
                  <div className="flex-1">
                    <p className="text-sm font-bold">{post.title}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{post.date} · {post.category}{post.image ? ' · image' : ''}</p>
                  </div>
                  <button type="button" onClick={() => startEdit(post)} className="p-1 border" style={{ borderColor: 'var(--line)' }} aria-label="Edit">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => handleDelete(post.id)} className="p-1 border" style={{ borderColor: 'var(--line)', color: '#b91c1c' }} aria-label="Delete">
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





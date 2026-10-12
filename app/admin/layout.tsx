import type { Metadata } from 'next';
import React from 'react';

// Admin area is private: never let search engines index or follow it.
export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}

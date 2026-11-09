import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Promotion des Investissements',
  description: 'Système intégrée de promotion des investissements',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="antialiased">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
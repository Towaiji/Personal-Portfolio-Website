import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://towaiji.netlify.app"),
  title: "Ali Towaiji",
  description: "Software developer portfolio of Ali Towaiji.",
  keywords: "Ali Towaiji, Software Developer, React Developer, Three.js, Web Development, Portfolio",
  authors: [{ name: "Ali Towaiji" }],
  creator: "Ali Towaiji",
  publisher: "Ali Towaiji",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ali Towaiji - Software Developer",
    description: "Software developer portfolio of Ali Towaiji.",
    url: "https://towaiji.netlify.app/",
    siteName: "Ali Towaiji Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Towaiji - Software Developer",
    description: "Software developer portfolio of Ali Towaiji.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

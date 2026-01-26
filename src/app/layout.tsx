import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robiul Alam | MERN Stack Developer",
  description: "Professional MERN Stack Developer specializing in high-performance web applications, Next.js 15, and polished user experiences.",
  keywords: ["MERN Stack Developer", "Next.js Developer", "React Developer", "Robiul Alam Portfolio", "Fullstack Developer Bangladesh"],
  authors: [{ name: "Robiul Alam" }],
  openGraph: {
    title: "Robiul Alam | MERN Stack Developer",
    description: "Building scalable web apps with the MERN stack and Next.js.",
    url: "https://yourportfolio.com",
    siteName: "Robiul Alam Portfolio",
    images: [
      {
        url: "/robiul.png", // Create a 1200x630 image and put it in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robiul Alam | MERN Stack Developer",
    description: "Building scalable web apps with the MERN stack and Next.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

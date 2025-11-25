// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import type React from "react";

export const metadata: Metadata = {
  title: "Metehan Sarıca | Portfolio",
  description: "Junior .NET & DevExpress Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8YY7EW38HN"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8YY7EW38HN');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}

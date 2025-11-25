import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metehan Sarıca | Junior .NET Developer",
  description:
    "Portfolio of Metehan Sarıca - Junior .NET Developer focused on C#, .NET, DevExpress, SQL and AI-integrated desktop applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

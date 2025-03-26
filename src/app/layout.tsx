import type { Metadata } from "next";
import PrelineScriptWrapper from '@components/PrelineScriptWrapper';
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoIP Lookup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-base-200`}
      >
        {/* <AppHeader /> */}
        {children}
        <PrelineScriptWrapper />
      </body>
    </html>
  );
}

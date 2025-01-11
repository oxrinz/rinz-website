import type { Metadata } from "next";
import { Cormorant, Fira_Code, IBM_Plex_Mono, JetBrains_Mono, Macondo_Swash_Caps } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const font = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: ['/pfp.png']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={font.className}>
        <main className="flex flex-row justify-center px-6 lg:px-24 ">
          <div className="border-x-[0px] max-w-[900px] w-full border-rose-900/25 p-6 ">
            <div className="flex flex-row gap-12">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

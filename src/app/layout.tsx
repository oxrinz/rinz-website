import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const poppins = Cormorant({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "rinz.online",
  description: "",
  icons: ['/pfp.jpg']
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
      <body className={poppins.className}>
        <main className="flex flex-row justify-center px-6 lg:px-24 ">
          <div className="border-x-[1px] border-neutral-800 p-6 ">
            <div className="flex flex-row gap-12 max-w-[600px] w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

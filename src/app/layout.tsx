import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
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
        <main className="flex flex-row justify-between p-6 lg:p-24 ">
          {children}
        </main>
        </body>
    </html>
  );
}

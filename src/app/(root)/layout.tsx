import type { Metadata } from "next";
import { Cormorant, Fira_Code, IBM_Plex_Mono, JetBrains_Mono, Macondo_Swash_Caps } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Twitter, Youtube } from "lucide-react";
import Divider from "@/components/divider";
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
              <div className="flex flex-col gap-12 col-span-2 w-full">
                <div className="flex flex-col w-full lg:flex-row items-center gap-12">
                  <Image className="rounded-full" width="200" height="200" alt="pfp" src="/pfp.png" />
                  <div className="w-full">
                    <h1>
                      oxrinz
                    </h1>
                    <p className="text-base">
                      Code poet
                    </p>
                  </div>
                </div>
                <Divider />
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="w-full col-span-2">
                    {children}
                  </div>
                  <div className="flex-col gap-6 hidden md:flex">
                    <div className="flex gap-2 *:stroke-rose-500">
                      <Link href="https://github.com/oxrinz">
                        <Github />
                      </Link>
                      <Link href="https://www.instagram.com/0xrinz/">
                        <Instagram />
                      </Link>
                      <Link href="https://x.com/oxrinzz">
                        <Twitter />
                      </Link>
                      <Link href="https://www.youtube.com/channel/UCaVBcke4vtLDz6uq9189nXw">
                        <Youtube />
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <Link href="/">
                        Home
                      </Link>
                      <Link href="/blog">
                        Blog
                      </Link>
                      <Link href="/study">
                        Study
                      </Link>
                      <Link href="/projects">
                        Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

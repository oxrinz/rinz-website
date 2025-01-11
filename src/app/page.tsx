import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Twitter, Youtube } from "lucide-react";
import Menu from "./menu";

export default async function Home() {
  return (
    <div className="flex flex-col gap-12 col-span-2">
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
        <div className="col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1>
              Projects
            </h1>
            <Project
              title="RyuDB"
              description={
                <>
                  An SQLite-like database from scratch. Easiest way to run tiny local databases, and manage object storage in nodejs without a separate http server. Written in zig with node bindings
                </>
              }
              date="01-2025"
              status="Early development"
            />
            <Project
              title="RyuPy"
              description={
                <>
                  A python interfaced machine learning library written from scratch in cuda, c++
                </>
              }
              date="09-2024"
              status="Dropped"
              href="https://github.com/oxrinz/ryupy"
            />
            <Project
              title="VNVault"
              description={
                <>
                  A vndb "alternative"
                  <br />
                  Works as a great vndb alternative, using the data from vndb with a few extra features and improvements
                </>
              }
              date="08-2024"
              status="In very early alpha & slow development"
              href="https://www.vnvault.com/"
            />
            <Project
              title="AuraWizard"
              description={
                <>
                  Analyzes your discord account and gives you a detailed aura report based on your profile, then puts you on a leaderboard to compete with other users
                  <br />
                  Made in ~6 hours
                </>
              }
              date="08-2024"
              status="Finished"
              href="https://www.aurawizard.com/"
            />
            <Project
              title="Tinkering"
              description={
                <>
                  Ongoing project of constantly trying to learn and become an expert at computers.
                </>
              }
              date="2018-present"
              status="Active"
            />
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <h1>
              Archive
            </h1>
            <p>
              Dedicated page for my old projects
              <br />
              Some of them are really impressive, the only reason they're not in the projects section is because they're either too small, or abandoned
              <br />
              <Link href="/archive">
                {"Archive"}
              </Link>
            </p>
          </div>
          <Divider />
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
          <div >
            <h1 className="mb-2">
              References
            </h1>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="border-rose-900/50 border-b-[1px] w-full my-4" />
  )
}

function Essay({ title, description, href }: any) {
  return (
    <div className="flex flex-col gap-1">
      <Link href={"writing/" + href}>
        {title}
      </Link>
      <p>
        {description}
      </p>
    </div>
  )
}

function Project({ title, href, status, description, date }: any) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center gap-2">
        {href ? <Link href={href}>{title}</Link> : <h3 className="text-rose-400">{title}</h3>}
        <p className="text-sm text-rose-400/50">{"(" + date + ")"}</p>
      </div>
      <p>
        {description}
      </p>
      <p className="text-rose-300">
        <span className="">
          {"Status: "}
        </span>
        <span className="font-bold text-rose-200">
          {status}
        </span>
      </p>
    </div>
  )
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-8 gap-12">
      <div className="flex flex-row items-center gap-12">
        <Image className="rounded-full" width="300" height="300" alt="pfp" src="/pfp.jpg" />
        <div>
          <h1>
            rinz.online
          </h1>
        </div>
      </div>
      <div>
        <p>
          studying... reading...
        </p>
        <p>
          i run a small website agency for clothing brands, i hope to transition into something else soon
        </p>
        <p>
          i love to talk about variety of topics, including tech, art and startups
        </p>
        <p>
          <br />
          {"i'll post more on here soon, once i find some freedom"}
        </p>
        <div className="flex flex-row gap-4">

        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const whatpulseData = await fetch('https://api.whatpulse.org/user.php?user=1356819&format=json')
  const whatpulseDataJson = await whatpulseData.json()
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col w-full lg:flex-row items-center gap-12">
        <Image className="rounded-full" width="300" height="300" alt="pfp" src="/pfp.jpg" />
        <div className="w-full">
          <h1>
            rinz.online
          </h1>
          <p className="text-base text-neutral-300">
            Or Robert
          </p>
        </div>
      </div>
      <div>
        <p>
          I love technology
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1>
          Projects
        </h1>
        <p>
          <Link href="https://www.aurawizard.com/">
            {"AuraWizard"}
          </Link>
          <br />
          Analyzes your discord account and gives you a detailed aura report based on your profile, then puts you on a leaderboard to compete with other users
          <br />
          Made in ~9 hours
          <br />
          <span className="text-lg">
            Status: Finished (09-08-2024)
          </span>
        </p>
        <p>
          <Link href="https://www.vnvault.com/">
            {"VNVault"}
          </Link>
          <br />
          A vndb "alternative"
          <br />
          Works as a great vndb alternative, using the data from vndb with a few extra features and improvements
          <br />
          <span className="text-lg">
            Status: Released & in development
          </span>
        </p>
        <p>
          <Link href="https://www.doseweb.com/">
            {"DOSE (co-own)"}
          </Link>
          <br />
          Providing value to primarily young clothing brand owners through custom 3D work and high quality shopify themes
          <br />
          Side project and a money vessel
          <br />
          I handle the technical stuff such as theme development, maintaining databases, payments, etc.
          <br />
          <span className="text-lg">
            Status: Currently running
          </span>
        </p>
        <p>
          <Link href="https://www.spireui.com/">
            {"SpireUI (under early development)"}
          </Link>
          <br />
          Component library of high-end, unique, avant-garde React components
          <br />
          Currently in very early stages, public, but needs work in order to be usable
          <br />
          <span className="text-lg">
            Status: Released & in early development
          </span>
        </p>
      </div>
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
      <div>
        <h1 className="mb-4">
          Writing
        </h1>
        <p>
          I haven't written anything yet, but I'd like to start, hopefully soon, writing short articles to organize my thoughts
        </p>
      </div>
      <div>
        <h1>
          Stats:
        </h1>
        <p>
          {"Keys pressed: " + whatpulseDataJson.Keys}
        </p>
        <p>
          {"Data downloaded: " + whatpulseDataJson.Download}
        </p>
        <p>
          {"Data uploaded: " + whatpulseDataJson.Upload}
        </p>
        <p>
          {"Mouse clicks: " + whatpulseDataJson.Clicks}
        </p>
        <p>
          {"Mouse moved: " + whatpulseDataJson.DistanceInMiles + " miles"}
        </p>
      </div>
    </div>
  );
}

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
            rinz
          </h1>
          <p className="text-base text-neutral-300">
            Or Robert
          </p>
        </div>
      </div>
{/*       <div>
        <p>
          Software dev. I love technology
        </p>
      </div> */}
      <Divider />
      <div className="flex flex-col gap-6">
        <h1>
          Projects
        </h1>
        <Project
          title="AuraWizard"
          description={
            <>
              Analyzes your discord account and gives you a detailed aura report based on your profile, then puts you on a leaderboard to compete with other users
              <br />
              Made in ~9 hours
            </>
          }
          date="08-2024"
          status="Finished"
          href="https://www.aurawizard.com/"
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
          date="09-2024"
          status="In very early alpha & on hold"
          href="https://www.vnvault.com/"
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
      {/*       <div>
        <h1 className="mb-4">
          Writing
        </h1>
        <p>
          I'm very amateur, and I mainly write these for myself. Don't bark if they're bad, cause they most likely are
        </p>
        <br />
          <Essay
          title="Problem with LLMs"
          description={
            "Quick look into why generalized LLMs will most likely never be used in large scale projects "
          }
            href="problem-with-llm"
          />
      </div> */}
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

function Divider() {
  return (
    <div className="border-rose-900/50 border-b-[1px] w-full" />
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
        <Link href={href}>
          {title}
        </Link>
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
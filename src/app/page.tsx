import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const whatpulseData = await fetch('https://api.whatpulse.org/user.php?user=1356819&format=json')
  const whatpulseDataJson = await whatpulseData.json()
  return (
    <div className="flex flex-row gap-12 w-full">
      <div className="flex flex-col gap-12">
        <div className="flex flex-row items-center gap-12">
          <Image className="rounded-full" width="300" height="300" alt="pfp" src="/pfp.jpg" />
          <div>
            <h1>
              rinz.online
            </h1>
            <p className="text-base text-neutral-300">
              Studying... Reading...
            </p>
          </div>
        </div>
        <div>
          <p>
            I run a small website/media agency for clothing brands, I hope to transition into something else soon
          </p>
          <p>
            Love to talk about variety of topics, including tech, art and startups
          </p>
          <p>
            <br />
            {"I'll post more on here soon, once I find some freedom"}
          </p>
        </div>
        <div>
          <h1 className="mb-4">
            Projects
          </h1>
          <p>
            <Link href="https://www.aurawizard.com/">
              {"AuraWizard"}
            </Link>
            <br />
            Analyzes your discord account and gives you a detailed aura report based on your profile
            <br />
            Then puts you on a leaderboard to compete with other users
            <br />
            Made in 2 days
          </p>
          <p>
            <Link href="https://www.vnvault.com/">
              {"VNVault"}
            </Link>
            <br />
            Website with visual novel related minigames. Also works as a vndb wrapper
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
    </div>
  );
}

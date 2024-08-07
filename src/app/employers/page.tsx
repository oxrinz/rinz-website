import Image from "next/image";
import Link from "next/link";

export default function Employers() {
    return (
        <div className="flex flex-col gap-12 lg:max-w-[600px]">
            <h1>
                for employers
            </h1>
            <p>
                most of the projects i've worked on are either dropped, or unfinished.<br /><br />  some of them are live, some of them aren't, i figured it'd be best to showcase through a collection of screen recordings. none of these projects are something that i'm proud of, which is why i mostly don't showcase them online<br /> <br /> i have worked on many more projects than what's seen here, but these are the only ones that i have in a presentable form. these projects include minecraft servers, discord bots, custom windows file browser, and many many others 
            </p>
            <h1>
                old rinz.online
            </h1>
            <p>
                i think this is to date, the best manifestation of my skills of web development. the whole website is rendered on a single {"<canvas>"} and runs smoothly 60fps on most devices. <br /> <br />however, i wanted my website to be very accessible, so in the end i gave up on the concept and moved onto something more minimal 
            </p>
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/old-rinz-online.mp4" />
            <h1>
                stereo000000
            </h1>
            <p>
                a shopfiy website i made for a brand i was pretty invested in. i really like it, both brand and the website, it's simple and clean. <br /> <br />i think the website is still live, you can check it out here: <br />
                <Link href={"https://stereo000000.com"}>stereo000000.com</Link>
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/stereo000000.mp4" />
            <h1>
                spireui
            </h1>
            <p>
                collection of avant-garde react components. dropped project, might pick up on it soon <br /> <br />i also made an old concept front page which i think is worth showcasing. went with something else because of accessibility. you can see it in the last video<br /> <br />it's currently live, but keep in mind that it's in a very bad and wip state. you can check it out here: <br />
                <Link href={"https://spireui.com"}>spireui.com</Link>
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/spireui-1.mp4" />
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/spireui-2.mp4" />
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/spireui-3.mp4" />
            <h1>
                aura shopify theme
            </h1>
            <p>
                a super customizable shopify theme for clothing brands. clean, unique, and just works 
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/shopify-theme-1.mp4" />
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/shopify-theme-2.mp4" />
            <h1> 
                concept beat store
            </h1>
            <p>
                another one of those websites that's fully rendered on a single canvas. runs on web, 60fps on most devices. cool, pretty unconventional, probably won't look good on mobile
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/beat store.mp4" />
            <h1>
                odetari concept front page
            </h1>
            <p>
                concept front page for a rapper
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/odetari.mp4" />
            <h1>
                thing
            </h1>
            <p>
                i don't know what to call this, but it looks really really cool. simulating over 20 million particles in the browser
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/thing.mp4" />
            <h1>
                balenciaga concept store
            </h1>
            <p>
                concept store for balenci
            </p> 
            <video controls muted className="rounded-lg" width="100%" height="auto" src="employers/balenciaga.mp4" />
        </div>
    )
}
import Link from "next/link";

export default function Archive() {
    return (
        <div className="flex flex-col gap-12">
            <Link href="/" className="text-neutral-500  no-underline">
            {"<- Back to front page"}
            </Link>
            <div className="flex flex-col gap-4">
                <h1>
                    Old rinz.online
                </h1>
                <p>
                    Old personal website that I swtiched because I wanted it to be more accessible + this minimalist design is more vibey to me
                    <br />
                    One of my most impressive websites techwise, design could be improved alot but the code I had written is something that I'm very proud of
                    <br />
                    <Link href="https://streamable.com/fqk5mf">
                        Video
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1>
                    Particle art project
                </h1>
                <p>
                    A fairly impressive work of mine, simulating 20 million particles in the browser realtime
                    <br />
                    <Link href="https://streamable.com/6pbfcc">
                        Video
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1>
                    Old SpireUI front page concept
                </h1>
                <p>
                    I abandoned this front page because at the time I didn't like it enough, but looking back I think it's pretty neat
                    <br />
                    <Link href="https://streamable.com/zk1m4i">
                        Video
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1>
                    stereo000000
                </h1>
                <p>
                    A website I made for a pretty cool brand
                    <br />
                    <Link href="https://stereostereo.shop">
                        stereo000000 store
                    </Link>
                    <br />
                    <Link href="https://streamable.com/sxanab">
                        Video of early stages
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1>
                    Odetari concept front page
                </h1>
                <p>
                    A website front page for a rapper, not finished but cool enough
                    <br />
                    <Link href="https://streamable.com/60bku0">
                        Video
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1>
                    Concept beat store
                </h1>
                <p>
                    Another unfinished concept website
                    <br />
                    <Link href="https://streamable.com/3sykwc">
                        Video
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h1>
                    Random junk
                </h1>
                <p>
                    Mostly abandoned projects, but still deserving of a mention on here
                    <br />
                    <Link href="https://streamable.com/97kxxh">
                        Particle concept
                    </Link>
                    <br />
                    <Link href="https://streamable.com/cnwumt">
                        Chrome hearts concept front page
                    </Link>
                    <br />
                    <Link href="https://streamable.com/au8i3q">
                        An even older rinz.online website
                    </Link>
                </p>
            </div>
        </div>
    )
}

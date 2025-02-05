import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Twitter, Youtube } from "lucide-react";

export default async function Home() {
    return (
        <div className="col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <h1>
                    Projects
                </h1>
                <Project
                    title="RyuAI"
                    description={
                        <>
                            A collection of low-level AI related stuff. Hardware, library, distributed training. All tied together into a single, grand ballet
                        </>
                    }
                    date="01-2025"
                    status="Active"
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

        </div>
    );
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
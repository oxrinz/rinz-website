import Link from "next/link";

export default function Menu({ font }: any) {
    return (
        <div>
            <pre className={"whi whitespace-pre " + font}>
                📁 root<br />
                ├── 📁 projects<br />
                ┃   ├── 📁 ongoing<br />
                │   │   ├── <Link href="sex" className="text-base">z-ui.exe<br /></Link>
                │   │   └── <Link href="sex" className="text-base">dose.exe<br /></Link>
                │   ├── 📁 finished<br />
                │   │   └── <Link href="sex" className="text-base">aura-wizard.exe<br /></Link>
                │   └── 📁 unfinished/dropped<br />
                │       ├── 📄 <Link href="sex" className="text-base">spire-ui.exe<br /></Link>
                │       └── 📄 <Link href="sex" className="text-base">vnvault.exe<br /></Link>
                ├── 📁 writing<br />
                ├── 📄 <Link href="sex" className="text-base">archive.txt<br /></Link>
                └── 📄 <Link href="sex" className="text-base">stats.txt<br /></Link>
            </pre>
        </div>
    )
}
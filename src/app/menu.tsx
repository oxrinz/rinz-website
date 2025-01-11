import Link from "next/link";

export default function Menu({ font }: any) {
    return (
        <div>
            <pre className={"whi whitespace-pre " + font}>
                Utils<br />
                └── <Link href="https://bits-and-wits.vercel.app/" className="text-base">bits and wits<br /></Link>
                <br />
                Data Structures<br />
                ├── <Link href="https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf" className="text-base">Relational db paper<br /></Link>
                └── <Link href="https://cstack.github.io/db_tutorial/" className="text-base">DB from scratch<br /></Link>
                <br />
                ML & Deep learning<br />
                └── <Link href="https://arxiv.org/pdf/2310.11453" className="text-base">BitNet LLM<br /></Link>
                <br />
                Compsci<br />
                ├── <Link href="https://www.felixcloutier.com/x86/" className="text-base">x86 instruction set<br /></Link>
                └── <Link href="https://chromium.googlesource.com/chromiumos/docs/+/master/constants/syscalls.md" className="text-base">Linux syscall table<br /></Link>
            </pre>
        </div>
    )
}


export function Menu2({ font }: any) {
    return (
        <div>
            <pre className={"whi whitespace-pre " + font}>
                root<br />
                ├── projects<br />
                │   ├── ongoing<br />
                │   │   ├── <Link href="sex" className="text-base">Zig x CUDA starter<br /></Link>
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
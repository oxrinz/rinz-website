import Link from "next/link";

export default function Study({ font }: any) {
    return (
        <>
            <h1>Study</h1>
            <p>
                Collection of things to learn, currently mostly disorganized
            </p>
            <br />
            <pre className={"whi whitespace-pre " + font}>
                Utils<br />
                └── <Link href="https://bits-and-wits.vercel.app/" className="text-base">bits and wits<br /></Link>
                <br />
                Data Structures<br />
                ├── <Link href="https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf" className="text-base">Relational db paper<br /></Link>
                └── <Link href="https://cstack.github.io/db_tutorial/" className="text-base">DB from scratch<br /></Link>
                <br />
                ML & Deep learning<br />
                ├── <Link href="https://arxiv.org/pdf/2209.01188" className="text-base">Petals<br /></Link>
                └── <Link href="https://arxiv.org/pdf/2310.11453" className="text-base">BitNet LLM<br /></Link>
                <br />
                Compsci<br />
                ├── <Link href="https://www.amd.com/content/dam/amd/en/documents/radeon-tech-docs/instruction-set-architectures/rdna3-shader-instruction-set-architecture-feb-2023_0.pdf
" className="text-base">rdna3<br /></Link>
                ├── <Link href="https://www.youtube.com/playlist?list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf" className="text-base">mit swe<br /></Link>
                ├── <Link href="https://www.youtube.com/playlist?list=PLF1Z-APd9zK7usPMx3LGMZEHrECUGodd3" className="text-base">haskell<br /></Link>
                ├── <Link href="https://www.felixcloutier.com/x86/" className="text-base">x86 instruction set<br /></Link>
                └── <Link href="https://chromium.googlesource.com/chromiumos/docs/+/master/constants/syscalls.md" className="text-base">Linux syscall table<br /></Link>
                https://sirinsoftware.com/blog/inside-risc-v-microarchitecture
            </pre>
        </>
    )
}

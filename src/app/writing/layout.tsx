import Link from "next/link";

export default function WritingLayout({ children }: any) {
    return (
        <div className="flex flex-col gap-12">
            <Link href="/">
                {"<- Back to front page"}
            </Link>
            <div>
                {children}
            </div>
        </div>
    )
}
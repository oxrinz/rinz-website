import Link from "next/link";

export default function WritingLayout({ children }: any) {
    return (
        <div className="flex flex-col gap-12">
            <Link href="/" className="text-neutral-500  no-underline">
                {"<- Back to front page"}
            </Link>
            {children}
        </div>
    )
}
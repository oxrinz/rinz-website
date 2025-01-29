import Link from "next/link";

export const metadata = {
    parentLayoutPath: '../layout'
  }

export default function Archive({ children }: any) {
    return (
        <div>
            {children}
        </div>
    )
}

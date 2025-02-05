export const metadata = {
    title: 'Sumika',
    description: 'Independent Layout',
};

export const dynamic = 'force-static';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <html><body style={{ margin: "0" }}>{children}</body></html>;
}

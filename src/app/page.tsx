import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 gap-4">
      <Image width="400" height="400" alt="pfp" src="/pfp.jpg" />
      <p>
        life started at 16
      </p>
      <p>
        i excel zz
      </p>
    </main>
  );
}

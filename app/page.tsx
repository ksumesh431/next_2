import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world!</h1>
      <p>
        <Link href="/user">Go to user page</Link>
        <br />
        <Link href="/user/nes_user">Go to nested user page</Link>
      </p>
    </div>
  );
}

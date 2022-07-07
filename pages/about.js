import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <br />
      <Link href={"/about"}>
        <a>About</a>
      </Link>
      <br />
      <h1>Halaman About</h1>
    </div>
  );
}

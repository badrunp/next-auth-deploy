import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Signin() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <>
          <div>Anda sudah signin</div>
          <Link href={"/"}>
            <a>Kembali</a>
          </Link>
        </>
      ) : (
        <>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <button onClick={() => signIn("credentials", { redirect: false })}>
            Signin
          </button>
        </>
      )}
    </div>
  );
}

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("kesini");
    },
  });

  useEffect(() => {
    console.log(status);
  }, [status]);

  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div>
      <h1>Hello World</h1>
      {session ? (
        <button onClick={() => signOut()}>Keluar</button>
      ) : (
        <button onClick={() => signIn()}>Masuk</button>
      )}
    </div>
  );
}

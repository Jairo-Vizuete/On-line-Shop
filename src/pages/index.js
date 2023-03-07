import axios from "axios";
import Products from "components/elements/Products";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";

export default function Home({ products }) {
  const { data: session } = useSession();

  const handleLog = async () => {
    console.log(session);
    console.log(await getSession());
  };

  if (session) {
    return (
      <div className="bg-white">
        <div className=" flex justify-between items-center">
          <button
            className="rounded-2xl px-3 py-2 bg-green-500 hover:bg-green-600"
            onClick={handleLog}
          >
            Logs
          </button>
          Signed in as {session.user.name}
          <button
            className="ring-2 ring-blue-500 rounded-2xl px-3 py-2 text-white bg-red-800 hover:bg-red-600"
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <Image
            className="rounded-full shadow-2xl shadow-black"
            src={session.user.image}
            alt={session.user.name}
            width={100}
            height={100}
            priority
          />
        </div>
        <Products products={products} />;
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="rounded-2xl px-3 py-3 bg-green-500 hover:bg-green-600"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  const response = data.filter((product) => product.active != false);
  // console.log(response);
  return {
    props: {
      products: data,
    },
  };
}

import axios from "axios";
import Products from "components/elements/Products";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Home({ products }) {
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      const response = await getSession();
      console.log("hello");
      console.log(response);
    })();
  }, []);

  return <Products products={products} />;
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

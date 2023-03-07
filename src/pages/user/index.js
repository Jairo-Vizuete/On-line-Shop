import axios from "axios";
import Imagen from "next/image";

export default function User({ products }) {
  const dialogSuccesful = () => {
    return <dialog>hello</dialog>;
  };
  return (
    <div className="flex justify-around m-2 ">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="shadow-2xl rounded-lg p-4 justify-center align-middle"
          >
            <p className="text-center">{product.name}</p>
            <div className="flex items-center justify-center">
              <Imagen
                src="/descarga.jpg"
                // src={product.src}
                alt={product.name}
                width={100}
                height={100}
                priority
              />
            </div>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Rating: {"★".repeat(product.rating).padEnd("5", "☆")}</p>
            <p>Active: {product.active ? "True" : "False"}</p>
            <div className="flex space-x-4 justify-center mt-3 ">
              <button
                class="bg-green-500 hover:bg-green-700 text-white font-mono py-2 px-4 rounded"
                onClick={dialogSuccesful}
              >
                Buy
              </button>
              <button
                class="bg-yellow-500 hover:bg-yellow-700 text-white font-mono py-2 px-4 rounded"
                onClick={dialogSuccesful}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/hello");
  const response = data.filter((product) => product.active != false);
  console.log(response);
  return {
    props: {
      products: data,
    },
  };
}

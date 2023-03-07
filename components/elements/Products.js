import Imagen from "next/image";
import { useState } from "react";

export default function Products({ products }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-around m-2">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="shadow-2xl rounded-lg p-4 justify-center align-middle"
          >
            <p className="text-center">{product.name}</p>
            <div className="flex items-center justify-center">
              <Imagen
                className="shadow-sm rounded-2xl p-3"
                src={product.src}
                alt={product.name}
                width={150}
                height={150}
                priority
              />
            </div>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Rating: {"★".repeat(product.rating).padEnd("5", "☆")}</p>
            <p>Active: {product.active ? "True" : "False"}</p>
            <div className="flex space-x-4 justify-center mt-3 ">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-mono py-2 px-4 rounded"
                onClick={() => setIsOpen(true)}
              >
                Buy
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-mono py-2 px-4 rounded">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
      {/* Dialog */}
      {isOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 z-40 bg-gray-800 opacity-50"
            onClick={() => alert("hi")}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all">
              <h2 className="text-lg font-bold mb-4">Successful Purchase</h2>
              <p className="mb-4">Your item was purchase successfully</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

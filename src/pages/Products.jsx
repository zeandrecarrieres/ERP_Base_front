import React, { useState, useEffect } from "react";
import ProductLine from "../components/ProductLine";
import { NewProductModal } from "../components/NewProductModal";

function Products() {
  const [products, setProducts] = useState([]);
  // const [counter, setCounter] = useState(1);
  const [modalProductIsOpen, setModalProductIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function openProductModal() {
    setModalProductIsOpen(true);
  }

  function closeProductModal() {
    setModalProductIsOpen(false);
  }

  return (
    <div>
      <div className="mx-20 pb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-xl mt-20 font-bold">
            Lista de Produtos
          </h1>
          <button
            onClick={openProductModal}
            className="flex justify-center items-center text-xl bg-gray-700 hover:bg-gray-500 text-white p-4 rounded align-rigth h-12 mt-4 "
          >
            +
          </button>
        </div>
        <table className="table-fixed border w-full">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12 px-12 border bg-gray-100">Código</th>
              <th className="w-1/12  px-12 border py-2 bg-gray-100">
                Categoria
              </th>
              <th className="w-2/12 px-12 border bg-gray-100">Nome</th>
              <th className="w-2/12 px-12 border bg-gray-100">Descrição</th>
              <th className="w-1/12 px-12 border bg-gray-100">
                Preço de compra
              </th>
              <th className="w-1/12 px-12 border bg-gray-100">
                Preço de venda
              </th>
              <th className="w-1/12 px-12 border bg-gray-100">Qtde Estoque</th>
              <th className="w-1/12 px-12 border bg-gray-100">Editar</th>
              <th className="w-1/12 px-12 border bg-gray-100">Excluir</th>
            </tr>
          </thead>
        </table>

        {products.map((product) => (
          <ProductLine key={product.id} products={product} />
        ))}
      </div>

      <NewProductModal
        isOpen={modalProductIsOpen}
        onRequestClose={closeProductModal}
      />
    </div>
  );
}

export default Products;

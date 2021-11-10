import React, { useState, useEffect } from "react";
import ProductLine from "../components/ProductLine";
import { NewProductModal } from "../components/NewProductModal";

function Products() {
  const [products, setProducts] = useState([]);
  const [modalProductIsOpen, setModalProductIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [products]);

  function openProductModal() {
    setModalProductIsOpen(true);
  }

  function closeProductModal() {
    setModalProductIsOpen(false);
  }

  return (
    <div>
      <div className="mx-20 pb-12 xl:max-w-4xl">
        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-xl mt-20 ">Lista de Produtos</h1>
          <button
            onClick={openProductModal}
            className="flex justify-center items-center text-base bg-gray-700 hover:bg-gray-500 text-white p-3 rounded align-rigth h-8 mt-4 "
          >
            +
          </button>
        </div>
        <table className="table-fixed border  ">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12 border bg-gray-100 font-medium text-sm ">
                Código
              </th>
              <th className="w-1/12  border py-2 bg-gray-100 font-medium text-sm">
                Categoria
              </th>
              <th className="w-3/12 border bg-gray-100 font-medium text-sm">
                Nome
              </th>
              <th className="w-3/12  border bg-gray-100 font-medium text-sm">
                Descrição
              </th>
              <th className="w-3/12 pl-12 border bg-gray-100 font-medium text-sm">
                Preço Compra
              </th>
              <th className="w-3/12 border bg-gray-100 font-medium text-sm">
                Preço Venda
              </th>
              <th className="w-1/12 pl-6 border bg-gray-100 font-medium text-sm">
                Qtde Estoque
              </th>
              <th className="w-1/12 border bg-gray-100 font-medium text-sm">
                Editar
              </th>
              <th className="w-1/12 border bg-gray-100 font-medium text-sm">
                Excluir
              </th>
            </tr>
          </thead>
        </table>

        {products.map((product) => (
          <ProductLine key={product._id} products={product} />
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

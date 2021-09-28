import React from "react";
import { LineStyle, Assessment, Group, Assignment, AssignmentInd } from "@material-ui/icons";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="  h-screen bg-gray-100 sticky top-50 lg:w-3/12">
      <div className="">
        <div className="p-20">
          <h3 className="mb-4 text-2xl font-bold text-red-700 px-4">Menu</h3>
          <ul>
            <li className="py-2 hover:bg-gray-200 rounded p-4 hover:text-red-700   ">
              <LineStyle />
              <Link
                to="/"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700 "
              >
                Dashboard
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <Assignment />
              <Link
                to="/products"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700"
              >
                Produtos
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <Group />
              <Link
                to="/clients"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700"
              >
                Clientes
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <AssignmentInd />
              <Link
                to="/suppliers"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700"
              >
                Fornecedores
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <Assessment />
              <Link
                to="/transactions"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700"
              >
                Transações
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700">
              <Assessment />
              <Link
                to="/transactions"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700"
              >
                Estoque
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700">
              <Assessment />
              <Link
                to="/transactions"
                className="text-lg m-4 font-bold text-gray-500 hover:text-red-700"
              >
                Relatórios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

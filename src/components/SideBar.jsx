import React from "react";
import { LineStyle, Assessment, Group, Assignment, AssignmentInd } from "@material-ui/icons";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-full h-screen bg-gray-100 sticky top-50  lg:w-3/12">
      <div className="">
        <div className="p-4 xl:ml-10 mt-12">
          <h3 className="mb-4 text-xl text-red-700 px-4 ">Menu</h3>
          <ul>
            <li className="py-2 hover:bg-gray-200 rounded p-4 hover:text-red-700   ">
              <LineStyle />
              <Link
                to="/"
                className="text-base m-4 text-gray-500 hover:text-red-700 "
              >
                Dashboard
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <Assignment />
              <Link
                to="/products"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Produtos
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <Group />
              <Link
                to="/clients"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Clientes
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <AssignmentInd />
              <Link
                to="/suppliers"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Fornecedores
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <AssignmentInd />
              <Link
                to="/users"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Usuários
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700 ">
              <Assessment />
              <Link
                to="/transactions"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Transações
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700">
              <Assessment />
              <Link
                to="/transactions"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Estoque
              </Link>
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700">
              <Assessment />
              <Link
                to="/transactions"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Relatórios
              </Link>
              
            </li>
            <li className="py-2  hover:bg-gray-200 rounded p-4 hover:text-red-700">
              <Assessment />
              <Link
                to="/finances"
                className="text-base m-4 text-gray-500 hover:text-red-700"
              >
                Financeiro
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

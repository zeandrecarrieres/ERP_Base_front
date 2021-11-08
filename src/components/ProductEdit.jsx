import React, { useState, useEffect} from "react";
import axios from "axios";


function ProductEdit({onEditProductModalClose, id}) {
  // const [products, setProducts] = useState([]);
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qtde, setQtde] = useState("");
  const [purchase_price, setPurchase_price] = useState("");
  const [reference_price, setReference_price] = useState("");
  // const [selectedOption,setSelectedOption] = useState("")



  useEffect(() => {
     fetch(`${process.env.REACT_APP_URL_API}/products/` + id) //trocar o id por: products._id
    .then((response) => response.json())
    .then((data) => {
      setCode(data.code)
      setCategory(data.category)
      setDescription(data.description)
      setName(data.name)
      setPurchase_price(data.purchase_price)
      setQtde(data.qtde)
      setReference_price(data.reference_price)
      // setSelectedOption(category)
      console.log('teste',id, 'fim')
     
    }, []);



  }, [])


  const registerProduct = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL_API}/products/`+ id,
      data: {
        code,
        category,
        name,
        description,
        qtde,
        purchase_price,
        reference_price,
      },
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        alert("Produto Atualizado com sucesso!");
        setCode("");
        setCategory("");
        setName("");
        setDescription("");
        setQtde("");
        setPurchase_price("");
        setReference_price("");

        onEditProductModalClose()
      
      })
      .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg mt-24 p-8 m-4 md:max-w-2xl md:mx-auto">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={registerProduct}
        >
          <div className="text-xl mb-8 text-gray-500">
            Edição de Produto
          </div>

          <div className="flex justify-between ">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="code"
                className=" font-medium text-sm text-gray-500 "
              >
                Código
              </label>
              <input
                type="text"
                id="code"
                name="code"
                value={code}
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30"
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              {/* <label
                htmlFor="category"
                className=" font-medium text-sm text-gray-500 w-64"
              >
                Categoria
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30 px-2"
                onChange={(e) => setCategory(e.target.value)}
              /> */}
              <label
                htmlFor="category"
                className=" font-medium text-sm text-gray-500"
              >
                Tipo
              </label>
              <select
                id="options-select"
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                
                <option
                  value="Vinho Tinto"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Vinho Tinto
                </option>
                <option
                  value="Vinho Branco"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Vinho Branco
                </option>
                <option
                  value="Vinho Rosé"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Vinho Rosé
                </option>
                <option
                  value="Espumante"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Espumante
                </option>
                <option
                  value="Licoroso"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Licoroso
                </option>
              
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className=" font-medium text-sm text-gray-500"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="description"
              className=" font-medium text-sm text-gray-500"
            >
              Descrição
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="purchase_price"
                className=" font-medium text-sm text-gray-500"
              >
                Qtde Estoque
              </label>
              <input
                type="text"
                id="qtde"
                name="qtde"
                value={qtde}
                className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-full"
                onChange={(e) => setQtde(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="purchase_price"
                className=" font-medium text-sm text-gray-500"
              >
                Preço de Compra
              </label>
              <input
                type="text"
                id="purchase_price"
                name="purchase_price"
                value={purchase_price}
                className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-full"
                onChange={(e) => setPurchase_price(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="reference_price"
                className=" font-medium text-sm text-gray-500"
              >
                Preço de Venda
              </label>
              <input
                type="text"
                id="reference_price"
                name="reference_price"
                value={reference_price}
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full"
                onChange={(e) => setReference_price(e.target.value)}
              />
            </div>
          </div>

          <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white  text-base mx-auto p-4 rounded w-full sm:w-auto">
            Atualizar
          </button>
        </form>

        <div></div>
      </div>
      

    </div>
  );
}

export default ProductEdit;

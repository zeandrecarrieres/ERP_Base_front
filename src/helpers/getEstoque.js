export function getEstoque(transactions, productToCompare) {
    const transactionsFiltered = transactions.filter(transaction => {
      return transaction.productListItems.filter(product => product[0] === productToCompare.name).length
    })
    
    const productsFiltered = transactionsFiltered.reduce((acc, product) => {
      return acc.concat({
        product: product.productListItems.filter(
          (productt) => productt[0] === productToCompare.name
        )[0],
        type: product.type,
      });
    }, [])
    
    const estoque = productsFiltered.reduce((acc, product) => {
      
      const saidas = ["Venda", "Saída", "Consignado"]

      if(saidas.includes(product.type)) {
        return acc - product.product[1]
      } else {
        return acc + product.product[1]
      }
    }, 0)

  return estoque
}
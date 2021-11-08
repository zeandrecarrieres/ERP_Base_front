import { useContext} from 'react'
import Modal from 'react-modal'
import ProductAdd from './ProductAdd'



export function NewProductModal({isOpen, onRequestClose}) {
  

  // console.log(counter)
 
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
       
        
      >
        <ProductAdd onProductModalClose={onRequestClose} />
      </Modal>
    )
}
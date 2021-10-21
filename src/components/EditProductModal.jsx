import Modal from 'react-modal'
import ProductEdit from './ProductEdit'

export function EditProductModal({isOpen, onRequestClose, id}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
       
         
        // id={product._id}
        // contentLabel="Example Modal"
      >
        <ProductEdit onEditProductModalClose={onRequestClose} id={id} />
      </Modal>
    )
}
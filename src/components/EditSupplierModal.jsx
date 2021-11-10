import Modal from 'react-modal'
import SupplierEdit from './SupplierEdit'

export function EditSupplierModal({isOpen, onRequestClose, id}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
       
         
        // id={product._id}
        // contentLabel="Example Modal"
      >
        <SupplierEdit onEditSupplierModalClose={onRequestClose} id={id} />
      </Modal>
    )
}
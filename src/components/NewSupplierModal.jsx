import Modal from 'react-modal'
import SupplierAdd from './SupplierAdd'

export function NewSupplierModal({isOpen, onRequestClose}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >
        <SupplierAdd onSupplierModalClose={onRequestClose}/>
      </Modal>
    )
}
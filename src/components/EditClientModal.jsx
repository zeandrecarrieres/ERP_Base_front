import Modal from 'react-modal'
import ClientEdit from './ClientEdit'

export function EditClientModal({isOpen, onRequestClose, id}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
       
         
        // id={product._id}
        // contentLabel="Example Modal"
      >
        <ClientEdit onEditClientModalClose={onRequestClose} id={id} />
      </Modal>
    )
}
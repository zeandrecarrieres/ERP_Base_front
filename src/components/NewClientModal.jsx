import Modal from 'react-modal'
import ClientAdd from './ClientAdd'

export function NewClientModal({isOpen, onRequestClose}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >
        <ClientAdd onCLientModalClose={onRequestClose}/>
      </Modal>
    )
}
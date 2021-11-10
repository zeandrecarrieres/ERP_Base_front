import Modal from 'react-modal'
import UserAdd from './UserAdd'


export function NewUserModal({isOpen, onRequestClose}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="User Modal"
      >
        <UserAdd onUserModalClose={onRequestClose} />
      </Modal>
    )
}
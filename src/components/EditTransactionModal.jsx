import Modal from 'react-modal'
import TransactionEdit from './TransactionEdit'

export function EditTransactionModal({isOpen, onRequestClose, id}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
       
         
        // id={product._id}
        // contentLabel="Example Modal"
      >
        <TransactionEdit onEditTransactionModalClose={onRequestClose} id={id} />
      </Modal>
    )
}
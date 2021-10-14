import Modal from 'react-modal'
import TransactionsAdd from './TransactionAdd'

export function NewTransactionModal({isOpen, onRequestClose}) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >
        <TransactionsAdd onTransactionModalClose={onRequestClose}  />
      </Modal>
    )
}
import styles from './modal.module.css'

export default function Modal({ modalText, agreementFunction }) {

    const hideModal = () => {
        document.getElementById("modal").classList.add(styles.hideModal)
        agreementFunction()
    }

    return (
        <div id="modal" className={styles.modal}>
            <div id="modalSheet" className={styles.modalSheet}>
                <div className={styles.modalText}>
                    {modalText}
                </div>
                <div className={styles.buttons}>
                    {/* <button className={styles.disagree} onClick={hideModal}>
                        I don't understand.
                    </button> */}
                    <button className={styles.button} onClick={hideModal}>
                        I understand.
                    </button>
                </div>
            </div>
        </div>
    )
}
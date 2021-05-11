import Nav from '../../components/nav'
import styles from '../../styles/New.module.css'
import utils from '../../styles/utils.module.css'

export default function Step2() {
    return (
        <div className={styles.container}>
            <Nav navTitle="Create" />

            <div className={utils.instructions}>

                <div className={utils.step + ' ' + utils.active}>
                    <h2>Step 1</h2>
                    <p className={utils.stepInstr}>Pick a font.</p>
                </div>

                <div className={utils.step + ' ' + utils.active}>
                    <h2>Step 2</h2>
                    <p className={utils.stepInstr}>Edit your font.</p>
                </div>

                <div className={utils.step}>
                    <h2>Step 3</h2>
                    <p className={utils.stepInstr}>Copy the text required, and paste.</p>
                </div>

                <div className={utils.step}>
                    <h2>Step 4</h2>
                    <p className={utils.stepInstr}>Download.</p>
                </div>
            </div>
        </div>
    )
}
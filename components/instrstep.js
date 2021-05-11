import utils from './instrstep.module.css'

export default function InstrStep({ steps }) {
    return (
        <div className={utils.instructions}>

            <div className={steps - 0 > 0 ? utils.step + ' ' + utils.active : utils.step}>
                <h2>Step 1</h2>
                <p className={utils.stepInstr}>Pick a font.</p>
            </div>

            <div className={steps - 1 > 0 ? utils.step + ' ' + utils.active : utils.step}>
                <h2>Step 2</h2>
                <p className={utils.stepInstr}>Edit your font.</p>
            </div>

            <div className={steps - 2 > 0 ? utils.step + ' ' + utils.active : utils.step}>
                <h2>Step 3</h2>
                <p className={utils.stepInstr}>Copy the text required, and paste.</p>
            </div>

            <div className={steps - 3 > 0 ? utils.step + ' ' + utils.active : utils.step}>
                <h2>Step 4</h2>
                <p className={utils.stepInstr}>Download.</p>
            </div>
        </div>
    )
}
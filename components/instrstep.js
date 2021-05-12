import utils from './instrstep.module.css'

export default function InstrStep({ steps }) {

    const getClass = (step) => {
        let c = steps - step
        if (c > 0) return utils.step + ' ' + utils.done
        if (c == 0) return utils.step + ' ' + utils.active
        return utils.step
    }

    return (
        <div className={utils.instructions}>

            <div className={getClass(1)}>
                <h2>Step 1</h2>
                <p className={utils.stepInstr}>Pick a font.</p>
            </div>

            <div className={getClass(2)}>
                <h2>Step 2</h2>
                <p className={utils.stepInstr}>Edit your font.</p>
            </div>

            <div className={getClass(3)}>
                <h2>Step 3</h2>
                <p className={utils.stepInstr}>Copy the text required, and paste.</p>
            </div>

            <div className={getClass(4)}>
                <h2>Step 4</h2>
                <p className={utils.stepInstr}>Download.</p>
            </div>
        </div>
    )
}
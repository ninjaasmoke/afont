import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import Loading from '../../components/loading'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-4.module.css'
import { useAppContext } from '../../context/AppContext'
import { jsPDF } from 'jspdf'
import { useState } from 'react'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import FourOhFour from '../404'

export default function Step4() {

    const { allPages, stepMsg } = useAppContext()

    const [progress, setProgress] = useState(0)

    const generatePDF = (doc) => {
        setProgress(0.1)
        const len = allPages.length;
        for (let i = 0; i < len; i++) {
            const element = allPages[i].substring(22);
            setProgress(((i + 1) / len) * 100)
            doc.addImage(element, 'PNG', 0, 0, 210, 297)
            if (i !== len) doc.addPage()
        }
        setProgress(0)
    }

    const generateZIP = (zip) => {
        setProgress(0.1)
        var img = zip.folder("Pages");
        for (let i = 0; i < allPages.length; i++) {
            const element = allPages[i].substring(22);
            setProgress(((i + 1) / allPages.length) * 100)
            img.file(i.toString() + '.png', element, { base64: true });
            // setTimeout(() => { }, 100) // try adding delay
        }
        setProgress(0)
    }

    const downloadPDF = () => {
        const doc = new jsPDF();
        generatePDF(doc);
        doc.save('Assignmentium.pdf')
    }

    const downoadZIP = () => {
        const zip = new JSZip();
        generateZIP(zip)
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                saveAs(content, "Assignmentium.zip");
            });
    }

    return (
        <>
            {
                allPages.length == 0
                    ?
                    <FourOhFour />
                    :
                    <div className={utils.container}>
                        <Head>
                            <title>Assignmentium | Create - Step 4</title>
                        </Head>


                        <Nav navTitle="Create" linkTo="/" />

                        <InstrStep steps={4} />

                        <div className={utils.h1} style={{ marginTop: stepMsg === 'true' ? '100px' : 0 }}>
                            <div><h1>You are done! Download your files.</h1> <span title="Selected font" > 👋 ⚡</span> </div>
                        </div>
                        {
                            progress == 0
                                ?
                                <div className={stepStyle.buttons}>
                                    <button onClick={() => downloadPDF()} className={stepStyle.download} >Download as PDF</button>
                                    <button onClick={() => downoadZIP()} className={stepStyle.download} >Download as ZIP &nbsp; <span>(Recommended)</span> </button>
                                </div>

                                :
                                <>
                                    <Loading progress={progress} text="Generating PDF & ZIP" />
                                </>
                        }
                        <div className={utils.nextButton}>
                            <Link href="/">
                                &larr; Go back home
                            </Link>
                        </div>
                    </div>
            }
        </>
    )
}
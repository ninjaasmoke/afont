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

export default function Step4() {

    const { allPages } = useAppContext()
    const doc = new jsPDF();
    const zip = new JSZip();

    const [progress, setProgress] = useState(0)

    const generatePDF = () => {
        setProgress(0.1)
        for (let i = 0; i < allPages.length; i++) {
            const element = allPages[i].substring(22);
            setProgress(((i + 1) / allPages.length) * 100)
            doc.addImage(element, 'PNG', 0, 0, 210, 297)
            doc.addPage()
        }
        setProgress(0)
    }

    const generateZIP = () => {
        setProgress(0.1)
        var img = zip.folder("Pages");
        for (let i = 0; i < allPages.length; i++) {
            const element = allPages[i].substring(22);
            setProgress(((i + 1) / allPages.length) * 100)
            img.file(i.toString() + '.png', element, { base64: true });
        }
        setProgress(0)
    }

    const downoadZIP = () => {
        generateZIP()
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                saveAs(content, "Assignmentium.zip");
            });
    }

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Create</title>
            </Head>


            <Nav navTitle="Create" linkTo="/" />

            <InstrStep steps={4} />

            <div className={utils.h1}>
                <div><h1>You are done! Download your files.</h1> <span title="Selected font" > 👋 ⚡</span> </div>
            </div>
            {
                progress == 0
                    ?
                    <div className={stepStyle.buttons}>
                        <button onClick={() => { generatePDF(); doc.save('Assignmentium.pdf') }} className={stepStyle.download} >Download as PDF</button>
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
    )
}
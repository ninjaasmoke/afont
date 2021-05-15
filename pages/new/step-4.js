import Head from 'next/head'
// import { useRouter } from 'next/router'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import Loading from '../../components/loading'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-4.module.css'
import { useAppContext } from '../../context/AppContext'
import { jsPDF } from 'jspdf'
import { useEffect, useState } from 'react'
import JSZip from 'jszip'

import { saveAs } from 'file-saver'

export default function Step4() {

    // const router = useRouter();
    const { allPages } = useAppContext()
    const doc = new jsPDF();
    const zip = new JSZip();

    const [progress, setProgress] = useState(0)

    const generatePDF = () => {
        for (let i = 0; i < allPages.length; i++) {
            const element = allPages[i].substring(22);
            doc.addImage(element, 'PNG', 0, 0, 210, 297)
            doc.addPage()
        }
    }

    const generateZIP = () => {
        var img = zip.folder("Pages");
        for (let i = 0; i < allPages.length; i++) {
            const element = allPages[i].substring(22);
            setProgress(((i + 1) / allPages.length) * 100)
            img.file(i.toString() + '.png', element, { base64: true });
        }
    }

    const downoadZIP = () => {
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                // Force down of the Zip file
                saveAs(content, "download.zip");
            });
    }

    useEffect(() => {
        generateZIP()
    }, [])

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Create</title>
            </Head>


            <Nav navTitle="Create" linkTo="/" />

            <InstrStep steps={4} />

            <div className={utils.h1}>
                <div><h1>Download your zip.</h1> <span title="Selected font" >⚡</span> </div>
            </div>
            {
                progress == 100 || progress == 0

                    ? <div className={stepStyle.buttons}>
                        <button onClick={() => { generatePDF(); doc.save('ex.pdf') }} className={stepStyle.download} ><img src="/images/download.svg" />{' '} Download PDF</button>


                        <button onClick={() => downoadZIP()} className={stepStyle.download} ><img src="/images/download.svg" />{' '} Download ZIP</button>


                    </div>

                    : <Loading radius={60} stroke={4} progress={progress} />
            }
        </div>
    )
}
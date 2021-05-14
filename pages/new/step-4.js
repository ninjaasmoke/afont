import Head from 'next/head'
// import { useRouter } from 'next/router'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
// import Loading from '../../components/loading'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-4.module.css'
import { useAppContext } from '../../context/AppContext'
import { jsPDF } from 'jspdf'
import { useEffect, useState } from 'react'
// import JSZip from 'jszip'

// import { saveAs } from 'file-saver'

export default function Step4() {

    // const router = useRouter();
    const { allPages } = useAppContext()
    const doc = new jsPDF();
    // const zip = new JSZip();

    // const [progress, setProgress] = useState(0)

    const generatePDF = () => {
        for (let i = 0; i < allPages.length; i++) {
            doc.addImage(allPages[i], 'PNG', 0, 0, 210, 297, 'MEDIUM', 'MEDIUM')
            doc.addPage()
        }
    }

    useEffect(() => {
        for (let i = 0; i < allPages.length; i++) {
            doc.addImage(allPages[i], 'PNG', 0, 0, 210, 297, 'MEDIUM', 'MEDIUM')
            doc.addPage()
        }
    }, [])

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Create</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script> */}
            </Head>


            <Nav navTitle="Create" linkTo="/" />

            <InstrStep steps={4} />

            <div className={utils.h1}>
                <div><h1>Download your pdf.</h1> <span title="Selected font" >⚡</span> </div>
            </div>
            <div className={stepStyle.buttons}>
                <button onClick={() => { doc.save('ex.pdf') }} className={stepStyle.download} ><img src="/images/download.svg" />{' '} Download PDF</button>


                {/* <button onClick={() => {
                            zip.generateAsync({ type: 'blob' }).then((c) => {
                                saveAs(c, 'ex.zip')
                            })
                        }} className={stepStyle.download} ><img src="/images/download.svg" />{' '} Download ZIP</button> */}


            </div>
        </div>
    )
}
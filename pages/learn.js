import Head from 'next/head'
import Nav from '../components/nav'
import learnStyles from '../styles/Learn.module.css'

export default function Learn() {
    return (
        <div className={learnStyles.container}>
            <Head>
                <title>Assignmentium | Learn</title>
            </Head>

            <Nav linkTo="/" navTitle="Learn" />

            <div className={learnStyles.grid}>
                <h1 className={learnStyles.heading} id="how" >
                    How to use Assignmentium
                </h1>
                <div className={learnStyles.gridBreak} />
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Step 0
                    </h2>
                    <p className={learnStyles.instr}>
                        Click on <code>New Assignment</code> from home page.
                    </p>
                </div>
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Step 1
                    </h2>
                    <p className={learnStyles.instr}>
                        Click on a font from the next page.  <br />
                        This font will be used for your assignment or document.
                    </p>
                </div>
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Step 2
                    </h2>
                    <p className={learnStyles.instr}>
                        Now that you have picked a font, you can choose the background for the document.
                        <br />
                        {/* You are given a choice between 4 different backgrounds. Pick one.
                        <br /> */}
                        {/* The chosen option is highlighted with green border.
                        <br /> */}
                        Click on the <code>Next</code> button in the bottom right (or bottom if you are a mobile device).
                    </p>
                </div>
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Step 3
                    </h2>
                    <p className={learnStyles.instr}>
                        Edit the font options like <code>Font Size</code>, <code>Font Color</code>, <code>Top Padding</code>, etc.
                        <br />
                        Copy your text to the page.
                        <br />
                        <span className={learnStyles.emp} >Once the page is filled, click on <code>New Page</code> button(at the bottom) to ADD NEW PAGE.</span>
                        <br />
                        Once you are done filling all pages, click <code>Download</code> button. Confirm the promt.
                    </p>
                </div>
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Step 4
                    </h2>
                    <p className={learnStyles.instr}>
                        Download either as <code>PDF</code> on <code>ZIP</code>(recommended) file.
                        <br />
                        Wait for the app to convert to the required format.
                        <br />
                        Download will start automatically. 👋 ⚡
                    </p>
                </div>
                <div className={learnStyles.gridBreak} />
                <h1 className={learnStyles.heading} id="how" >
                    App Options & Settings
                </h1>
                <div className={learnStyles.gridBreak} />
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Theme
                    </h2>
                    <p className={learnStyles.instr}>
                        Click on the sun / moon icon in the top-right corner to toggle between themes.
                    </p>
                </div>
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Disable step instructions
                    </h2>
                    <p className={learnStyles.instr}>
                        Navigate to <code>Settings</code> page from home page.
                        <br />
                        Diable (or enable) <code>show steps</code> option.
                        <br />
                        Disable when you don't need the steps to show while creating a new assignment.
                    </p>
                </div>
                <div className={learnStyles.step}>
                    <h2 className={learnStyles.h2} >
                        Image pixel ratio.
                    </h2>
                    <p className={learnStyles.instr}>
                        Change between various pixel ratios to get the perfect balance between image quality and file size.
                    </p>
                </div>
            </div>

        </div>
    )
}
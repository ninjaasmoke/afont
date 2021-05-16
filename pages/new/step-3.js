import Head from 'next/head'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-3.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getFontNames } from '../../lib/fonts'
import { useAppContext } from '../../context/AppContext'
import { bgImages } from '../../helper/bgImages'
import FourOhFour from '../404'

import { toPng } from 'html-to-image';
import Loading from '../../components/loading'

const getElement = (id = '.pageInpt') => document.querySelectorAll(id)

const updateFontElem = (attr, val) => getElement().forEach(c => c.style[attr] = val.toString())

export default function Step3() {

    const { selBgImgType, fontState, setFontState, setAllPages, allPages, stepMsg, pixelRatio } = useAppContext()

    const bgImgs = bgImages.filter(c => c.name == selBgImgType)[0]

    const router = useRouter();
    const {
        query: { specimen },
    } = router;
    const fontExists = getFontNames().includes(specimen)

    const [fontSize, setFontSize] = useState(fontState.fontSize)
    const [lPadding, setlPadding] = useState(fontState.paddingLeft)
    const [tPadding, settPadding] = useState(fontState.paddingTop)
    const [lSpace, setLSpace] = useState(fontState.letterSpacing)
    const [wSpace, setWSpace] = useState(fontState.wordSpacing)
    const [lHeight, setLHeight] = useState(fontState.lineHeight)
    const [fColor, setFColor] = useState(fontState.fColor)
    const [fWeight, setFWeight] = useState(fontState.fontWeight)

    const getRandBg = Math.floor(Math.random() * bgImgs.src.length)
    const [pageId, setPageId] = useState([0])
    const newP = (num = 0) => <Page
        bgImg={bgImgs.src[getRandBg]}
        specimen={specimen}
        pageID={num}
        color={fColor}
        fontSize={fontSize}
        tPadding={tPadding}
        lPadding={lPadding}
        lSpace={lSpace}
        wSpace={wSpace}
        lHeight={lHeight}
        fWeight={fWeight}
    />;
    const [pages, setPages] = useState([newP(0)])


    const handleFont = (e) => {
        setFontSize(e.target.value)
        setFontState({ ...fontState, fontSize: fontSize })
        updateFontElem('fontSize', e.target.value + 'px')
    }

    const handleLPadding = (e) => {
        setlPadding(e.target.value)
        setFontState({ ...fontState, paddingLeft: lPadding })
        updateFontElem('paddingLeft', e.target.value + 'px')
    }

    const handleTPadding = (e) => {
        settPadding(e.target.value)
        setFontState({ ...fontState, paddingTop: tPadding })
        updateFontElem('paddingTop', e.target.value + 'px')
    }

    const handleWSpace = (e) => {
        setWSpace(e.target.value)
        setFontState({ ...fontState, wordSpacing: wSpace })
        updateFontElem('wordSpacing', e.target.value + 'px')
    }

    const handleLSpace = (e) => {
        setLSpace(e.target.value)
        setFontState({ ...fontState, letterSpacing: lSpace })
        updateFontElem('letterSpacing', e.target.value + 'px')
    }

    const handleLHeight = (e) => {
        setLHeight(e.target.value)
        setFontState({ ...fontState, lineHeight: lHeight })
        updateFontElem('lineHeight', e.target.value + 'px')
    }

    const handleFColor = (e) => {
        setFColor(e.target.value)
        setFontState({ ...fontState, fColor: fColor })
        updateFontElem('color', e.target.value)
    }

    const handleFWeight = (e) => {
        setFWeight(e.target.value)
        setFontState({ ...fontState, fontWeight: fWeight })
        updateFontElem('fontWeight', e.target.value)
    }

    const addNewPage = () => {
        let id = pageId[pageId.length - 1]
        setPageId([...pageId, id + 1]);
        console.log(pageId)
        setPages([...pages, newP(id + 1)]);
    }

    const delPage = (index) => {
        if (confirm('Are you sure you want to delete this page?')) {
            const ids = pageId.splice(index, 1)
            const pagesLi = pages.splice(index, 1)
            setPageId([...ids])
            setPages([...pagesLi])
        }
    }

    const popPage = () => {
        if (confirm('Are you sure you want to delete the last page?')) {
            pageId.pop()
            pages.pop()
            setPageId([...pageId])
            setPages([...pages])
        }
    }

    const [progress, setProgress] = useState(0)

    const download = async () => {
        if (confirm('You cannot make any more changes! Continue?')) {
            window.scrollTo(0, 0)
            setShowDisplay('loading')
            var allP = []
            for (let i = 0; i < pages.length; i++) {
                setProgress((i + 1) / pages.length * 100)
                let input = document.getElementById(i);
                let dataUrl;
                try {
                    dataUrl = await toPng(input, { pixelRatio: parseInt(pixelRatio) });
                    if (dataUrl) {
                        allP.push(dataUrl)
                    }
                } catch (error) {
                    console.error('Oops, something went wrong!', error);
                    alert('Something went wrong: ' + error)
                }
            }
            setAllPages([...allP])
            router.push('/new/step-4')
        }
    }

    const [showDisplay, setShowDisplay] = useState('ready')


    const toDisplay = {
        'loading': <Loading progress={progress} text="Generating your images..." />,
        'ready': ''
    }



    return (
        <>
            {
                !fontExists
                    ? <FourOhFour />
                    : <div className={utils.container}>
                        <Head>
                            <title>Assignmentium | Create - Step 3</title>
                            <link rel="preconnect" href="https://fonts.gstatic.com" />
                        </Head>

                        <link href={"https://fonts.googleapis.com/css2?family=" + specimen + "&display=swap"} rel="stylesheet" />

                        <Nav navTitle="Create" />

                        <InstrStep steps={3} />

                        <div className={utils.h1} style={{ marginTop: stepMsg === 'true' ? '100px' : 0 }} >
                            <div><h1>Add the text.</h1> <span style={{ fontFamily: specimen }} title="Selected font" >{specimen}{' '}⚡</span> </div>
                        </div>

                        {toDisplay[showDisplay]}

                        <div className={stepStyle.editWrapper}>

                            <div className={stepStyle.editFontWrapper}>
                                <h4>Font options.</h4>
                                <div className={stepStyle.fontOptions}>
                                    <label htmlFor="fontSize">Font Size: {fontSize}</label>
                                    <input type="range" min="10" max="30" value={fontSize} onChange={e => handleFont(e)} className="slider" id="fontSize" name="fontSize" />

                                    <label htmlFor="tPadding">Top Padding: {tPadding}</label>
                                    <input type="range" min="0" max="100" step="2" value={tPadding} onChange={e => handleTPadding(e)} className="slider" id="tPadding" name="tPadding" />

                                    <label htmlFor="lPadding">Left Padding: {lPadding}</label>
                                    <input type="range" min="0" max="100" step="2" value={lPadding} onChange={e => handleLPadding(e)} className="slider" id="lPadding" name="lPadding" />

                                    <label htmlFor="lSpace">Letter Spacing: {lSpace}</label>
                                    <input type="range" min="0" max="8" value={lSpace} onChange={e => handleLSpace(e)} className="slider" id="lSpace" name="lSpace" />

                                    <label htmlFor="wSpace">Word Spacing: {wSpace}</label>
                                    <input type="range" min="0" max="8" value={wSpace} onChange={e => handleWSpace(e)} className="slider" id="wSpace" name="wSpace" />

                                    <label htmlFor="lHeight">Line Height: {lHeight} <span className={stepStyle.caution}>Use with caution.</span> </label>
                                    <input type="range" min="12" max="30" step="1" value={lHeight} onChange={e => handleLHeight(e)} className="slider" id="lHeight" name="lHeight" />

                                    {/* <label htmlFor="fWeight">Font Weight: {fWeight}</label>
        <input type="range" min="400" max="700" step="100" value={fWeight} onChange={e => handleFWeight(e)} className="slider" id="lHeight" name="lHeight" /> */}

                                    <label htmlFor="fColor">Font Color: {fColor}</label>
                                    <div className={stepStyle.swatch}>
                                        <input type="color" id="fColor" name="fColor" value={fColor} onChange={e => handleFColor(e)} />
                                    </div>
                                </div>
                            </div>

                            <div className={stepStyle.currImg}>
                                <h4>Selected background.</h4>

                                <div className={stepStyle.imgWrapper}>
                                    {
                                        pages.map((page, index) => (
                                            <div key={index} className={stepStyle.pageLeaf + ' thisIsAPage'} id={pageId[index]}  >
                                                {page}
                                                {/* <span className={stepStyle.deleteImg}>
                        <img src='/images/del_red.svg' onClick={() => delPage(index)} title="Delete this page" />
                    </span> */}
                                            </div>
                                        ))
                                    }

                                    <div className={utils.pageButtons}>
                                        {pages.length !== 1 && <button
                                            className={utils.redButton} style={{ marginTop: 20 }}
                                            onClick={() => popPage()}
                                        >Remove page</button>}
                                        <button
                                            className={utils.nextButton} style={{ marginTop: 20 }}
                                            onClick={() => addNewPage()}
                                        >Add page</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showDisplay == 'ready' && <div>
                            <button onClick={() => download()} className={utils.bottomButton} >
                                Download  →
                                </button>
                        </div>}
                    </div>
            }
        </>
    )
}

const Page = ({
    bgImg,
    specimen,
    color,
    fontSize,
    tPadding,
    lPadding,
    lSpace,
    wSpace,
    lHeight,
    pageID,
    fWeight,
    // defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
}) => {
    return (
        <div >
            <img
                src={bgImg}
            />
            <div className={stepStyle.imgText}>
                <textarea
                    type="text" name={pageID}
                    className={stepStyle.pageInp + " pageInpt"} autoCorrect="false" spellCheck="false"
                    defaultValue={pageID == 0 ? 'Type here! Lorem Ipsum...' : ''}
                    style={{
                        fontFamily: specimen,
                        padding: 8,
                        color: color,
                        fontSize: fontSize + 'px',
                        fontWeight: fWeight,
                        paddingTop: tPadding + 'px',
                        paddingLeft: lPadding + 'px',
                        lineHeight: lHeight + 'px',
                        letterSpacing: lSpace + 'px',
                        wordSpacing: wSpace + 'px',
                        overflow: 'hidden',
                    }}
                />
            </div>
        </div>
    )
}
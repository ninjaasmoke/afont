import Head from 'next/head'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-3.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getFontNames } from '../../lib/fonts'
import { useAppContext } from '../../context/AppContext'
import { bgImages } from '../../helper/bgImages'

const getElement = (id = '.pageInpt') => document.querySelectorAll(id)

const updateFontElem = (attr, val) => getElement().forEach(c => c.style[attr] = val.toString())

export default function Step3() {

    const { selBgImgType, fontState, setFontState } = useAppContext()

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

    const [pageId, setPageId] = useState([1])
    const newP = <Page
        bgImgs={bgImgs}
        specimen={specimen}
        pageID={pageId[pageId.length - 1]}
        color={fColor}
        fontSize={fontSize}
        tPadding={tPadding}
        lPadding={lPadding}
        lSpace={lSpace}
        wSpace={wSpace}
        lHeight={lHeight} />;
    const [pages, setPages] = useState([newP])


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

    const getRandBg = Math.floor(Math.random() * bgImgs.src.length)

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Create</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>

            <link href={"https://fonts.googleapis.com/css2?family=" + specimen + "&display=swap"} rel="stylesheet" />

            <Nav navTitle="Create" />

            <InstrStep steps={3} />

            <div className={utils.h1}>
                <div><h1>Add the text.</h1> <span style={{ fontFamily: specimen }} title="Selected font" >{specimen}{' '}⚡</span> </div>
            </div>


            <div className={stepStyle.editWrapper}>

                <div className={stepStyle.editFontWrapper}>
                    <h4>Font options.</h4>
                    <div className={stepStyle.fontOptions}>
                        <label htmlFor="fontSize">Font Size: {fontSize}</label>
                        <input type="range" min="10" max="30" value={fontSize} onChange={e => handleFont(e)} class="slider" id="fontSize" name="fontSize" />

                        <label htmlFor="tPadding">Top Padding: {tPadding}</label>
                        <input type="range" min="0" max="70" step="2" value={tPadding} onChange={e => handleTPadding(e)} class="slider" id="tPadding" name="tPadding" />

                        <label htmlFor="lPadding">Left Padding: {lPadding}</label>
                        <input type="range" min="0" max="70" step="2" value={lPadding} onChange={e => handleLPadding(e)} class="slider" id="lPadding" name="lPadding" />

                        <label htmlFor="lSpace">Letter Spacing: {lSpace}</label>
                        <input type="range" min="0" max="8" value={lSpace} onChange={e => handleLSpace(e)} class="slider" id="lSpace" name="lSpace" />

                        <label htmlFor="wSpace">Word Spacing: {wSpace}</label>
                        <input type="range" min="0" max="8" value={wSpace} onChange={e => handleWSpace(e)} class="slider" id="wSpace" name="wSpace" />

                        <label htmlFor="lHeight">Line Height: {lHeight} <span className={stepStyle.caution}>Use with caution.</span> </label>
                        <input type="range" min="12" max="30" step="1" value={lHeight} onChange={e => handleLHeight(e)} class="slider" id="lHeight" name="lHeight" />

                        <label htmlFor="fColor">Font Color: {fColor}</label>
                        <div className={stepStyle.swatch}>
                            <input type="color" id="fColor" name="fColor" value={fColor} onChange={e => handleFColor(e)} />
                            {/* <div class="info">
                                <h1>Input</h1>
                                <h2>Color</h2>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className={stepStyle.currImg}>
                    <h4>Selected background.</h4>

                    <div className={stepStyle.imgWrapper}>
                        {
                            pages.map((page, index) => (
                                <div key={index}>
                                    {page}
                                </div>
                            ))
                        }

                        <button
                            className={utils.nextButton} style={{ marginTop: 20 }}
                            onClick={() => { setPages([...pages, newP]); setPageId([...pageId, pageId[pageId.length - 1] + 1]) }}
                        >Add page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Page = ({
    bgImgs,
    specimen,
    fColor,
    fontSize,
    tPadding,
    lPadding,
    lSpace,
    wSpace,
    lHeight,
    pageID,
    defText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
}) => {
    return (
        <div className={stepStyle.pageLeaf}>
            <img
                src={bgImgs.src[0]}
                height={700}
                width={495}
            />
            <div className={stepStyle.imgText}>
                <textarea type="text" name={pageID} id={pageID} className={stepStyle.pageInp + " pageInpt"} autoCorrect="false" spellCheck="false"
                    defaultValue={defText}
                    style={{
                        fontFamily: specimen,
                        padding: 8,
                        color: fColor,
                        fontSize: fontSize + 'px',
                        paddingTop: tPadding + 'px',
                        paddingLeft: lPadding + 'px',
                        lineHeight: lHeight + 'px',
                        letterSpacing: lSpace + 'px',
                        wordSpacing: wSpace + 'px',
                        overflow: 'hidden'
                    }}
                />
            </div>
        </div>
    )
}

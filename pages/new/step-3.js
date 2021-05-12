import Head from 'next/head'
import Image from 'next/image'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-3.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getFontNames } from '../../lib/fonts'

const getElement = (id = 'pages') => document.getElementById(id)

const updateFontElem = (attr, val) => getElement().style[attr] = val.toString()

export default function Step3() {

    const router = useRouter();
    const {
        query: { specimen, bgImg },
    } = router;
    const fontExists = getFontNames().includes(specimen)
    const [fontSize, setFontSize] = useState(16)
    const [lPadding, setlPadding] = useState(8)
    const [tPadding, settPadding] = useState(8)
    const [lSpace, setLSpace] = useState(0)
    const [wSpace, setWSpace] = useState(0)
    const [lHeight, setLHeight] = useState(24)

    const handleFont = (e) => {
        setFontSize(e.target.value)
        updateFontElem('fontSize', e.target.value + 'px')
    }

    const handleLPadding = (e) => {
        setlPadding(e.target.value)
        updateFontElem('paddingLeft', e.target.value + 'px')
    }

    const handleTPadding = (e) => {
        settPadding(e.target.value)
        updateFontElem('paddingTop', e.target.value + 'px')
    }

    const handleWSpace = (e) => {
        setWSpace(e.target.value)
        updateFontElem('wordSpacing', e.target.value + 'px')
    }

    const handleLSpace = (e) => {
        setLSpace(e.target.value)
        updateFontElem('letterSpacing', e.target.value + 'px')
    }

    const handleLHeight = (e) => {
        setLHeight(e.target.value)
        updateFontElem('lineHeight', e.target.value + 'px')
    }

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
                <div><h1>Add the text.</h1> <span style={{ fontFamily: specimen }}>{specimen}{' '}⚡</span> </div>
            </div>


            <div className={stepStyle.editWrapper}>

                <div className={stepStyle.editFontWrapper}>
                    <h4>Font options.</h4>
                    <div className={stepStyle.fontOptions}>
                        <label htmlFor="fontSize">Font Size: {fontSize}</label>
                        <input type="range" min="10" max="30" value={fontSize} onChange={e => handleFont(e)} class="slider" id="fontSize" name="fontSize" />

                        <label htmlFor="lPadding">Left Padding: {lPadding}</label>
                        <input type="range" min="0" max="70" step="2" value={lPadding} onChange={e => handleLPadding(e)} class="slider" id="lPadding" name="lPadding" />

                        <label htmlFor="tPadding">Top Padding: {tPadding}</label>
                        <input type="range" min="0" max="70" step="2" value={tPadding} onChange={e => handleTPadding(e)} class="slider" id="tPadding" name="tPadding" />

                        <label htmlFor="lSpace">Letter Spacing: {lSpace}</label>
                        <input type="range" min="0" max="8" value={lSpace} onChange={e => handleLSpace(e)} class="slider" id="lSpace" name="lSpace" />

                        <label htmlFor="wSpace">Word Spacing: {wSpace}</label>
                        <input type="range" min="0" max="8" value={wSpace} onChange={e => handleWSpace(e)} class="slider" id="wSpace" name="wSpace" />

                        <label htmlFor="lHeight">Line Height: {lHeight} <span className={stepStyle.caution}>Use with caution.</span> </label>
                        <input type="range" min={fontSize} max={fontSize * 2} value={lHeight} onChange={e => handleLHeight(e)} class="slider" id="lHeight" name="lHeight" />
                    </div>
                </div>

                <div className={stepStyle.currImg}>
                    <h4>Selected background.</h4>
                    <div className={stepStyle.imgWrapper}>
                        <img
                            src={bgImg}
                            height={700}
                            width={495}
                        />
                        <div
                            className={stepStyle.imgText}
                            id="pages"
                            style={{
                                fontFamily: specimen,
                                padding: 8
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!
                        </div>
                    </div>
                    <div className={stepStyle.imgWrapper}>
                        <img
                            src={bgImg}
                            height={700}
                            width={495}
                        />
                        <div
                            className={stepStyle.imgText}
                            id="pages"
                            style={{
                                fontFamily: specimen,
                                padding: 8
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!
                        </div>
                    </div>
                    <div className={stepStyle.imgWrapper}>
                        <img
                            src={bgImg}
                            height={700}
                            width={495}
                        />
                        <div
                            className={stepStyle.imgText}
                            id="pages"
                            style={{
                                fontFamily: specimen,
                                padding: 8
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
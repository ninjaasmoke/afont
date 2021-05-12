import Head from 'next/head'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-3.module.css'
import { useState } from 'react'

export default function Step3() {
    const [fontSize, setFontSize] = useState(24)
    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Create</title>
            </Head>

            <Nav navTitle="Create" />

            <InstrStep steps={3} />

            <div className={utils.h1}><h1 >Select your background style.</h1> <span style={{ fontFamily: specimen }}>{specimen}{' '}⚡</span> </div>


            <div className={stepStyle.editWrapper}>
                <div className={stepStyle.currImg}>
                    <h4>2. Selected background.</h4>
                    <div className={stepStyle.imgWrapper}>
                        <Image
                            src={selectedImg}
                            height={window.innerWidth * .5}
                            width={window.innerWidth * .5 / 1.414}
                        />
                        <div
                            className={stepStyle.imgText}
                            style={{ padding: 20 }}
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
                <div className={stepStyle.editFontWrapper}>
                    <h4>3. Font options.</h4>
                    <div className={stepStyle.fontOptions}>
                        <label for="fontSize">Font Size: {fontSize}</label>
                        <input type="range" min="1" max="100" value={fontSize} onChange={(e) => { setFontSize(e.target.value) }} class="slider" id="fontSize" name="fontSize" />
                    </div>
                </div>
            </div>
        </div>
    )
}
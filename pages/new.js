import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/New.module.css'

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const step1Content = <h1>Step 1</h1>;
const step2Content = <h1>Step 2</h1>;
const step3Content = <h1>Step 3</h1>;
const step4Content = <h1>Step 4</h1>;

function step2Validator() {
    return false;
}

function step3Validator() {
    return true;
}

export default function New() {
    const onSubmit = () => {
        alert('submit data');
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create</title>
            </Head>

            <Nav linkTo="/" navTitle="Create" />

            {/* <div className={styles.progress}>
                <StepProgressBar
                    startingStep={0}
                    // wrapperClass="progress-wrapper-custom"
                    onSubmit={onSubmit}
                    submitBtnName="Finish"
                    previousBtnName="Back"
                    nextBtnName="Next"
                    steps={[
                        {
                            content: step1Content
                        },
                        {
                            content: step2Content,
                            validator: step2Validator
                        },
                        {
                            content: step3Content,
                            validator: step3Validator
                        },
                        {
                            content: step4Content
                        }
                    ]}
                />
            </div> */}
        </div>
    )
}
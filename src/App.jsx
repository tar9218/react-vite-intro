import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferentSection from "./components/DifferentSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";
import EffectSection from "./components/EffectSection.jsx";
function App() {
    const [tab, setTab] = useState('effect');

    return (
        <>
            <Header></Header>
            <main>
                <IntroSection></IntroSection>
                <TabsSection active={tab} onChangeFunction={(current) => setTab(current)}></TabsSection>

                {tab === 'main' && <>
                    <TeachingSection></TeachingSection>
                    <DifferentSection></DifferentSection>
                </>}


                {tab === 'feedback' && <><FeedbackSection></FeedbackSection></>}

                {tab === 'effect' && <><EffectSection></EffectSection></>}
            </main>
        </>
    )
}

export default App

import Button from "./Button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";

function DifferentSection() {
    const [contentType, setContentType] = useState(null);
    console.log('App render')
    function handleClick(type) {
        setContentType(type);
    }

    return (
        <section>
            <h3>What is the different</h3>
            <Button
                isActive={contentType === 'way'}
                buttonClicked={() => handleClick('way')}
            >
                Button1
            </Button>
            <Button
                isActive={contentType === 'easy'}
                buttonClicked={() => handleClick('easy')}
            >
                Button2
            </Button>
            <Button
                isActive={contentType === 'program'}
                buttonClicked={() => handleClick('program')}
            >
                Button3
            </Button>
            {!contentType && <p>Click on Button</p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    );
}

export default DifferentSection;

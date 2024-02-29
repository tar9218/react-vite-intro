import Button from "./Button/Button.jsx";
import { useState, useRef } from "react";

function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if(event.key === 'Enter') {
            setShow(true);
        }
    }

    return (
        <div>
            <h3>Input Value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                className="control"
            />
        </div>
    );
}


function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help'
    })

    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help');
    // const [hasError, setHasError] = useState(false);

    function handleNameChange(event) {
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);

        // setForm({
        //     name: event.target.value,
        //     hasError: event.target.value.trim().length === 0,
        //     reason: form.reason
        // })

        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }


    function toggleError() {
        // setHasError((prev) => !prev);

    }

    return (
        <section>
            <h3>Feedbacks</h3>

            <Button buttonClicked={toggleError}>Toggle Error</Button>

            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name"> Your name</label>
                <input
                    type="text"
                    className="control"
                    value={form.name}
                    style={{
                        border: !form.hasError ? null : '1px solid red'
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Reasons</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({...prev, reason: event.target.value}))
                    }
                >
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">Suggest</option>
                </select>

                <pre>
                    Name: {form.name}
                    <br/>
                    Reason: {form.reason}
                </pre>

                <Button
                    disabled={form.hasError}
                    isActive={!form.hasError}
                >
                    Send
                </Button>
            </form>

            <StateVsRef/>
        </section>
    )
}

export default FeedbackSection;

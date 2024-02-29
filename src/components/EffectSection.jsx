import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState, useCallback} from "react";

function EffectSection() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState();
    const [users, setUsers] = useState([]);


    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response  = await fetch('https://jsonplaceholder.typicode.com/users')
        const  users = await response.json();
        setUsers(users);
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);




    // useEffect(() => {
    //     async function fetchUsers() {
    //         setLoading(true);
    //         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const  users = await response.json();
    //         setUsers(users);
    //         setLoading(false);
    //     }
    //
    //     fetchUsers();
    // }, []);



    function openModal() {
        setModal(true);
    }

    return (
        <section>
            <h3>Effects</h3>
            <Button buttonClicked={openModal}>Open Information</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                </p>
                <Button buttonClicked={() => setModal(false)}>Close</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {!loading && (
                <ul>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            )}
        </section>
    );
}

export default EffectSection;

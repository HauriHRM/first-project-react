import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import Avatar from "../../Novassets/avatar.svg";
import Arrow from "../../Novassets/arrow.svg";
import Trash from "../../Novassets/trash.png";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import  Button  from "../../components/Button";

import {
    Containers,
    Image,
    User,
} from "./styles";

function App() {

    const [users, setUsers] = useState([]);

    const history = useHistory();
    
   

    useEffect(() => {
        async function fetchUsers() {
            const { data: newUsers } = await axios.get("http://localhost:3001/users");
            setUsers(newUsers);

        }

        fetchUsers();

    }, []);


    async function deleteUser(userId) {

        await axios.delete(`http://localhost:3001/users/${userId}`);

        const newUsers = users.filter(user => user.id !== user.userId);

        setUsers(newUsers);
    }
    function goBackPage(){
        history.push("/")
    }

    return (
        <Containers>
            <Image alt="logo-imagem" src={Avatar} />
            <ContainerItens isBlur={true}>
                <H1>Usuarios</H1>

                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.Id)}>
                                <img alt="lata-de-lixo" src={Trash} />
                            </button>
                        </User>
                    ))};
                </ul>

                <Button isBack={true} onClick={goBackPage}>
                    < img alt="seta" src={Arrow} /> voltar
                </Button>

            </ContainerItens>
        </Containers>
    );
}

export default App;








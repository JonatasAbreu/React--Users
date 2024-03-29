import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'
import H1  from '../../components/Title'
import ContainerIntes from '../../components/containerIntes'
import Button from "../../components/button"
import { Container, InputLabel, Input, Image } from "./styles"
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import { wait } from "@testing-library/user-event/dist/utils"
function App() {
    const [users, setUsers] = useState([])
    const history = useHistory()
    const inputName = useRef()
    const inputAge = useRef()

    async function addNewUser() {
        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value,
        })

        setUsers([...users, newUser])

        history.push('/usuarios')
    }



    return (
        <Container>
            <Image alt="logo-imagem" src={People} />
            <ContainerIntes>
                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>

                <Input ref={inputName} placeholder="Nome"></Input>

                <InputLabel>Idade</InputLabel>

                <Input ref={inputAge} placeholder="Idade"></Input>

                <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>



            </ContainerIntes>

        </Container>
    )

}

export default App
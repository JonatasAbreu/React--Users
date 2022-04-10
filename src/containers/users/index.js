import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory} from "react-router-dom" 
import { Container, Image, User } from "./styles"
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import { wait } from "@testing-library/user-event/dist/utils"
import H1 from '../../components/Title'
import ContainerIntes from '../../components/containerIntes'
import Button from "../../components/button"

function Users() {
    const [users, setUsers] = useState([])
    const history = useHistory()

  

    useEffect(() => {

        async function fetchUsers() {
            const { data: newUser } = await axios.get("http://localhost:3001/users")

            setUsers(newUser)
        }
        fetchUsers()
    }, [])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUsers = users.filter(user => user.id !== userId)

        setUsers(newUsers)
    }

    function goBackpage() {
       history.push("/")
    }

    return (
        <Container>
            <Image alt="logo-imagem" src={Avatar} />
            <ContainerIntes isBlur={true}>
                <H1>Usuários</H1>

                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}><img alt="lixeira" src={Trash}></img></button>
                        </User>
                    ))}
                </ul>

                <Button isBack={true} onClick={goBackpage}><img alt="seta" src={Arrow} />Voltar</Button>

            </ContainerIntes>

        </Container>
    )

}

export default Users
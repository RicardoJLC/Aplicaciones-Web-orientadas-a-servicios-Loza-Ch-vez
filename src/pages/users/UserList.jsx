import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function UserList(){

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const getUsers = async () =>{

        try{

            const response = await fetch('https://fakestoreapi.com/users');
            const data = await response.json();

            setUsers(data)

        }catch(error){
            console.error("Error getting users:", error)
        }
    }

    useEffect(()=>{
       getUsers()
    },[])

    const handleView = (id) => {
        navigate(`/users/${id}`)
    }

    const handleDelete = async (id) => {

        const confirmDelete = confirm("Are you sure you want to delete this user?")

        if(!confirmDelete) return

        try{

            await fetch(`https://fakestoreapi.com/users/${id}`,{
                method:'DELETE'
            })

            setUsers(prevUsers =>
                prevUsers.filter(user => user.id !== id)
            )

        }catch(error){
            console.error("Error deleting user:", error)
        }

    }

    const goToCreateUser = () =>{
        navigate('/users/create')
    }

    return (
        <div>

            <h1>User List</h1>

            <Button
                text="Create User"
                action={goToCreateUser}
            />

            <table border="1" width="100%">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {users?.map((user)=>(

                        <tr key={user.id}>

                            <td>{user.id}</td>

                            <td>
                                {user.name.firstname} {user.name.lastname}
                            </td>

                            <td>{user.email}</td>

                            <td>{user.phone}</td>

                            <td>

                                <Button
                                    text="Ver"
                                    action={() => handleView(user.id)}
                                />

                                <Button
                                    text="Borrar"
                                    action={() => handleDelete(user.id)}
                                />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default UserList;
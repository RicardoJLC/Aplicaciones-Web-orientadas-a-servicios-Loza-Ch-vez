import { useEffect, useState } from "react";
import Button from "../../components/Button";


function UserList(){

    const [users, setUsers] = useState([])


    const getUsers = async () =>{
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();

        setUsers(data)
    }

    useEffect(()=>{
       getUsers()
    },[])


    return (
        <div>
            <h1>User List</h1>
            <div className="container">
                {
                    users.map((user)=>(
                    <div className="card">
                        <h2>{user.name.firstname} {user.name.lastname}</h2>
                        <p> {user.email}</p>
                        <p> {user.phone}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList;
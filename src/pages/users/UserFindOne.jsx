import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function UserFindOne(){

    const { id } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const getUser = async () =>{

        try{

            const response = await fetch(`https://fakestoreapi.com/users/${id}`)
            const data = await response.json()

            setUser(data)

        }catch(error){
            console.error("Error getting user:", error)
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    if(!user){
        return <h2>Loading user...</h2>
    }

    return(
        <div>

            <h1>User Detail</h1>

            <h2>
                {user.name.firstname} {user.name.lastname}
            </h2>

            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Username:</b> {user.username}</p>

            <Button
                text="Back to users"
                action={() => navigate('/users/list')}
            />

        </div>
    )
}

export default UserFindOne;
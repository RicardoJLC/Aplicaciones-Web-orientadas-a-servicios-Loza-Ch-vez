import { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function CreateUser(){

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    })

    const handleChange = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () =>{

        if(formData.firstname === '' || formData.lastname === ''){
            alert("Name is required")
            return
        }

        try{

            const response = await fetch('https://fakestoreapi.com/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:{
                        firstname: formData.firstname,
                        lastname: formData.lastname
                    },
                    email: formData.email,
                    phone: formData.phone
                })
            })

            const data = await response.json()

            console.log("User created:", data)

            alert("User created successfully")

            navigate('/users/list')

        }catch(error){
            console.error("Error creating user:", error)
        }

    }

    return(

        <div>

            <h1>Create User</h1>

            <div>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />
            </div>

            <Button
                text="Create User"
                action={handleSubmit}
            />

        </div>

    )
}

export default CreateUser
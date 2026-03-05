import { useEffect, useState } from "react";
import { AuthContext } from "./authContex";


function AuthProvider({ children }){
    const [session, setSession] = useState(null)

    useEffect(()=>{
        const session = localStorage.getItem('session')

        if(session){
            setSession(JSON.parse(session))
        }
    },[])

    const login = (username, password) => {
        if(username ==='admin' && password ==='1234'){
            setSession({ username })
            localStorage.setItem('session', JSON.stringify({ username}))
            return true
        }else{
            return false
        }
    }

    const logout = () => {
        setSession(null)
        localStorage.removeItem('session')
    }

    
    return (
        <AuthContext.Provider value={{ session, login, logout, isLoggedIn: !!session}} >
            {children}
        </AuthContext.Provider> 
    )
}

export default AuthProvider;

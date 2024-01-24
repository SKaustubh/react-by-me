import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login as authLogin} from "../store/authSlice"
import { useDispatch } from 'react-redux'
import { Button , input,Logo  } from "./index"
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session =await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData)dispatch(authLogin(userData))
                navigate("/")
            }
            
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Login

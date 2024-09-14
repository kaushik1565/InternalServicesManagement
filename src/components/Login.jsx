import React,{useState} from 'react'


export const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleUserName= (e)=>{
        setUsername(e.target.value)
    }

    const handlePassword= (e)=>{
        setPassword(e.target.value)
    }

    const submitLogin = (e) =>{
        e.preventDefault()
        console.log(username)
        console.log(password)
    }
  return (
    <>
    <form onSubmit={submitLogin}>
        <h1>Login</h1>
        <div>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleUserName} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
    </form>
    
    </>
    
    
  )
}


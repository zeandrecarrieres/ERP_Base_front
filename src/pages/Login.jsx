import { useState } from 'react'

function Login() {
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    return (
        <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col w-3/12 justify-center items-center bg-gray-300 ">
            <h1 className="mt-4 text-lg font-bold">Login</h1>
            <form className="flex flex-col">
                <label htmlFor="email">email</label>
                <input type="text" name="email" className="h-12 rounded-md w-72 p-4 " placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value)}/> 
                <label htmlFor="password" className="mt-4">password</label>
                <input type="text" name="password" className="h-12 rounded-md p-4" placeholder="******" value={password} onChange={ (e) => setPassword(e.target.value)}/>     
                <button className="h-12 rounded-md bg-gray-700 my-8 text-white " >Entrar</button>               
            </form>


        </div>
        </div>
    )
}

export default Login

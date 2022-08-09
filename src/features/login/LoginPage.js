import React from 'react'
import { useAuth } from '../../shared/UseAuth'

export const LoginPage = () => {
    const {onLogin} = useAuth()
    const handleLogin = () => {
        onLogin('Yyh')
    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

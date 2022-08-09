import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../shared/UseAuth'

export const ProtectedPage = () => {
    const {user} = useAuth();
    return user ? <Outlet/> : <Navigate to= '/' replace/>
}

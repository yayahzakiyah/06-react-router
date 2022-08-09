import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const Page1 = () => {
    //Programmatically Navigation using book
    const navigate = useNavigate()
    return (
        <>
            <h2>
                Page 1
            </h2>
            <button onClick={() => {
                navigate('child1-1');
            }}>To Child 1
            </button>
            <button onClick={() => {
                navigate('child1-2');
            }}>To Child 2
            </button>
            <Outlet/>
        </>
    )
}

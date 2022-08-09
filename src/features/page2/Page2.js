import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Page2 = () => {
    const navigate = useNavigate()
    return (
        <>
            <h2>
                Page 2
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

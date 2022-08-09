import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Page1 = () => {
    useEffect(()=> {
        return () => {
            console.log('Unmounting page 1');
        }
    })
  
    return (
    <div>
        Page1
        {/* <Link to='/'>Back</Link> */}
    </div>
    )
}

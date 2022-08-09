import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Page2 = () => {
    useEffect(()=> {
        return () => {
            console.log('Unmounting page 2');
        }
    })
  
    return (
        <div>
            Page2
            {/* <Link to='/'>Back</Link>     */}
        </div>
    )
}

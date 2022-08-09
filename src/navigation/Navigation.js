import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div style={{display: 'flex', flexDirection:'row'}} >
        <div style={{
        width:'30%',
        backgroundColor: 'darkolivegreen',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '8px'}}>
        <h2 className='title'>Navigation</h2>
        <Link to='page1'>Page 1</Link>
        <Link to='page2'>Page 2</Link>
        <div style={{padding:'8px'}}>
            <Outlet/> 
        </div>
        {/* kalo nested pakai outlet */}
    </div>
    </div>
    
  )
}

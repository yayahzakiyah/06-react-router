import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

export  const productListDb = [
    {id: '1', productName: 'Product 1', productInfo: 'Info 1'},
    {id: '2', productName: 'Product 2', productInfo: 'Info 2'},
    {id: '3', productName: 'Product 3', productInfo: 'Info 3'},
];

export const Page2 = () => {  
    const [productList, setProductList] = useState([])
    useEffect(() => {
        setProductList(productListDb)
    })
   return (
    <>
        <h2>Page 2</h2>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                {productList.map((product) => {
                    return <Link className='item' 
                                key={product.id}
                                to={`/page2/${product.id}`}
                                state={{product:product}}>
                                {product.productName}</Link>
                })}
            </div>
            <div style={{marginLeft: '16px'}}>
                <Outlet/>
            </div>
        </div>
    </>
   )
}

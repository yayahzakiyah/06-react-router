import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Page1 = () => {
    // tambahan
    // useEffect(() => {
    //     return () => {
    //         console.log('Unmounting page 1');
    //     }
    // })

    const navigate = useNavigate();

    return(
        // <div>
        //     Page 1
        // </div>


        // <div>
        //     Page 1
        //     {/* <Link to='/'>Back</Link> */}
        // </div>

        <>
        <h2>
            Page 1
        </h2>
        <button onClick={() => {navigate('child1-1')}}>To Child 1</button>
        <button onClick={() => {navigate('child1-2')}}>To Child 2</button>
        <Outlet/>
        </>
    )
}

export default Page1;
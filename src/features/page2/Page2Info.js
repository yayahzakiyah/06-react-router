import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {productList} from "./Page2";

const Page2Info = ()=> {
    const {state: {product}}= useLocation();
    return(
       <div>
                ID      : {product.id}
                Name    : {product.productName}
                Info    : {product.productInfo}
        </div>

    )
}
export default Page2Info;
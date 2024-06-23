import { useEffect, useState } from "react"
import Header from "./Header"
import Menubar from "./Menubar"
import Card from "./Card"
import Footer from "./Footer"

const Main = () => {

    const [prod , setProd] = useState([]);

   const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProd(json))
   }

   useEffect(() => {
    getProduct();
   },[])
    return (
        <div>
            <Header />
            <Menubar />
            <Card products={prod}/>
            <Footer />
        </div>
    )
}

export default Main;
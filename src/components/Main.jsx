import { useEffect, useState } from "react"
import Header from "./Header"
import Menubar from "./Menubar"
import Card from "./Card"
import Footer from "./Footer"

const Main = () => {

    const [prod , setProd] = useState([]);
    const [search , setSearch] = useState('');

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
            <Header setSearch={setSearch}/>
            <Menubar />
            <Card search={search} />
            <Footer />
        </div>
    )
}

export default Main;
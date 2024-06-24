import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Card = (prop) => {
    const [pro , setPro] = useState([]);
    

    const fetchProducts = async() => {
      const querySnapshot = await getDocs(collection(db, "products"))
      const allPosts = querySnapshot.docs.map((product) => {
          return {
              ...product.data(),
              id: product.id
          }
      })
      console.log("Posts", allPosts)
      setPro(allPosts)
    }
    useEffect(() => {
         fetchProducts();
    },[])
    return (
        <div className="grid grid-cols-4 p-5"  >
            {
                pro?.map((data) => {
                    return <Link to="/details" state={{data:data}}> <div className="border border-spacing-1 p-2 ml-3 mt-3" >
                    <img src={data?.url} alt="" className="w-60 h-43" />
                    <h1 className="font-bold text-xl">₹ {data?.price}</h1>
                    <h1>{data?.name}</h1>
                    <h1>{data?.category}</h1>
                    </div></Link>
                })
            }
        </div>
    )
}

export default Card;
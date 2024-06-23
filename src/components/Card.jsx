const Card = (props) => {
    return (
        <div className="grid grid-cols-4 p-5"  >
            {
                props?.products?.map((data) => {
                    return <div className="border border-spacing-1 p-2 ml-3 mt-3" >
                    <img src={data?.image} alt="" className="w-60 h-43" />
                    <h1 className="font-bold text-xl">${data?.price}</h1>
                    <h1>{data?.title}</h1>
                    <h1>{data?.category}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default Card;
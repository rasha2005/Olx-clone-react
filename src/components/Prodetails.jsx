import { useLocation } from "react-router-dom";

const ProDetails = () => {
    const location = useLocation();
    
    return (
        <div className="flex p-5">
        <img className="mr-5" src={location?.state?.data?.url} alt="" />
        <div>
          <h1 className="font-bold text-3xl">₹{location?.state?.data?.price}</h1>
          <h1 className="mt-5"><span className="font-semibold">Name</span>: {location?.state?.data?.name}</h1>
          <h1 className="mt-5"><span className="font-semibold">Category</span>: {location?.state?.data?.category}</h1>
          <h1 className="mt-5"><span className="font-semibold">Place</span>: {location?.state?.data?.place}</h1>
          <h1 className="mt-5"><span className="font-semibold">Description</span>: {location?.state?.data?.description}</h1>
        </div>
      </div>

    )
}

export default ProDetails;
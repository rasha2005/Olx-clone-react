import { useState ,useContext} from "react";
import { AuthContext } from "../store/userAuthContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import pica from "pica";

const Sellprodudct = () => {

    const [name , setName] = useState('');
    const [category , setCategory] = useState('');
    const [price , setPrice] = useState('')
    const [place , setPlace] = useState('');
    const [image , setImage] = useState(null);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("user",user)
    const resizeImage = async (file, width, height) => {
        const picaInstance = pica();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
    
        await new Promise((resolve) => {
          img.onload = resolve;
        });
    
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
    
        await picaInstance.resize(img, canvas);
        const resizedBlob = await picaInstance.toBlob(canvas, file.type);
    
        return resizedBlob;
      };

    const handleSubmit = async () => {
        const resizedImage = await resizeImage(image, 300, 300);
        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + image.name);
        await uploadBytes(storageRef, resizedImage); 
        const url = await getDownloadURL(storageRef);
        const date = new Date();
        const docRef = await addDoc(collection(db, "products"), {
            
          name,
          category,
          price,
          place,
          url,
          userId: user.uid,
          createdAt: date.toDateString(),
        });
        if(docRef) {
            navigate('/');
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
        <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Upload Form</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
             <input
                type="text"
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <img className="h-40 w-40" src={image ? URL.createObjectURL(image) : ''} alt="Posts" />
            <br />
            <input
                type="file"
                onChange={(e) => {
                    setImage(e.target.files[0]);
                }}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button onClick={handleSubmit} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Upload and Submit
            </button>
        </div>
    </div>
    )
}

export default Sellprodudct;
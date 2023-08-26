import React,{useState} from "react"
import SearchBar from "./Component/SearchBar"
import ImageGallery from "./Component/ImageGallery"


const App = () =>{
  const [images , setImages] = useState([]) 



  return (
    <div>
      <SearchBar  setImages={setImages}/>
      <ImageGallery  images={images} />
    


    </div>

  )

}

export default App




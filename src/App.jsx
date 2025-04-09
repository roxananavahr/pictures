import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImage from "./api"


function App() {
  //searchImage('cars')
const[images, setImages] = useState([])

const handleSubmit = async (term) =>{
  console.log('Usted esta buscando con : ',term)
  const result = await searchImage(term)
  setImages(result)
}
  return (
    <>
    <h1>Pictures App</h1>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App

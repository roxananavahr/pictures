import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImage from "./api"


function App() {
  //searchImage('cars')

  return (
    <>
    <h1>Pictures App</h1>
    <SearchBar/>
    <ImageList/>
    </>
  )
}

export default App

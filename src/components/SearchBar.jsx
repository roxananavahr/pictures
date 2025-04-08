import {useState} from "react"
import './SearchBar.css'

const SearchBar = ({ onSubmit}) => {
    const[term, setTerm] = useState

    const handleFormSubmit = (Event) =>{
        Event.preventDefault()
        console.log('Necesito decirte al componente papa sobre datos')
        onSubmit(term)
    }
    const handleChange =(Event) => {
        setTerm(Event.target.value)
    }

    console.log('term', term)


  return (
    <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
    <label>termino de la busqueda</label>
    <input onChange={handleChange} value={term}/>
    </form>
    </div>

  )
}

export default SearchBar
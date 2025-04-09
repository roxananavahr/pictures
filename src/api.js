import axios from "axios";

const searchImage = async(term) => {
     const url = 'https://api.unsplash.com/search/photos/?client_id=b58Q5OWd_JkEzmkRL-I2CFP92v1ID7rxhA970VI69-s'

     const response = await axios.get(url,{
        params:{
            query: term
        }
     })

     console.log(response)
     return response.data.results
}

export default searchImage

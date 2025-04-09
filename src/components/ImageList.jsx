import ImageaShow from "./ImageShow"
import './ImageList.css'

const ImageList = ({image}) => {
  const rederImage = image.map((image) =>{
    return <ImageShow key={image.id} image={image} />
  
  })
  return (
    <div className="image-list">
    {renderImage}
    </div>
  )
}

export default ImageList
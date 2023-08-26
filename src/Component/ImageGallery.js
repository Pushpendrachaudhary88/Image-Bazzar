


const ImageGallery = ({images}) => {

    return(
        <div>
               {
                images.map( (image) =>(
                    <img 
                       src={image.urls.small}
                       alt={image.alt_description}
                    />
                ))
               }
        </div>
    )
}

export default ImageGallery
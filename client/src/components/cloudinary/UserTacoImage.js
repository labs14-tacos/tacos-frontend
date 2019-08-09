import React, {useState} from 'react';
import '../../App.css'

const UserTacoImage = () => {

  const [image, setImage] = useState('')
  const [loading, loadingState] = useState(false)

  const imageUpload = async (e) => {
       const files = e.target.files
       // takes in key/values from named properties on each element
       const data = new FormData()
       // appending first file uploaded.  Only uploads one picture at a time anyway
       data.append('file', files[0])
       // applies the preset settings in cloudinary to the lambdatacos folder
       data.append('upload_preset', 'lambdtacos')
       loadingState(true)
       const res = await fetch(
        'https://api.cloudinary.com/v1_1/lambdatacoslab/image/upload',
         {
          method: 'POST',
          body: data
         }
      )
      const file = await res.json()
      // secure_url supports https
      setImage(file.secure_url)
      loadingState(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Upload Your Image Here</h3>
        <input type="file"
               name="file"
               placeholder="image"
               onChange={imageUpload}
               />
        {loading ? (
           <h4>Loading...</h4>
        ) : (
          <img src={image} alt=""/>
        )}
       
      </header>
    </div>
  );
}

export default UserTacoImage;

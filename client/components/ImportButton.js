import React from 'react'


const ImportButton = (url) => {

const handleFileReader = (event) => {
    const FR = new FileReader();
    let props = this.props;
    FR.onload = function (event) {
      const newImage = new Image();
      newImage.onload = function () {
        props.imgHandler("img", { ...props.img, srcImage: newImage });
      };
      newImage.src = event.target.result;
    };
    FR.readAsDataURL(event.target.files[0], "test");
}

//instead of a local file
//set it up so that it changes the value of ImageUrl



    return (
        <input
        type="file"
        id="image_input"
        accept="image/jpg, image/png"
        onChange={handleFileReader}
      />
    )
  
}

export default ImportButton;


// export default props => 
//   <div className='buttons fadein'>
//     <div className='button'>
//       <label htmlFor='single'>
//         {/* <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' /> */}
//         Icon goes here
//       </label>
//       <input type='file' id='single' onChange={props.onChange} /> 
//     </div>
    
    {/* <div className='button'>
      <label htmlFor='multi'>
        <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div> */}
//   </div>
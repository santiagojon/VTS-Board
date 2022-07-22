import React, { useState } from "react";

import Whiteboard from ".//Whiteboard";
import CountdownTimer from "./CountdownTimer";
// import Chat from './chat/Chat'
import Chat from "./Chat";

const VTSCanvas = (props) => {
  // const TWO_MIN_IN_MS = 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + TWO_MIN_IN_MS;

  return (
    <div id="vtsCanvas">
      {/* <ImportButton /> */}
      {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
      <div id="boardChat">
        <Whiteboard />
        <Chat />
       
      </div>
    </div>
  );
};

export default VTSCanvas;

// import React, { Component } from 'react'
// import Spinner from './Spinner'
// import Images from './Images'
// import ImportButton from './ImportButton'
// import { API_URL } from './config'
// import './App.css'

// export default class App extends Component {

//   constructor() {
//     state = {
//       uploading: false,
//       images: []
//     }
//   }

//   onChange = e => {
//     const files = Array.from(e.target.files)
//     this.setState({ uploading: true })

//     const formData = new FormData()

//     files.forEach((file, i) => {
//       formData.append(i, file)
//     })

//     fetch(`${API_URL}/image-upload`, {
//       method: 'POST',
//       body: formData
//     })
//     .then(res => res.json())
//     .then(images => {
//       this.setState({
//         uploading: false,
//         images
//       })
//     })
//   }

//   removeImage = id => {
//     this.setState({
//       images: this.state.images.filter(image => image.public_id !== id)
//     })
//   }

//   render() {
//     const { uploading, images } = this.state

//     const content = () => {
//       switch(true) {
//         case uploading:
//           return <Spinner />
//         case images.length > 0:
//           return <Images images={images} removeImage={this.removeImage} />
//         default:
//           return <ImportButton onChange={this.onChange} />
//       }
//     }

//     return (
//       <div>
//         <div className='buttons'>
//           {content()}
//         </div>
//       </div>
//     )
//   }
// }

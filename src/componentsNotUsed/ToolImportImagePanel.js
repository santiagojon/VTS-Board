// import React, { Component } from "react";

// export default class ToolImportImagePanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.handleFileReader = this.handleFileReader.bind(this);
//   }

//   handleFileReader(event) {
//     const FR = new FileReader();
//     let props = this.props;
//     FR.onload = function (event) {
//       const newImage = new Image();
//       newImage.onload = function () {
//         props.imgHandler("img", { ...props.img, srcImage: newImage });
//       };
//       newImage.src = event.target.result;
//     };
//     FR.readAsDataURL(event.target.files[0], "test");
//   }

//   render() {
//     return (
//       <div className="toolImportImagePanel">
//         <input
//           type="file"
//           id="image_input"
//           accept="image/jpg, image/png"
//           onChange={this.handleFileReader}
//         />
//       </div>
//     );
//   }
// }
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat1] = useState([]);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      console.log("CHAT1", chat);

      setChat1([...chat, { name: name, message: message }]);
      console.log("CHAT2AFTER", chat);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log("OTC_STATE", state);
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    console.log("OMS1_STATE", state);
    socket.emit("message", { name, message });
    setChat1([...chat, { name: name, message: message }]);

    setState({ message: "", name });
  };

  const renderChat = () => {
    console.log("RENDER", chat);
    return chat.map(({ name, message }, idx) => (
      <div key={idx}>
        <h3 className='msgWrapper'>
          {name}
        </h3>
        <h3 className="msg">{message}</h3>
      </div>
    ));
  };

  return (
    <div className="chatCard">
   

      <form onSubmit={onMessageSubmit} id='messageSubmit'>
        <div className="nameField">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div className="messageField">
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message "
          />
        </div>
        <button id='sendMsg'>Send Message</button>
      </form>

      <div className="render-chat">
        {/* <h1>Chat Log</h1> */}
        {renderChat()}
      </div>
    </div>
  );
};

export default Chat;

// import { ChatEngineWrapper, ChatSocket, ChatFeed, NewMessageForm } from 'react-chat-engine'

// return (
//     <div>
//         Chat
//     </div>
// <ChatEngineWrapper>
//     <ChatSocket
//       projectID="5dc75b8a-b9a1-4a2d-8dc3-6b335acdd3ff"
//       chatID="124820"
//       chatAccessKey="614"
//       senderUsername="JonSantiago"
//     />
//     <ChatFeed activeChat="124820" />
//   </ChatEngineWrapper>
// )

//   const [messages, setMessages] = useState([]);

//   const handleChange = (evt) => {
//     console.log('changing')
//     // setMessages(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     setMessages([...messages, evt.target.value]);
//   };

//   return (
//     <div>
//         <ul>
//             {messages.map((message, i) => {
//                 return (
//                     <li key={i}>
//                     {message}
//                     </li>
//                 )
//             })}
//         </ul>

//     <form id="chat" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={messages}
//         onChange={handleChange}
//         placeholder="Write here"
//       ></input>
//       <button type="submit">Submit</button>
//     </form>

//     </div>
//);
//};

{
  /* <ChatEngineWrapper>  
      <ChatSocket
        projectID="5dc75b8a-b9a1-4a2d-8dc3-6b335acdd3ff"
        chatID="124820"
        chatAccessKey="614"
        senderUsername="JonSantiago"
      />
      <ChatFeed activeChat="124820" />
    </ChatEngineWrapper> */
}

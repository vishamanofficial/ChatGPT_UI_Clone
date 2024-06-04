import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";

function App() {
  // const [input, setInput] = useState("");
  
  // const handleSend = async () => {
  //   const res = await sendMsgToOpenAI(input);
  //   console.log(res);
  // };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addbtn} alt="new chat" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              How to use an API
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listitemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
          <div className="chats">
            <div className="chat">
              <img className="chatImg" src={userIcon} alt="" /><p className="txt">give me a list of bestest ai ml project idea for final year project.</p>
            </div>
            <div className="chat bot">
              <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Certainly! Here is a list of AI and Machine Learning project ideas suitable for a final year project:
              <br />
Medical Diagnosis and Prediction:

Build a model for early detection of diseases like diabetes, cancer, or heart disease using patient data.
Create a system to predict patient readmission rates in hospitals.
Natural Language Processing (NLP) Projects:
<br />
Develop a sentiment analysis tool for social media data.
Build a chatbot for customer support.
Create a machine translation system for less common languages.
Computer Vision Projects:
<br />
Implement object detection and recognition for autonomous vehicles or security systems.
Create a facial recognition system for access control or attendance monitoring.
Recommender Systems:
<br />
Build a movie recommendation system using collaborative filtering.
Create a personalized product recommendation system for e-commerce websites.
Finance and Stock Market Predictions:
<br />
Develop a stock price prediction model.
Build a fraud detection system for credit card transactions.
Autonomous Robotics:
<br />
Create a self-driving car simulation or prototype.
Build a robot capable of performing tasks in a controlled environment.
Generative Adversarial Networks (GANs):
<br />
Generate art or music using GANs.
Create deepfake detection tools.
Healthcare and Wearable Technology:

</p>
            </div>
            
          </div>
          <div className="chatFooter">
            <div className="inp">
              {/* <input type="text" placeholder="send a message" value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onClick={handleSend}><img src={sendBtn} alt="" /></button> */}
              <input type="text" placeholder="send a message" /><button className="send"><img src={sendBtn} alt="" /></button>
            </div>
            <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version</p>
          </div>
      </div>
    </div>
  );
}

export default App;

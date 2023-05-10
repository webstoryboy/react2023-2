import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props){
  return (
    <div>
      <div>{props.title1}</div>
      <div>{props.title2}</div>
      <div>{props.title3}</div>
      <div>{props.title4}</div>
    </div>
  );
}

const name = {
  name : "webstoryboy",
  text : "hello",
  author : {
    name : "baby",
    ulr : "naver.com"
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello title1={name.name} title2={name.text} title3={name.author.name} title4={name.author.url}/>);
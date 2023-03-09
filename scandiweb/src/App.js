import React from "react";
import Header from "./Header/Header"
import All from "./All/All"

const myStyle = {
 margin:'40px',
 marginTop:'10px'
}

function App() {
  return (  
  <>
    <Header/>
    <div style={myStyle}>
    <All/>
    </div>
  </>

  );
}


export default App;
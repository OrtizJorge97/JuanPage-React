import logo from './logo.svg';
import React, { useState } from "react";
import Image from "./components/Image";
import { Button } from 'react-bootstrap';
import page1 from "./assets/img/page1.jpeg";
import page2 from "./assets/img/page2.jpeg";
import page3 from "./assets/img/page3.jpeg";

import './App.css';

function App() {
  const [srcImage, setSrcImage] = useState(page1);

  const loadPage = (pageParameter) => {
    switch(pageParameter) {
      case "page1":
        setSrcImage(page1);
        break;
      case "page2":
        setSrcImage(page2);
        break;
      case "page3":
        setSrcImage(page3);
        
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={() => loadPage("page1")}>Page 1</Button>
      <Button onClick={() => loadPage("page2")}>Page 2</Button>
      <Button onClick={() => loadPage("page3")}>Page 3</Button>
      <Image srcImage={srcImage}/>
    </div>
  );
}

export default App;

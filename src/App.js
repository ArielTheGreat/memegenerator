import logo from './logo.svg';
import './App.css';
import FormMeme from './components/FormMeme';
import InteractiveImg from './components/InteractiveImg';
import React from "react";
import html2canvas from 'html2canvas';

function App() {
  const [firstText, setFirstText] = React.useState("");
  const [secondText, setSecondText] = React.useState("");
  const [templates, setTemplates] = React.useState("");
  const [currentImage, setCurrentImage] = React.useState("");

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(x => x.json().then(response => setTemplates(response.data.memes)))
  },[]);

  function handleChangeFirstText(x){
    setFirstText(x);
  }
  function handleChangeSecondText(x){
    setSecondText(x);
  }

  function handleClick(){
    let randomNumber = Math.floor((Math.random() * 30) + 1);
    setCurrentImage(templates[randomNumber].url);
  }

  function propsCapture(){
    const captureElement = document.querySelector('#capture')
  html2canvas(captureElement,{useCORS: true})
    .then(canvas => {
      canvas.style.display = 'none'
      document.body.appendChild(canvas)
      return canvas
    })
    .then(canvas => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const a = document.createElement('a')
      a.setAttribute('download', 'my-image.png')
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
    })
  }

  return (
    <div className="App">
      <FormMeme propsCapture={propsCapture} handleClick={handleClick} handleSecond={handleChangeSecondText} handleFirst={handleChangeFirstText} />
      <InteractiveImg firstText={firstText} secondText={secondText} imgUrl={currentImage}/>
    </div>
  );
}

export default App;

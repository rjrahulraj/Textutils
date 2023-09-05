import React, { useState } from "react";

export default function TextForm(props) {
   const handleCrClick= () =>{
        let newText='';
        setText(newText);
        props.showAlert("your text is clear","danger")
      
   }

  const handleUpClick = () => {
    // console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
      props.showAlert("your text is uppercased","primary")

  };

  const handleOnChange = (event) => {
    // console.log("text box is changing");
    setText(event.target.value);
      
  };
  const handleLwClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("your text is lowercased","secondary")
  }
  const handleCtClick=()=>{
        if(text==='')
        {
          props.showAlert("Empty text box","warning")
            // setText("Empty text box")
        }
        else
        {
          let arr=text.split(/[ ]+/);
        // console.log(arr); 

        for(let i=0;i<arr.length;i++)
        {
                arr[i]=arr[i][0].toUpperCase() + arr[i].slice(1) ;
        }
        // console.log(arr);
        let Tx = arr.join(" ");
        setText(Tx); 
        props.showAlert("your text is capatalizied","warning")
        }
        
  }
  const handleCopyClick=()=>{
        let tx=document.getElementById("FormControlTextarea1")
        tx.select();
        navigator.clipboard.writeText(tx.value);
        props.showAlert("your text is copied to clipboard","info")
  }
  const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' ')); 
        props.showAlert("extra spaces are removed from the text","success")
  }

  const [text, setText] = useState("Enter the Text");
  // text="new Text"; // wrong way to change the State
  // setText=("new Text"); //correct way to change the State
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="form-group">
          <textarea
            className="form-control"
            id="FormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{backgroundColor : props.mode==='dark'?'#042743':'white',color : props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCrClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLwClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleCtClick}>Capatalizing</button>
        <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpace}>Removing Extra Space</button>
      </div>
      <div className="container my-1" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} characters</p>
        <p>{.008 * text.split(' ').filter((element)=>{return element.length !==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}

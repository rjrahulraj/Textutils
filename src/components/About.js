// import { useState } from "react";
// import React, {useState} from "react";

export default function About(props) {



        // const[myStyle,setMystyle]=useState({
        //         color: "white",
        //         backgroundColor: "#042743",
        //         border: '.5px solid white',
        //       })
        let myStyle={
          color: props.mode==='dark'?'white':'black',
          backgroundColor: props.mode ==='dark'?'#042743':'white',

        }
        let setBoder={
          border: props.mode ==='dark'?'2px solid white':'2px solid black',
        }
       
        
       
       

  return (
    <><div  style={myStyle}>
        <h1>About</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={{myStyle,setBoder}} >
          <h2 className="accordion-header" id="headingOne" style={myStyle}>
            <button
                style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
                style={myStyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p> Textutils give you a way to analyze yor text quickly and efficiently.Be it word count, character count and time count</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{myStyle,setBoder}}>
          <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button
                style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free to use</strong>
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character count tool that provide instant character count and word count statistics for a given text.
              Textutils reports the number of words abd characters. Thus it suitable for writing text with word limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{myStyle,setBoder}}>
          <h2 className="accordion-header" id="headingThree" style={myStyle}>
            <button
                style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
                style={myStyle}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This word counter software works in any web browers such as chrome, firefox, Internet Explorer, Safari ,Opera. It suits to count character that we can use in facebook,blog, books, excel document,pdf document,essays,etc.
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

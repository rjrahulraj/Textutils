import React from "react";

export default function Alert(props) {
        const Captalizing=(word)=>{
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1)
        }
  return (
    <div style={{height:"52px"}}>
    {props.alert &&(
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert">
          <strong>{Captalizing("success")}</strong>: {props.alert.msg}
        </div>
      </div>)}
      </div>
    
  );
}

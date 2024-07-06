import React from "react"


const Prototype = ({ text }) => {
  console.log(text)
  const splitedText = text


  return (
    <div>
      {splitedText.map((line, index) => (
        <p key={index}>{line}</p>
        ))}
    </div>
  )
} 

export default Prototype
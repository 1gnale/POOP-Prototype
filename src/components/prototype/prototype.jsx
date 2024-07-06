import React from "react"


const Prototype = ({ poem }) => {
  let splitedText = []
  poem ? splitedText = poem.split('|') : null


  return (
    <div>
      {splitedText.map((line, index) => (
        <p key={index}>{line}</p>
        ))}
    </div>
  )
} 

export default Prototype
import React from "react"
import "../Emoji/Emoji.css"

const Emoji = (props) => {

 return (
  <div className="term">
     <dt>
      <span className="emoji" role="img">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>{props.definition}</dd>
  </div>
)
}

export default Emoji
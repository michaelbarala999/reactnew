
import React ,{useState}from 'react'

export default function TextForm(props) {
  const [text,resetText] = useState('enter your text here');
  const clickfunction=()=>{
    let newText=text.toUpperCase();
    resetText(newText)
  }
  const clickfunction2=()=>{
    let newText=text.toLowerCase();
    resetText(newText)
  }
  const clickfunction3=()=>{
    let newText=" ";
    resetText(newText)
  }
  
  const changeText=(event)=>{
    resetText(event.target.value)

  }
  
  return (



      <><div className='container'>
      <h3>{props.heading}</h3>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={changeText} id="myBox" cols="30" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={clickfunction}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={clickfunction2}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clickfunction3}>Clear</button>
     
      
      </div>
      <div className="container my-3">
       <h3> Your Text Summary</h3>
       <p> {text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  )
}


import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("Upper case clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!", "success");
    }

    const handleAltClick = ()=>{
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += (text[i]).toUpperCase();
            } else {
                newText += (text[i]).toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Converted to alternate case!", "success");
    }

    const handleInvClick = ()=>{
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === text[i]) {
                newText += (text[i]).toUpperCase();
            } else {
                newText += (text[i]).toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Inverted case!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        console.log("Text Copied");
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied!", "success");
    }

    const handleExtraSpaces = ()=>{
        console.log("Extra Spaces Removed");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('Sample Text');

    // // Function to count total number of words
    // const countWords = (text) => {
    //     let txtlst = text.split(/[ ]+/);
    //     let len = txtlst.length;
    //     for (let i = 0; i < txtlst.length; i++) {
    //         if (txtlst[i] === '' || txtlst[i] === ' ' || txtlst[i] === null) {
    //             len--;
    //         }
    //     }
    //     return len;
    // }

  return (
    <>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder={'Enter Text Here'} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'rgb(7 55 93)':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}> Convert to Upper-Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length === 0}> Convert to Lower-Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleAltClick} disabled={text.length === 0}> Alternate Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleInvClick} disabled={text.length === 0}> Inverse Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}> Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}> Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}> Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        {/* <p>{countWords(text)} words, and {text.length} characters</p> */}
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0;}).length} words, and {text.length} characters</p>
        {/* <p>{0.008 * countWords(text)} minutes read</p> */}
        <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0;}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: 'Nothing to preview!'}</p>
    </div>
    </>
  )
}

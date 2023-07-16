import React, {useState} from 'react'

export default function About(props) {

    // const [btnText, setBtnText] = useState('Enable Dark Mode');

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white',
    // });

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white',
    //         });
    //         setBtnText('Enable Dark Mode');
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         });
    //         setBtnText('Enable Light Mode');
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(7 55 93)' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : 'black',
    }

    return (
    <div>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#042743' : 'white',}}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        TextUtils gives you a way to analyse your text quickly and effectively. Be it word count, character count, or the various style chenging components.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        TextUtils is a free character counter and character altering tool that provides, instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with words/characters limit. 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        This word counter software works in any web browser such as Chrome, FireFox, Opera, Brave, Safari, and Internet Explorer. It suits to count character blocks in facebook, blogs, books, pdf docs, essays, etc. 
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className="btn btn-dark mx-2" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    </div>
    )
}

import React from 'react'
import '../textArea/TextArea.css'

function TextArea({ text }) {
    return (
        <div className='textArea'>
            {text.length === 0 ? (
                <span className='placeholder'>
                    Type here...<span className='cursor'>|</span>
                </span>
            ) : (
                text.map((item, index) => (
                    <span key={index} style={item.style}>{item.sign}</span>
                ))
            )}
        </div>
    );
}

export default TextArea
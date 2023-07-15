import React from 'react';
import { useState } from "react";

const Content = () => {

    const [textMessage, setTextMessage] = useState(null);
   
    const submitButton = () => {
        setTextMessage(document.getElementById('text').value);
      };

 
    return (
        <main>
            <div className='container'>
                <textarea name="text" id="text" cols='50' rows='10'  placeholder='Write something...'></textarea><br /><br />
                <button className='btn btn-info btn-lg px-5'type='submit' onClick={submitButton}>Submit</button> <br /><br />
                <div><h4>Show Message: {textMessage}</h4></div>
            </div>
        </main>
    );
};

export default Content;
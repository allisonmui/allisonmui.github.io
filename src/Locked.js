import React, { useState } from 'react';

export default function Locked({updateAuth}) {
    const [password, setPassword] = useState('');

    const decryp = (guess) => {
        if (!guess) {
            return false;
        }
    
        if (guess.length < 3) {
            return false;
        }
    
        let answer = '';
    
        // bracket notation
        for (let i = 0; i < guess.length; i++) {
            let counter = guess.charCodeAt(i) + 1;
            let res = String.fromCharCode(counter);
            answer += res;
        }
    
        return answer;
    };
    
    const validateGuess = (guess) => {
        let decrypted = decryp(guess);
        return decrypted === 'bqqmft21' ? true : false;
    }; 

    const checkEnter = (e) => {
        if (e.code === 'Enter'){
            let valid = validateGuess(password)

            if (valid) {
                updateAuth(true)
            } else {
                window.alert('Wrong password!')
            }
        }
    }

    return (
    <>
    <div className='nav-container marginCenter mt-80'>
        <p className='subtitle mt-0 mb-8'>Allison Mui</p>
        <h1 className='mt-0 mb-0'>👋 Thanks for visiting my portfolio.</h1>
        <p className='mt-16'>Portfolio available upon request. Please email me at <a href="mailto:allisonmui9@gmail.com" className='link'>allisonmui9@gmail.com.</a></p>
        <input
            type='text'
            placeholder='Enter password.'
            className='custom-input mt-16'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={checkEnter}
        /> 
    </div>
    </>
  )
}
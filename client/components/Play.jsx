import React, { useState, useEffect } from 'react';

import snippets from './snippet';

const Play = props => {
  let randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
  const [ pending, setPending ] = useState(snippets[Math.floor(Math.random() * snippets.length)]);
  const [ correct, setCorrect ] = useState('');
  // const [ incorrect, setIncorrect ] = useState('');
  // const [ removed, setRemoved ] = useState('');
  const [ current, setCurrent ] = useState('');

  // let ref;

  // useEffect(()=>{
  //   ref.focus();
  // }, [])
  
  // const handleKeyPress = e => {
  //   // console.log('keypress;', e.key);
  //   let char = e.key === 'Enter' ? '\n': e.key;
    
  //   if (pending) {
  //     setRemoved(removed + pending[0])
  //     setPending(pending.slice(1));
  //   }
  //   if (char === pending[0] && !incorrect) {
  //     setCorrect(correct + char);
  //   } else {
  //     setIncorrect(incorrect + char);
  //   }
  //   if (!pending && !incorrect) {
  //     ref.blur();
  //   }

  //   //We're in the Endgame now, Tony
  //   if (correct.length === randomSnippet.length && correct[correct.length - 1] === randomSnippet[randomSnippet.length - 1]) alert('那麼裡還')
  // }

  // const handleKeyDown = e => {
  //   // console.log('keydown:', e.key);
  //   if (e.key === 'Backspace' && (correct || incorrect)) {
      
  //     if (pending) {
  //       setPending(removed[removed.length-1] + pending);
  //       setRemoved(removed.slice(0, removed.length-1));
  //     }
  //     if (incorrect) {
  //       setIncorrect(incorrect.slice(0, incorrect.length-1));
  //     } else {
  //       setCorrect(correct.slice(0, correct.length-1));
  //     }
  //   }

  //   if (e.key === 'Tab') {
  //     e.preventDefault();
      
  //   }
  // }

  const checkInput = (e) => {
    console.log('target ', e.target.value)
    setCurrent(e.target.value)
    console.log('current', current)

    if(randomSnippet.startsWith(current)){
      setCorrect(current);
      setPending(pending.slice(1));
    }

  }

  return (
    <div
      // onKeyPress={handleKeyPress}
      // onKeyDown={handleKeyDown}
      // tabIndex="0"
      // ref={c => ref = c}
    >
      <div className="snippet">
        <pre>
          <span className="correct">{correct}</span>
          {/* <span className="incorrect">{incorrect}</span> */}
          <span className="pending">{pending}</span>
        </pre>
      </div>

      <textarea rows={20} cols={99} placeholder="Start here" className="user-textarea" onChange={checkInput} ></textarea>
    </div>
  )
}

export default Play;
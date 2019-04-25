import React, { useState, useEffect } from 'react';

import snippets from './snippet';

const Play = props => {
  let randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
  const [ pending, setPending ] = useState(snippets[Math.floor(Math.random() * snippets.length)]);
  const [ correct, setCorrect ] = useState('');
  const [ incorrect, setIncorrect ] = useState('');
  const [ removed, setRemoved ] = useState('');
  const [ typed, setTyped ] = useState('');

  // let ref;

  // useEffect(()=>{
  //   ref.focus();
  // }, [])
  
  const handleKeyPress = e => {
    // console.log(e.key);
    let char = e.key === 'Enter' ? '\n': e.key;
    if (char === pending[0] && !incorrect) {
      setCorrect(correct + pending[0]);
    } else {
      setIncorrect(incorrect + (pending[0] || ''));
    }
    // let newPending;
    // if (pending.length > 1) newPending = pending.slice(1);
    // else if(pending) newPending = pending;
    // else newPending = '';
    if (pending) setPending(pending.slice(1));
    setTyped(typed + char);

    if (typed+char === snippet) {
      ref.blur();
    }
    
  }

  const handleKeyDown = e => {
    // console.log(e.key);
    if (e.key === 'Backspace' && (correct || incorrect)) {
      if (typed.length <= snippet.length) {
        if (incorrect) {
          setPending(incorrect[incorrect.length-1] + pending);
          setIncorrect(incorrect.slice(0, incorrect.length-1));
        } else {
          setPending(correct[correct.length-1] + pending);
          setCorrect(correct.slice(0, correct.length-1));
        }
      }
      setTyped(typed.slice(0, typed.length-1));
    }
  }

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
        <p>Prompt:</p>
        <pre>
          <span className="correct">{correct}</span>
          <span className="incorrect">{incorrect}</span>
          <span className="current">{pending[0]}</span>
          <span className="pending">{pending.slice(1)}</span>
        </pre>
        <p>You:</p>
        <pre>
          <span className="typed">{typed}</span>
          <span className="current"> </span>
        </pre>
      </div>

      <textarea rows={20} cols={99} placeholder="Start here" className="user-textarea" onChange={checkInput} ></textarea>
    </div>
  )
}

export default Play;
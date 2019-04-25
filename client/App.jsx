import React, { useState } from 'react';

import Play from './components/Play.jsx';

import './styles.css';

const App = (props) => {
  const [state, setState] = useState();

  return (
    <div>
      <Play />
    </div>
  )
}

export default App;
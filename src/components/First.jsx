import React from 'react';
import './First.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="big bold">안녕하세요,<br />저는 블랙카이라고 해요.</p>
        <div style={{float: 'left', margin:'-15px'}}>
          <a href='http://github.com/blackaimc' style={{color: 'whitesmoke', marginRight:'10px'}}><GitHubIcon color="black"/></a>
          <a href="mailto:blackai@blackhc.kr" style={{color: 'whitesmoke'}}><MailIcon color="black" /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
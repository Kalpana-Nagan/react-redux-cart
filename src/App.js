import React from 'react';
import Router from './Router';

const footer = {
  position :'fixed',
  left: '0',
   bottom: '0',
   width: '100%'
};

const header = {
   paddingtop : '70px', 
};

function App() {
  return (
    <div className="container">
      <div className="Home">
        <header style= {header} className="page-header  bg-light  text-center text-primary" >
           <h1>Manage Items</h1>
       </header>
        <Router />
        <footer style= {footer} className="page-footer">
        <div className="footer-copyright text-center py-3 bg-light text-primary">© 2019 Copyright:
        <a href="https://github.com/kalpana-nagan"> Kalpana-Webdev</a>
        </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

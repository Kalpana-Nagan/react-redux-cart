import React from 'react';
import Router from './Router';

const footer = {
  position :'fixed',
  left: '0',
   bottom: '0',
   width: '100%'
};

function App() {
  return (
    <div className="container">
      <div className="Home">
        <div className="page-header  bg-light font-small blue text-center text-primary" >
           <h1>Manage Items</h1>
       </div>
          <Router />
        <footer style= { footer }className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3 bg-light text-primary">© 2019 Copyright</div>
      </footer>
      </div>
    </div>
  );
}

export default App;

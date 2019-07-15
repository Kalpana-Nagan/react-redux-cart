import React, {Component} from 'react';

const style= {
  paddingTop: '40px'
}
 class Home extends Component {
  
  handleItemsClick =(event)=>{
    this.props.history.push('/Items');
  }

  render(){
    return(
      <div className="container">
           &nbsp;
          <h3 className="text-center">Please click below!</h3>
            <div className="row">
                <div   style={style} className="col text-center">
                <button type="button" onClick = {this.handleItemsClick} className="btn btn-primary">Item details</button>
                </div>
            </div>
      </div>
    )
  }
} 

export default Home;
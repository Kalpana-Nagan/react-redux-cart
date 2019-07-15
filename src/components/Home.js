import React, {Component} from 'react';

 class Home extends Component {
  
  handleItemsClick =(event)=>{
    this.props.history.push('/Items');
  }

  render(){
    return(
      <div>
        <button type="button" onClick = {this.handleItemsClick} className="btn btn-primary">Manage Items</button>
      </div>
    )
  }
} 

export default Home;
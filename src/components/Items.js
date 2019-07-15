import React,{Component} from 'react';
import Checkout from './CheckOut';
import SaveForLater from './SavedForLater';
import { connect } from "react-redux";
import * as productActions from "../redux/actions/productActions";
import propTypes from 'prop-types';


class Items extends Component {
    //constructor(props){
      //  super(props);
        state = {
            products : {
                checkOut: [],
                watchList: []
            }
        }
    //}
    componentDidMount(){
        fetch('http://localhost:8000/')
        .then(res=>res.json())
        .then(result=>{
            this.setState({products: { checkOut:result}});
            this.props.dispatch(productActions.createProduct(this.state.products));
        });
    }
    handleBack=()=> {
        this.props.history.push('');
    }
      
    render(){
        return(
            <div>
                <Checkout />
                &nbsp; &nbsp;
                <SaveForLater/>
                <div>
                    <br/>
                    <button
                        type='button' className="btn btn-primary"
                        onClick={this.handleBack}>
                        Back
                    </button>
                
                </div>
            </div>
        )
    }
}

Items.propTypes = {
    dispatch : propTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        products : state.products
    }
}
export default connect(mapStateToProps)(Items);
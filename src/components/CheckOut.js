import React,{Component} from 'react';
import { connect } from "react-redux";
import * as productActions from "../redux/actions/productActions";
import propTypes from 'prop-types';
import Item from "./Item";

const gridouter = {
	padding : '10px',
}

const buttons = {
	padding : '10px',
}

class CheckOut extends Component {
	isChecked = false;
	state = {
		products : {
			checkOut: [],
			watchList: []
		}
	}
	
	handleCheckElement = (event) =>  {

		let products = this.props.products ;
		products.checkedItem = parseInt(event.target.value);

		this.props.dispatch(productActions.updateCheckOutChecked(products));
	}

	handleDelete = (event) => {
		this.props.dispatch(productActions.deleteCheckOut(this.props.products));
	}

	handleSaveForLater = (event) => {
		this.props.dispatch(productActions.updateCheckOut(this.props.products));
	}

	handleCheckAll = (event) => {
		let isChecked = this.props.products.checkOut.filter(
			product=>product.isChecked).length === this.props.products.checkOut.length;
		
		let products = this.props.products;
		products.isChecked = !isChecked;

		this.props.dispatch(productActions.updateCheckoutCheckAll(products));
	}

	handleBack =() => {
		this.props.history.push('');
	}

	render(){
		const productList = this.props.products.checkOut; 
		 let isChecked  = (productList && productList.filter(product=>product.isChecked).length === productList.length) || false;

		return (<div className="">
			<h2>Check Out Items</h2> 
				<div style={gridouter} className="grid2 border ">
					<div className="row border-bottom ">
						<div className="col-1 ">
							<input onChange={this.handleCheckAll} checked={isChecked} type="checkbox" id="checkItem"></input>
						</div>
						
						<div className="col-4 font-weight-bold">
							Product
						</div>
						<div className="col-4 font-weight-bold">
							Description
						</div>
						<div className="col-3 font-weight-bold">
							Price(CAD)
						</div>
					</div>
					
					{
						productList && productList.map((product,key)=> {
							return (<div key={key} className="row ">
							{this.props.location && this.props.location.pathname==='/Checkout'?
							'':<div className="col-1 border-primary">
								<Item handleCheckElement={this.handleCheckElement} {...product} />
							</div> }                  
							<div className="col-4">
								{product.name}
							</div>
							<div className="col-4 ">
								{product.description}
							</div>
							<div className="col-3 ">
								{product.price}
							</div>
						</div>)
						})
					}   
				
			
				
				{
					this.props.location && this.props.location.pathname==='/Checkout'?
					 (<button className="btn btn-secondary" onClick={this.handleBack}>Back</button>):
					 <div style={buttons}>
					<span><button onClick = {this.handleDelete} className="btn btn-secondary" >Delete</button></span> &nbsp;&nbsp;
					<span><button onClick = {this.handleSaveForLater} className="btn btn-primary">Save for Later</button></span>
					</div>
				}
			
				</div>
			<br/>
		</div>)
	}
}

CheckOut.propTypes = {
    dispatch : propTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        products : state.products
    }
}
export default connect(mapStateToProps)(CheckOut);
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
class SaveForLater extends Component {
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

		this.props.dispatch(productActions.updateSaveForLaterChecked(products));
	}

	handleDelete = (event) => {
		this.props.dispatch(productActions.deleteSaveForLater(this.props.products));
	}

	handleCheckout = (event) => {
		this.props.dispatch(productActions.updateSaveForLater(this.props.products));
	}

	handleCheckAll = (event) => {
		let isChecked = this.props.products.watchList.filter(
			product=>product.isChecked).length === this.props.products.watchList.length;
		
		let products = this.props.products;
		products.isChecked = !isChecked;

		this.props.dispatch(productActions.updateSaveForLaterCheckAll(products));
	}

	render(){
		const productList = this.props.products.watchList; 
		let isChecked  = (productList && productList.filter(product=>product.isChecked).length === productList.length) || false;

		return (<div>
			<h2>Saved For Later</h2> 
				<div style={gridouter} className="grid1 border">
					<div className="row border-bottom">
						<div className="col-1">
							<input onChange={this.handleCheckAll} checked={isChecked}  type="checkbox" id="checkItem"></input>
						</div>
						<div className="col-4 font-weight-bold">
							Product
						</div>
						<div className="col-4 font-weight-bold">
							Description
						</div>
						<div className="col-3 font-weight-bold">
							Price
						</div>
					</div>
					{
						productList && productList.map((product,key)=> {

						return (<div key={key} className="row">
							<div className="col-1">
								<Item handleCheckElement={this.handleCheckElement} {...product} />
							</div>                   
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
				
				
				<div style={buttons}>
					<span><button onClick = {this.handleDelete} className="btn btn-secondary"> Delete </button></span> &nbsp;&nbsp;
					<span><button onClick = {this.handleCheckout} className="btn btn-primary"> Move to checkout </button></span>
					
				</div>
				
				</div>
		</div>)
	}
}

SaveForLater.propTypes = {
    dispatch : propTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        products : state.products
    }
}
export default connect(mapStateToProps)(SaveForLater);
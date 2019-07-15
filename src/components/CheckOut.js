import React,{Component} from 'react';
import { connect } from "react-redux";
import * as productActions from "../redux/actions/productActions";
import propTypes from 'prop-types';
import Item from "./Item";

class CheckOut extends Component {
	isChecked = false;
	state = {
		products : {
			checkOut: [],
			watchList: []
		}
	}
	
	handleCheckElement = (event) =>  {
		let productList =  this.props.products.checkOut;

		productList.forEach(product => {
			if (parseInt(product.id) === parseInt(event.target.value)){
				product.isChecked = !product.isChecked;
			}
		});
		const products = {
			checkOut : productList,
			watchList : this.props.products.watchList
		}
		this.isChecked = productList.filter(product=>product.isChecked).length === productList.length;

		this.props.dispatch(productActions.createProduct(products));
	}

	handleDelete = (event) => {
		let productList =  this.props.products.checkOut;

		productList = productList.filter((product)=>{
			return !product.isChecked;
		});

		const products = {
			checkOut : productList,
			watchList : this.props.products.watchList
		}
		this.isChecked = false;
		this.props.dispatch(productActions.createProduct(products));
	}

	handleSaveForLater = (event) => {
		let checkOutProducts = this.props.products.checkOut ;
		let watchListProducts = this.props.products.watchList || [];

		let newWatchListProducts = checkOutProducts.filter((product)=>{
			return product.isChecked;
		});

		checkOutProducts = checkOutProducts.filter((product)=>{
			return !product.isChecked;
		});
 
		newWatchListProducts.forEach(product=>{
			product.isChecked = false;	
		});

		watchListProducts = watchListProducts.concat(newWatchListProducts);

		const products = {
			checkOut : checkOutProducts,
			watchList : watchListProducts
		};

		this.props.dispatch(productActions.createProduct(products));
	}

	handleCheckAll = (event) => {
		const isChecked = !this.isChecked;
		this.isChecked = isChecked;
		
		let checkOutProducts = this.props.products.checkOut ;
		checkOutProducts.forEach(product=>{
			product.isChecked = isChecked;	
		});
		const products = {
			checkOut : checkOutProducts,
			watchList : this.props.products.watchList
		}
		this.props.dispatch(productActions.createProduct(products));
	}

	handleBack =() => {
		this.props.history.push('');
	}

	render(){
		const productList = this.props.products.checkOut; 
		console.log(this.props.location);
		return (<div className="">
			<h2>Check Out Items</h2> 
				<div className="">
					<div className="row ">
						<div className="col-1 ">
							<input onChange={this.handleCheckAll} checked={this.isChecked} type="checkbox" id="checkItem"></input>
						</div>
						
						<div className="col-4">
							Product
						</div>
						<div className="col-4">
							Description
						</div>
						<div className="col-3 ">
							Price
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
				</div>
				<hr/>
				
				{
					this.props.location && this.props.location.pathname==='/Checkout'?
					 (<button className="btn btn-secondary" onClick={this.handleBack}>Back</button>):
					 <div>
					<span><button onClick = {this.handleDelete} className="btn btn-primary" >Delete</button></span> &nbsp;&nbsp;
					<span><button onClick = {this.handleSaveForLater} className="btn btn-primary">Save for Later</button></span>
					</div>
				}
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
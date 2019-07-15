import React,{Component} from 'react';
import { connect } from "react-redux";
import * as productActions from "../redux/actions/productActions";
import propTypes from 'prop-types';
import Item from "./Item";

class SaveForLater extends Component {
	isChecked = false;
    state = {
        products : {
            checkOut: [],
            watchList: []
        }
    }
    
	handleCheckElement = (event) =>  {
		let productList =  this.props.products.watchList;

		productList.forEach(product => {
			if (parseInt(product.id) === parseInt(event.target.value)){
				product.isChecked = true;
			}
		});
		const products = {
			watchList : productList,
			checkOut : this.props.products.checkOut
        }
        this.isChecked = productList.filter(product=>product.isChecked).length === productList.length;
        
		this.props.dispatch(productActions.createProduct(products));
	}

	handleDelete = (event) => {
		let productList =  this.props.products.watchList;

		productList = productList.filter((product)=>{
			return !product.isChecked;
		});
        const products = {
            watchList : productList,
            checkOut : this.props.products.checkOut
        }
        this.isChecked = false;
		this.props.dispatch(productActions.createProduct(products));
	}

	handleCheckout = (event) => {
		let checkOutProducts = this.props.products.checkOut ;
		let watchListProducts = this.props.products.watchList ;

		let newCheckOutProducts = watchListProducts.filter((product)=>{
			return product.isChecked;
        });
        
		watchListProducts = watchListProducts.filter((product)=>{
			return !product.isChecked;
		});

		newCheckOutProducts.forEach(product=>{
			product.isChecked = false;	
		});

        checkOutProducts = checkOutProducts.concat(newCheckOutProducts);
        
        const products = {
			checkOut : checkOutProducts,
			watchList : watchListProducts
		}

		this.props.dispatch(productActions.createProduct(products));
	}

	handleCheckAll = (event) => {
		const isChecked = !this.isChecked;
		this.isChecked = isChecked;
		
		let watchListProducts = this.props.products.watchList ;
		watchListProducts.forEach(product=>{
			product.isChecked = isChecked;	
		});
		const products = {
			checkOut : this.props.products.checkOut,
			watchList : watchListProducts
		}
		this.props.dispatch(productActions.createProduct(products));
	}

	render(){
		const productList = this.props.products.watchList; 
		return (<div className="">
			<h2>Saved For Later</h2> 
				<div className="">
					<div className="row ">
						<div className="col-1">
							<input onChange={this.handleCheckAll} checked={this.isChecked}  type="checkbox" id="checkItem"></input>
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
				</div>
				<hr/>
				<div>
					<span><button onClick = {this.handleDelete} className="btn btn-primary"> Delete </button></span> &nbsp;&nbsp;
					<span><button onClick = {this.handleCheckout} className="btn btn-primary"> Move to checkout </button></span>

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
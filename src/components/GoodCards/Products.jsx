import React from 'react';
import { DATA } from './data';
import './cards.css';

const Products = () => { 
    return ( 
        <div className='container' style={{textAlign: 'center'}}> 
            {DATA.map(data => <Product info={data} key={data.name} />)} 
        </div> 
        ); 
    };
    
const Product = ({ info }) => {

    const { image, name, price } = info; 
    
    return ( 
        <div className='product'> 
            <img className='imageproduct' src={image} alt='Product' />
            <p>{name}</p> 
            <p>{price} грн</p> 
        </div> 
        ); 
    }; 
    export default Products;
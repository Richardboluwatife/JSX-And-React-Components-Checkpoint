/* eslint-disable no-unused-vars */
import json_product from '../product.json';
import Product from './Product';

import '../App.css'

function Products_Loop() {
    return (
        <div className='products'>
            {json_product.map(function (value, index) {
                return <Product key={index} product={value} />
            })}
        </div>
    )
}

export default Products_Loop;

// eslint-disable-next-line no-unused-vars
let username = 'kenny';
//let username = 'kenny';

function scope() {
    let username = 'kenny';
    console.log(this);
}

let obj = {
    names: 'kenny',
    color: 'black',
    methods: () => {
        console.log(this)
    }
}

//console.log(obj.methods());

let food = {
    cuisine: 'Asian',
    getFood: function () {
        console.log(this)
        return this.cuisine;
    }
}

console.log(food.getFood());
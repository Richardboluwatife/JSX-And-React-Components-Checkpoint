/* eslint-disable react/prop-types */

function Product({ product }) {
    const { product_name, product_desc, product_price, product_img } = product;

    return (
        <div className="product_one">
            <img src={product_img} style={{ height: '200px', width: '200px' }} alt="" />
            <h1>{product_name}</h1>
            <h1>{product_desc}</h1>
            <h1>{product_price}</h1>
        </div>
    )
}

export default Product;
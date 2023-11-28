import json_product from '../product.json';

function Products() {
    return (
        <div className='products'>
            <div className="product_one">
                <img src={json_product[0].product_img} alt="" />
                {json_product[0].product_name}
                {json_product[0].product_desc}
                {json_product[0].product_price}
            </div>
            <div className="product_two">
                <img src={json_product[1].product_img} alt="" />
                {json_product[1].product_name}
                {json_product[1].product_desc}
                {json_product[1].product_price}
            </div>

            <div className="product_three">
                <img src={json_product[2].product_img} alt="" />
                {json_product[2].product_name}
                {json_product[2].product_desc}
                {json_product[2].product_price}
            </div>

        </div>
    );
}

export default Products;
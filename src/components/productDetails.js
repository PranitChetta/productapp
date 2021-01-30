import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import products from '../products'
const ProductDetails = () => {

    const history = useHistory();
    const { id } = useParams()
    const [arrProducts, setProducts] = useState([]);

    useEffect(() => {
        setProducts(products.products.filter(asd => asd.pid === parseInt(id)));
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2" onClick={() => history.push("/")}>
                        <img src="../close.png" width="40px"/>
                    </div>
                </div>
                <div className="row">
                    {
                        arrProducts.map((p, i) => <div key={i}>
                            <img src={p.img} alt={p.img} width="350px" />
                            <br />
                            <h2>{p.pname}</h2>
                            <br />
                            <h4>${p.price}</h4>
                            <br />
                            <h3>{p.desc}</h3>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )

}

export default ProductDetails;
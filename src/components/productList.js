import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import products from '../products'

const ProductList = () => {

    const history = useHistory();

    const [arrProducts, setProducts] = useState(products.products);

    const [arrSearch, setSearch] = useState(arrProducts);
    const [arrCart, setCart] = useState([]);
    const [IsCart, showCart] = useState(false);

    const searchHandler = (e) => {
        var data = arrProducts.filter(asd => asd.pname.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()));
        setSearch(data);
    }

    const btnplusClick = (id) => {
        var data = arrCart;
        arrSearch.map(asd => {
            if (asd.pid === id)
                data.push(asd);
        });
        setCart(data);
        alert("Inserted into cart");
    }

    const showDetails = (id) => {
        history.push('/details/' + id);
    }

    const btnCart = () => {
        var isActive = !IsCart;
        showCart(isActive);
        console.log(IsCart);
    }

    return (
        <div className="mycontainer">
            <div className="row">
                <div className="col-md-10"><input type="text" placeholder="Search products here" className="form-control" onChange={(e) => searchHandler(e)} /></div>
                <div className="col-md-2">
                    <button className={IsCart ? "btn btn-success" : "btn btn-primary"} onClick={() => btnCart()}>  {!IsCart ? "GO TO CART" : "GO TO LIST"}</button>
                </div>
            </div>
            <div className="row">
                <div className="flex-container">

                    {
                        !IsCart ? arrSearch.map((p, i) => <div key={i}>
                            <img src={p.img} alt={p.img} width="150px" onClick={() => showDetails(p.pid)} />

                            <br />
                            <b>{p.pname}</b>

                            <br />
            ${p.price}
                            <img className="btn-plus" src="../plus.png" width="40" onClick={() => btnplusClick(p.pid)} />
                        </div>)
                            :
                            arrCart.map((p, i) => <div key={i}>
                                <img src={p.img} alt={p.img} width="150px" onClick={() => showDetails(p.pid)} />

                                <br />
                                <b>{p.pname}</b>

                                <br />
            ${p.price}
                                <img className="btn-plus" src="../plus.png" width="40" onClick={() => btnplusClick(p.pid)} />
                            </div>)
                    }


                </div>
            </div>
        </div>
    )

}

export default ProductList;
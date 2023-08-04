import React, { useState, useContext } from 'react';
import CartContext from '../Context/context';
import { Link } from 'react-router-dom';
import './Header.css'
import Cart from "../Svg/Cart"
import Symbol from "../Svg/Symbol"

export default function Header() {
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    const { cartState } = useContext(CartContext);


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < cartState.cartItems.length; i++) {
          const item = cartState.cartItems[i];
          totalPrice += item.prices[0].amount;
        }
        console.log(totalPrice);
        return Math.round(totalPrice);
      };

    const { cartItems } = cartState;
    console.log(cartItems)
    return (
        <div className="nav">

            <h1 className='header'>SCANDIWEB</h1>

            <div className="nav_link">
                <Link className={activeLink === 'link1' ? 'active' : 'link'}
                    onClick={() => handleLinkClick('link1')} to="/">All</Link>

                <Link className={activeLink === 'link2' ? 'active' : 'link'}
                    onClick={() => handleLinkClick('link2')} to="/clothes">Clothes</Link>

                <Link className={activeLink === 'link3' ? 'active' : 'link'}
                    onClick={() => handleLinkClick('link3')} to="/tech">TECH</Link>
            </div>

            <div className="sign">
                <div className="cart-container">

                    <Symbol />
                    <div className='cart' onClick={toggleDropdown}>

                        <Cart />
                        <div className="circle">
                            <span className='badge'>{cartItems.length}</span>
                        </div>
                    </div>

                    {isDropdownVisible && (
                        <div className="cart-dropdown" style={{ zIndex: 1 }}>
                            {cartItems.length === 0 ? (
                                <div className='empty'> Your cart is empty</div>
                            ) : (
                                <div className='cart_items'>
                                    {cartItems.map(item => (
                                        <div className='frame' key={item.id}>



                                            <div className='column'>
                                                <p className='item_name'> {item.name}</p>
                                                <p className='size'>{item.prices[0].currency.symbol}{item.prices[0].amount}</p>
                                                <p className='size'>{item.attributes[0].id}:</p>
                                                <div className='attribute'>
                                                    {item.attributes[0].items.map((attribute) => (
                                                        <li className='Cartbox' >{attribute.displayValue.length > 3 ?
                                                            <li>{attribute.displayValue[0]}</li>
                                                            :
                                                            <li>{attribute.displayValue}</li>}
                                                        </li>
                                                    ))}
                                                </div>
                                            </div>





                                            <div className='column'>
                                                <img className='product_D' src={item.gallery[0]} alt='' />
                                            </div>

                                        </div>
                                    ))}
                                   <div className='total'>
                                   <p>Total</p>
                                   <p>${calculateTotalPrice()}.00</p>
                                   </div>
                                 <Link to='/cart'>
                                 <button   className='product_button'>
                                    View Bag
                                   </button>
                                 </Link>
                                </div>
                            )}
                            
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

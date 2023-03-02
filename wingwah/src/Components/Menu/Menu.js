import React from 'react';
import './Menu.css';
import { Appetizers } from './MenuItems';
import { Component } from 'react';

class Menu extends Component {
    /* Function Created to toggle dropdowns*/
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }) 
    }

    render() {
        return (
            /* Everything Starts Here */
            <div className='container'>
                <h1>Menu</h1>

                {/* Body of Menu */}
                <div className='menuBody'>

                    {/* Title for Section */}
                    <h2 className='menuSections'>Appetizers (Aperotovss)</h2> 
                    {/* Inseert Toggle Icons along with toggle function */}
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clicked ? "list-menu-active" : "list-menu"}>      
                        {Appetizers.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.price}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;


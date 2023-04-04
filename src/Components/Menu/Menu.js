import React from 'react';
import './Menu.css';
import { Appetizers, Soups, friedRice, Efg, Shrimp, Special, Chicken, SS, Beef, Pork, Chop, WarMein,LoMein, Party, Diet, Miscellaneous, Lunch } from './MenuItems';
import { Component } from 'react';

class Menu extends Component {
    /* Function Created to toggle dropdowns*/
    state = { 
        clickedAppetizers: true,
        clickedSoups: true,
        clickedFr: true,
        clickedEfg: true,
        clickedShrimp: true,
        clickedSpecial: true,
        clickedChicken: true,
        clickedSS: true,
        clickedBeef: true,
        clickedPork: true,
        clickedChop: true,
        clickedWarMein: true,
        clickedLoMein: true,
        clickedParty: true,
        clickedDiet: true,
        clickedMiscellaneous: true,
        clickedLunch: true
     };
    handleClickAppetizers = () => {
        this.setState({ clickedAppetizers: !this.state.clickedAppetizers }) 
    }

    handleClickSoups = () => {
        this.setState({ clickedSoups: !this.state.clickedSoups }) 
    }

    handleClickFr = () => {
        this.setState({ clickedFr: !this.state.clickedFr }) 
    }

    handleClickEfg = () => {
        this.setState({ clickedEfg: !this.state.clickedEfg }) 
    }

    handleClickShrimp = () => {
        this.setState({ clickedShrimp: !this.state.clickedShrimp }) 
        
    }
    handleClickSpecial = () => {
        this.setState({ clickedSpecial: !this.state.clickedSpecial }) 
        
    }

    handleClickChicken = () => {
        this.setState({ clickedChicken: !this.state.clickedChicken }) 
    }

    handleClickSS = () => {
        this.setState({ clickedSS: !this.state.clickedSS }) 
    }

    handleClickBeef = () => {
        this.setState({ clickedBeef: !this.state.clickedBeef }) 
    }

    handleClickPork = () => {
        this.setState({ clickedPork: !this.state.clickedPork }) 
    }

    handleClickChop = () => {
        this.setState({ clickedChop: !this.state.clickedChop }) 
    }

    handleClickWarMein = () => {
        this.setState({ clickedWarMein: !this.state.clickedWarMein }) 
    }

    handleClickLoMein = () => {
        this.setState({ clickedLoMein: !this.state.clickedLoMein }) 
    }

    handleClickParty = () => {
        this.setState({ clickedParty: !this.state.clickedParty }) 
    }

    handleClickDiet = () => {
        this.setState({ clickedDiet: !this.state.clickedDiet }) 
    }

    handleClickMiscellaneous = () => {
        this.setState({ clickedMiscellaneous: !this.state.clickedMiscellaneous }) 
    }

    handleClickLunch = () => {
        this.setState({ clickedLunch: !this.state.clickedLunch }) 
    }
    render() {
        return (
            /* Everything Starts Here */
            <div className='container'>
                <h1>Menu</h1>

                {/* Body of Menu */}
                <div className='menuBody'>  
                    {/* Inseert Toggle Icons along with toggle function */}
                <div className="menu-icons" onClick={this.handleClickAppetizers}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Appetizers (Aperotovss)</h2> 
                    <i className={this.state.clickedAppetizers ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedAppetizers ? "list-menu" : "list-menu-active"}>      
                        {Appetizers.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>



                <div className="menu-icons" onClick={this.handleClickSoups}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Soups</h2> 
                    <i className={this.state.clickedSoups ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedSoups ? "list-menu" : "list-menu-active"}>      
                        {Soups.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>



                <div className="menu-icons" onClick={this.handleClickFr}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Fried Rice(Arroz Frito)</h2> 
                    <i className={this.state.clickedFr ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedFr ? "list-menu" : "list-menu-active"}>      
                        {friedRice.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                        <p className="Price">{item.xlPrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul> 
                    
                    
                    <div className="menu-icons" onClick={this.handleClickEfg}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Egg Foo Young(Tortas Con salsa)</h2> 
                    <i className={this.state.clickedEfg ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedEfg ? "list-menu" : "list-menu-active"}>      
                        {Efg.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickShrimp}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Shrimp(Camaron)</h2> 
                    <i className={this.state.clickedShrimp ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedShrimp ? "list-menu" : "list-menu-active"}>      
                        {Shrimp.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                <div className="menu-icons" onClick={this.handleClickSpecial}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>House Special(Served With Steamed Rice)</h2> 
                    <i className={this.state.clickedSpecial ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedSpecial ? "list-menu" : "list-menu-active"}>      
                        {Special.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickChicken}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Chicken(Pollo)</h2> 
                    <i className={this.state.clickedChicken ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedChicken ? "list-menu" : "list-menu-active"}>      
                        {Chicken.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickSS}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Sweet & Sour</h2> 
                    <i className={this.state.clickedSS ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedSS ? "list-menu" : "list-menu-active"}>      
                        {SS.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickBeef}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Beef(Carne de Res)</h2> 
                    <i className={this.state.clickedBeef ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedBeef ? "list-menu" : "list-menu-active"}>      
                        {Beef.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                    <div className="menu-icons" onClick={this.handleClickPork}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Pork(Cerdo)</h2> 
                    <i className={this.state.clickedPork ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedPork ? "list-menu" : "list-menu-active"}>      
                        {Pork.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickChop}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Chop Suey or Chow Mein</h2> 
                    <i className={this.state.clickedChop ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedChop ? "list-menu" : "list-menu-active"}>      
                        {Chop.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickWarMein}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>War Mein</h2> 
                    <i className={this.state.clickedWarMein ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedWarMein ? "list-menu" : "list-menu-active"}>      
                        {WarMein.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickLoMein}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Lo Mein</h2> 
                    <i className={this.state.clickedLoMein ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedLoMein ? "list-menu" : "list-menu-active"}>      
                        {LoMein.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>


                <div className="menu-icons" onClick={this.handleClickParty}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Party Tray</h2> 
                    <i className={this.state.clickedParty ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedParty ? "list-menu" : "list-menu-active"}>      
                        {Party.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                <div className="menu-icons" onClick={this.handleClickDiet}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Diet Dishes</h2> 
                    <i className={this.state.clickedDiet ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedDiet ? "list-menu" : "list-menu-active"}>      
                        {Diet.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                <div className="menu-icons" onClick={this.handleClickMiscellaneous}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Miscellaneous</h2> 
                    <i className={this.state.clickedMiscellaneous ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedMiscellaneous ? "list-menu" : "list-menu-active"}>      
                        {Miscellaneous.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                <div className="menu-icons" onClick={this.handleClickLunch}>
                    {/* Title for Section */}
                    <h2 className='menuSections'>Lunch</h2> 
                    <i className={this.state.clickedLunch ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i> 
                </div>
                    {/* Function to toggle dropdown by changing UL class on click */}
                    <ul className={this.state.clickedLunch ? "list-menu" : "list-menu-active"}>      
                        {Lunch.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* Class name for listitems under section */}
                                    <div className={item.cName}>

                                        {/* Number for the item on menu */}
                                        <p className="Number">{item.indexNumber}</p>

                                        {/* Name of food */}
                                        <h4 className="MenuItem">{item.itemName}</h4>
                                        <p className="Price">{item.smallPrice}</p>
                                        <p className="Price">{item.largePrice}</p>
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


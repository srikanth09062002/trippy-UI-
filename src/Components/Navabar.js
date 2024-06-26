import React, { Component } from 'react';
import './navabar.css'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

class Navabar extends Component{
    render(){
        return(
        <nav className='NavabarItems'>
            <h1 className='navabar-logo'>Invia</h1>
            <ul className='nav-menu'>
            
                {MenuItems.map((item,index) =>{
                    return(
                        <li key={ index}>
                        <Link  className ={item.cName} to={item.url}>
                        <i className= {item.icon}></i>{item.title}
                        </Link>
           
                        
                           </li>
                    )
                })}
            <button >Sign Up</button>
            </ul>
        </nav>
        )
    }
}
export default Navabar
import React from 'react'
import './SubMenu.scss'
import {NavLink} from 'react-router-dom'
function SubMenu (props){
  return(
    <div className='SubMenu'>
      <ul>
        {props.items.menu.map((item, index)=>{
          return(
            <li
              key={index}
            >
              <NavLink
                to={item.to}
                exact={item.exact}
                onClick={props.onClick}
              >
               {item.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default SubMenu;
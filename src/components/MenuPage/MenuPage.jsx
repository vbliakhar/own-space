import React from 'react'
import './MenuPage.scss'
import SubMenu from './Submenu/SubMenu'
import Blackdrop from '../Blackdrop/Blackdrop'

const menuLinks = [
  {link:"1 Menu", id:'1'},
  {link:"2 Menu", id:'2'},
  {link:"3 Menu", id:'3'},
  {link:"4 Menu", id:'4'},
  {link:"5 Menu", id:'5'},
]

const items =[
  {
    id:1,
    menu:[
      {to:'/', text:"FirstPage", exact:true},
      {to:'/second', text: "Second", exact:false},
      {to:'/third', text:" Authentication", exact:false},

    ]
  },
  {
    id:2,
    menu:[
      {to:'/', text:"2FirstPage", exact:true},
      {to:'/second', text: "2Second", exact:false},
      {to:'/third', text:" 2Authentication", exact:false},
    ]
  },
  {
    id:3,
    menu:[
      {text:"3oneBlock"},
      {text:"3oneBlock"},
      {text:"3oneBlock"},
      {text:"3oneBlock"},
      {text:"3oneBlock"},
    ]
  },
  {
    id:4,
    menu:[
    {text:"under development"}
  ]},
  {
    id:5,
    menu:[
      {text:"5 Under development"}
    ]
  },
]


class MenuPage extends React.Component {
  state={
    idLink:0,
    menuPage:false,
  }

 
onAnswerClickHandler=(event)=>{
  this.setState({
    idLink:event-1,
    menuPage:true
  })
}
exitBlackdrop =()=>{

  this.setState({
    menuPage:false
  })
}
  render(){
    return(
      < >
      <div  className='MenuPege'>
        <ul>
          {menuLinks.map((link,index)=>{
            return(
              <li
                key={index}
                onClick={()=>this.onAnswerClickHandler(link.id)}
              >
                {link.link}
              </li>
            )
          })}
        </ul>
      </div>
      
      
      {this.state.menuPage?
      <SubMenu
        items={items[this.state.idLink]}
        onClick={this.exitBlackdrop}
      />
      
      :null
      }
      {this.state.menuPage?
      <Blackdrop
        onClick={this.exitBlackdrop}
      />
      :null}
      </>
    )
  }
}

export default MenuPage
import React from 'react';
import './Layout.scss';
import MenuPage from '../../components/MenuPage/MenuPage';

class Layout extends React.Component {
  state={
    
  }
  render(){
    return(
      <div className="Layout">
        <MenuPage/>
       
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
export default Layout;
import React, {Component} from 'react'

class Header extends Component {
  render(){
    return (
     <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">
          EMAILY
        </a>
        <ul class="right">
          <li>
            <a>
              Login With Google
            </a>
          </li>
        </ul>
      </div>  
     </nav>
    )
  }
}

export default Header
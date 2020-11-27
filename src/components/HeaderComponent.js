import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,NavbarToggler,Collapse,NavItem,Nav} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
	constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div >
            <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Krishi Seva Portal</h1>
                                
                            </div>
                        </div>
                    </div>
            </Jumbotron>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                        <img src={process.env.PUBLIC_URL+'/images/logo.PNG'} height="45" width="41"alt="Krishi Seva"/>

                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                        
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/policies'><span className="fa fa-book fa-lg"></span> Policies&Schemes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/news'><span className="fa fa-search-plus fa-lg"></span>News</NavLink>
                            </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </div>
        );
    }
}

export default Header;

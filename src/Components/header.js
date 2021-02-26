import Nav from 'react-bootstrap/Nav';

const Header = (props) => {

    return (

        <div className='nav_section'>
            <Nav 
                className=' bg-dark'
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <div className="container">
                <div className="row">
                 <a  className="navbar-brand col-md-2 " href="#"><img className='nav_img' src="assets/logo.png"></img></a>
                 <div className='col-md-5'></div>
                 <div className="list col-md-4">
                <Nav.Item >
                    <Nav.Link className="li_text" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link className="li_text" eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link  className="li_text"eventKey="link-2">Programs</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link className="li_text" eventKey="link-3">Trainer</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link  className="li_text"eventKey="link-4">Contact</Nav.Link>
                </Nav.Item>
               
                </div>
                </div>
                </div>
            </Nav>
             {/* <Navbar  bg="dark" expand="lg" > */}
            {/* <a href="#home" >Zedny Company</a>
                <form className="fo">
                    <input type="text" placeholder="Search" className="mr-sm-2"  />
                    <button type="button" class="btn btn-primary" >Search</button>
                    </form> */}
            {/* <div className="nav">

                    <img className="imagestyle" src='./assets/logo.png' alt="this is car image" />
                    <ul className="navbarlist" >
                        <li className="list">
                            <li><a id="home" href="#home">Home</a></li>
                            <li><a id="about" href="#about">About</a></li>
                            <li><a id="programs" href="#programs">Programs</a></li>
                            <li><a id="trainer" href="#trainer">Trainer</a></li>
                            <li><a id="contacts" href="#contacts">Contacts</a></li>
                        </li>
                    </ul>
                </div>

            </Navbar> */}
        </div>


    )
}
export default Header;
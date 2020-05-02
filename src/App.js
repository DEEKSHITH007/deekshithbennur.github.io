import React from 'react';
import { BrowserRouter as Router, Link , Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';
import Hero from './Components/Hero';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Deekshith',
      headLines: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'contact', path: '/contact' },
      ],
      home: {
        title: 'The Maverick',
        subtitle: 'Am I insane?',
        text: 'Check out my projects'
      },
      about: {
        titel: 'About me'
      },
      contact: {
        titel: 'Lets Talk'
      },

    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg='transperant' expand='lg'>
            <NavBar.Brand>Deekshith Bennur</NavBar.Brand>
            <NavBar.Toggle className='border-10' aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-collapse">
              <Nav className="ml-auto">
                <Link classLink='nav-link' to='/'>Home</Link>
                <Link classLink='nav-link' to='/about'>About</Link>
                <Link classLink='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </NavBar> 
          <Route path="/" exact render={()=> <Homepage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/> } />
                    <Route path="/about"  render={()=> <Aboutpage title={this.state.about.title} /> } />
                      <Route path="/contact"  render={()=> <Contactpage title={this.state.contact.title} /> } />

      <Hero/>
          <Footer />
        </Container>
      </Router>


    );
  }
}

export default App;

//import logo from './logo.svg';
import './App.css';
 import Header from './Components/header';
// import Card from './Components/Card';
// import Main_body from './Components/Main_body';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Counters from './Components/counters';
// import Navbar from './Components/nav';
import Try from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Programs from './Components/Programs';
import Trainers from './Components/Trainers';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    
   <div>
<Header></Header>

<Try></Try>
<Section2></Section2>
<Section3></Section3>
<Programs></Programs>
<Trainers></Trainers>
<Contact></Contact>
<Footer></Footer>

   </div>
   
  );
}

export default App;

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Homee from './Homee';

function App() { //App component is also called the root component 
  //It is the first component which gets rendered through the DOM
  //Sits at the top of the our application 

  //we can write any valid javascript here in the function before we return thr jsx

  const title = 'Welcome to the new blog' //now if we want this value to be used inside the template we can do it by using curly braces
  const likes = 50 //react converts every data to a string before returning it to the browser
  const linkk = "http://www.google.com"

  //the only things we cant output are BOOLEANS and OBJECTS

  return (

    <div className="App">
      <Navbar/>
      <div className="content"> 
        {/* <Home/> */}
        <Homee/>

      
        {/* <h1>App Component</h1>
        <h1>{title}</h1>
        <h2>Liked {likes} times</h2> 

        <h1>{10}</h1>
        <h1>{"raghav"}</h1>
        <h1>{[1,2,3,45,5]}</h1>
        <h1>{Math.random()}</h1>

        <a href={linkk}>Click here ! Im a link</a> */}

      </div>
    </div>

  );
}

//Inside return we can use curly braces and in the curly braces we can write any working javascript code that returns a valid value (datatype does not matter)

export default App;
//we always return the function so that it can be used in other places by importing 

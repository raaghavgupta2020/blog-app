import {useState} from 'react';

const Home = () => {

    const [name , setName] = useState("initial name");
    const [age , setAge] = useState(25);
    //name here refers to the initial name and setName is the function which when fired will change the name according to the given argumnent and will 
    //force the code to re-render and display the new name 
    //The datatype of the state can be any

    //we do not have to invoke the function directly , we have to rather just create a refernece for it
    //onClick={handleClick()} this is wrong
    //onClick={handleClick} this is right
    //even if we want to pass an argument in the function , still we cannot do like this
    //onClick={handleClick("raghav")} this is wrong , as it will also invoke the function right away
    //instead we have to wrap it inside an anonymous function 
    //this function will fire when the user clicks on this button 
    //by wrapping it in an anonymous function we are not directly invoking it on writing it , it will be invoked only when button is clicked 
    

    //events object (e) -> in first button when the event happens the referenced function i.e, handleClick function automatically gains access to event (e)

    //In the 2nd button -> the handleClickAgain function is not refereneced directly , but the anonymous function is invoked
    //hence it will gain access to the event (e) automatically 

    const handleClick = (e) => {
        console.log("Hey you clicked me!" , e);
    };

    const handleClickAgain = (name,e) => {
        console.log("hey " + name  , e);
    }

    // let name = "raghav"
    // const handleClickName = () => {
    //     name = "mithu"//the variable name is definitely changing to mithu but the variable name is basically non reactive in the code below
    //     //which means that there is no mechanism such that the code will re-render when the name is changed
    //     //we have to use a react hook called as useState hook in order to achieve the goal.

    //     //useState hook basically gives us a way to make a reactive value and also provides us with a way to change that value whenever we want
    // }

    const handleClickName =() => {
        setName("new name");
        setAge(35);
    };


    return (
        <div className="home">
            Homepage content
            <button onClick={handleClick} >Click me</button> 
            <button onClick={(e)=>{
                handleClickAgain("raghav",e)
            }}>Click me again</button>
            <button onClick={(e)=>handleClickAgain("mithu",e)}>Click me! for invoking the function with an argument</button>
            <br />
            <br />
            <p>{name} is {age} years old</p>
            <button onClick={handleClickName}>Click me to to change the name </button> 
        </div>
    );
}
 
export default Home;
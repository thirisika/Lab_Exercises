//function Greeting(props){
// jo: easier to destructure the name prop and give it a default
function Greeting({name = 'World', children}) {
    return(
        <div className="Greeting componentBox">
            {/* {props.name ? <h1>Hello  {props.name}</h1> : <h1>Hello World</h1>} */}
            <h1>Hello {name}!</h1>
            {/* <strong>{props.name}</strong> */}
            {children}
        </div>
    );
}

export default Greeting
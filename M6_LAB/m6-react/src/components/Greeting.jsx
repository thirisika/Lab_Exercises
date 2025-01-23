function Greeting(props){
    return(
        <div className="Greeting componentBox">
            {props.name ? <h1>Hello  {props.name}</h1> : <h1>Hello World</h1>}
            <strong>{props.name}</strong>
            {props.children}
        </div>
    );
}

export default Greeting
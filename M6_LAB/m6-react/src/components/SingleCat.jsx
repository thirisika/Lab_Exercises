function SingleCat({id, name, latinName,image,onDeleteCat }) {
    const textStyle={color:'blue'};
    return (
      <li >
        <h3>#{id}:{name}</h3> 
        <div style={textStyle}>{latinName}</div>
        <img src={image}/><br/>
        <a href="#" onClick={()=>onDeleteCat(id)}>Delete</a>
      </li>
    );
  }
export default SingleCat  
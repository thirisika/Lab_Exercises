import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");
  // ++ add support for the synopsis field as well, here and below

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName,image });
  };

  return (
    <div className="AddCatForm componentBox">

      <h3>Add Cat Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
         Latin Name:
          <input
            name="latinName"
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>

        <label>
          Image:
          <input
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button>Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatForm

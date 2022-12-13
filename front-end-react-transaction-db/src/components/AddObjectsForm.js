import React, { useState } from 'react';

function AddObjectsForm({ collection }) {
  // initialize state to store the input values
  const [inputValues, setInputValues] = useState({});

  // handle changes to the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // create the objects to be added to the collection
    const objects = Object.keys(inputValues).map((key) => ({
      [key]: inputValues[key]
    }));

    // use concat() to merge the objects with the original collection
    const updatedCollection = collection.concat(objects);

    // do something with the updated collection (e.g. update the state or save it to a database)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* create an input field for each property of the objects you want to add to the collection */}
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        placeholder="Enter age"
      />
      <input
        type="text"
        name="color"
        onChange={handleChange}
        placeholder="Enter color"
      />
      <button type="submit">Add objects</button>
    </form>
  );
}


export default AddObjectsForm;
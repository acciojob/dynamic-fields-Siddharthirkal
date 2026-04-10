import React,{useState} from "react";
import './../styles/App.css';

function App(){
  const [fields, setFields] = useState([
    {name: "", age: ""}
  ]);

  const handleAdd = () =>{
    setFields([...fields,{name: "", age: ""}]);
  };

  const handleRemove = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index][event.target.name] = event.target.value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>

        {fields.map((field, index) => (   // ✅ FIXED
          <div key={index}>
            <input 
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index,e)}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index,e)}
            />

            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAdd}>
          Add More..
        </button>

        <button type="submit">Submit</button>

      </form>

      <p>After clicking submit check console for data</p>
    </div>
  );
}

export default App;
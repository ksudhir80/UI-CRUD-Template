import React, { useEffect,useState,memo } from 'react';
import './App.css';

const Newform = ({ entity,addForm,updateForm,handleCancel }) => {
  const [form, setForm] = useState(entity);

  useEffect(() => {

    if (entity) {
      setForm(entity);
    }
  }
  , [entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (entity && entity.id>0) {
           
        updateForm(form);
      
    } else {
        
      addForm(form);
    }
   
    {Object.keys(form).map((key) =>{setForm(entity)})}
   
  };


  
 const getFormDetails = (entity,type,value) => {

    switch(type){
      case 'string':
      return(
        <div className="mb-4">
        <label className="block text-gray-700">{entity}</label>
        <input
          type="text"
          className="w-1/2 p-2 border rounded"
          value={value}
          onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
        />
      </div>);
      case 'number':
      return(
        <div className="mb-2">
        <label className="block text-gray-700">{entity}</label>
        <input
          type="number"
          className="w-1/2 p-2 border rounded"
          value={value}
          onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
        />
      </div>);
          case 'date':
            return(
              <div className="mb-2">
              <label className="block text-gray-700">{entity}</label>
              <input
                type="date"
                className="w-1/2 p-2 border rounded"
                value={value}
                onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
              />
            </div>);
            default:
              return(
                <div className="mb-4">
                <label className="block text-gray-700">{entity}</label>
                <input
                  type="text"
                  className="w-1/2 p-2 border rounded"
                  value={value}
                  onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
                />
              </div>);
    }
  }




  return (
    <div className='App'>
       <div className='App-header'>Your App Name</div>
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 items-center">
   
      <h1 className="text-xl font-bold mb-4">
        {entity && entity.id ? 'Edit Form' : 'Create New Form'}
      </h1>
    {form && Object.keys(form).map((key) =>getFormDetails(key,typeof(form[key]),form[key]))}

      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        {entity && entity.id>0 ? 'Update' : 'Add'}
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleCancel} type="button">
  Cancel
</button>
    </form>
    </div>
  );
};

export default memo(Newform);

import React, { useEffect,useState,memo } from 'react';
import '../index.css';

const Newform = ({ entity,addForm,updateForm }) => {
  const [form, setForm] = useState(entity);

  useEffect(() => {

    if (entity) {
      setForm(entity);
    }
  }
  , [entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form && form.id) {
           
        updateForm(form);
      
    } else {
        
      addForm(form);
    }
   
    {Object.keys(form).map((key) =>{setForm({key:''})})}
   
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
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 items-center">
      <h1 className="text-xl font-bold mb-4">
        {form && form.id ? 'Edit Form' : 'Add Form'}
      </h1>
    {form && Object.keys(form).map((key) =>getFormDetails(key,typeof(form[key]),form[key]))}

      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        {form && form.id ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default memo(Newform);

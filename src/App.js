import ListView from './lib/components/ListView';
import Newform from './lib/components/Newform';
import './index.css';
import {useState} from 'react';
function App() {


  const Entites=[
    {
      id: 1,
        name: 'John Doe',
        age: 30,
        dob: '1990-01-01'
    },
    {
      id: 2,
        name: 'Jane Doe',
        age: 25,
        dob: '1995-01-01'
    }
    ]  ;
    
  const  [entity,setEntity] = useState(  {
    id: 0,
    name: '',
    age: 0,
    dob: ''
});

  const  [entities,setEntities] = useState(Entites);




const addForm = (itm) => {
  debugger;
  const updatedEntity = entities.filter((item) => item.id == itm.id);
  if(updatedEntity.length==0){
   const newList=  [...entities,itm];
 setEntities(newList);
 alert("Item Added Successfully");
 setEntity({
  name: '',
  age: 0,
  dob: ''
});
  }else{
    alert("Please Enter Valid Details");
  }

}

const updateForm = (item) => {
  const index = entities.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    const updatedEntity = [...entities];
    updatedEntity[index] = item;
    setEntities(updatedEntity);
    setEntity({
      id: 0,
      name: '',
      age: 0,
      dob: ''
    });
    alert("Item Updated Successfully");
  }
}

const handleDelete = (id) => {
  debugger;
  const updatedEntity = entities.filter((item) => item.id !== id);
  setEntities(updatedEntity);
  alert("Item Deleted Successfully");
}

const handleCancel = () => {
  setEntity({
    id: 0,
    name: '',
    age: 0,
    dob: ''
  });
  alert("Form Cancelled Successfully");
}
  

  return (
    <div>
   <Newform entity={entity}  addForm={addForm} updateForm={updateForm}   handleCancel={handleCancel} pageName="my page" />
   <ListView onEdit={setEntity} dataList={entities} deleteItem={handleDelete} pageName='my list' />
    </div>
  );
}

export default App;

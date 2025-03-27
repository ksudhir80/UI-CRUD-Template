import Newform from './components/Newform';
import {useState} from 'react';
function App() {


  const  [entity,setEntity] = useState({
    name: 'John Doe',
    age: 30,
    dob: '1990-01-01'
});



const Entites=[
{
    name: 'John Doe',
    age: 30,
    dob: '1990-01-01'
},
{
    name: 'Jane Doe',
    age: 25,
    dob: '1995-01-01'
}
]  ;


const addForm = (entity) => {
setEntity(entity);
alert(JSON.stringify(entity));
}

const updateForm = (entity) => {
setEntity(entity);
alert(JSON.stringify(entity));
}


  return (
    <div>
   <Newform entity={entity}  addForm={addForm} updateForm={updateForm}     />
    </div>
  );
}

export default App;

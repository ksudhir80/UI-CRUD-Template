import React from 'react';



const ListView = ({ onEdit,dataList,deleteItem,pageName="Your Page Name" }) => {


    const handleDelete = (id) => {
      deleteItem(id)
      };

  return (
    <div className='App'>
         <div className='App-header'>{pageName}</div>
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Item List</h1>
      <table className="min-w-full bg-white border">
        <thead key="colHead">
          <tr key="columns">
          {dataList && dataList[0] && Object.keys(dataList[0]).map((key) => (
            <th className="border px-4 py-2">{key}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {dataList && dataList[0] && dataList.map((Item) => (
            <tr key={Item.id}>
                {Object.keys(Item).map((key) => (

              <td className="border px-4 py-2">{Item[key]}</td>
                ))}
           <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(Item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(Item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ListView;

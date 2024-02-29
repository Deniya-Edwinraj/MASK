import { useState } from "react";
// import AddVendorForm from "./AppVendorForm";
import CustomizeTable from "./CustomizeTable";
// import EditVendorForm from "./EditVendorForm";
import './Customize.css'


function Customization() {

const usersData = [
    {id:1,name:'Logesh',username:'jvlogesh'},
    {id:2,name:'Ramesh',username:'rameshtr'},
    {id:3,name:'Daniel',username:'danielradcliff'},
];

const addVendor = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteVendor = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',username:''}

    const [currentVendor,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,username:user.username});
    }

    const updateVendor = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <div className="container">
      <h1>Vendors Stands For MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit Vendor</h2>
                {/* <EditVendorForm 
                    setEditing={setEditing}
                    currentVendor={currentVendor}
                    updateVendor={updateVendor}
                /> */}
            </div>):(<div>
                {/* <h2>Add Vendor</h2>
          <AddVendorForm addVendor={addVendor} /> */}
          </div>
            ) 
        }
        </div>
        <div className="flex-large">
          <h2>View Vendors</h2>
          <CustomizeTable editRow={editRow} deleteVendor={deleteVendor} users={users} />
        </div>
      </div>
    </div>
  );
}

export default Customization;
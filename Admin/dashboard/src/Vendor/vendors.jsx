import { useState } from "react";
import AddVendorForm from "./AppVendorForm";
import VendorTable from "./VendorTable"
import EditVendorForm from "./EditVendorForm";
import './Vendor.css';


function Vendors() {

const vendorsData = [ ];

const addVendor = (vendor)=>{
    vendor.id = vendors.length + 1;
    setVendors([...vendors,vendor])
}
const deleteVendor = (id)=>{
    setVendors(vendors.filter((vendor)=>vendor.id!==id))
    setEditing(false);
}

    const [vendors,setVendors] = useState(vendorsData);
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',username:''}

    const [currentVendor,setCurrentVendor] = useState(initialFormState);

    const editRow = (vendor)=>{
        setEditing(true);
        setCurrentVendor({id:vendor.id,name:vendor.name,email:vendor.email,phoneNumber:vendor.phoneNumber,address:vendor.address});
    }

    const updateVendor = (id,updatedUser)=>{
        setEditing(false);
        setVendors(vendors.map((vendor)=>(vendor.id===id?updatedUser:vendor)))
    }

  return (
    <div className="container">
      <h1>Vendors Stands For MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit Vendor</h2>
                <EditVendorForm 
                    setEditing={setEditing}
                    currentVendor={currentVendor}
                    updateVendor={updateVendor}
                />
            </div>):(<div>
                {/* <h2>Add Vendor</h2> */}
          {/* <AddVendorForm addVendor={addVendor} /> */}
          </div>
            ) 
        }
        </div>
        <div className="flex-large">
          <h2>View Vendors</h2>
          <VendorTable editRow={editRow} deleteVendor={deleteVendor} vendors={vendors} />
        </div>
      </div>
    </div>
  );
}

export default Vendors;
import { useEffect, useState } from "react"

const EditVendorForm = (props)=>{
   const [vendor,setVendor] = useState(props.currentVendor)

   useEffect(()=>{
        setVendor(props.currentVendor)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setVendor({...vendor,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!vendor.name||!vendor.vendorname) return;
                props.updateUser(vendor.id,vendor);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={vendor.name} />
            <label>Username</label>
            <input type="text" onChange={handleInputChange} name="vendorname" value={vendor.vendorname} />
            <button>Update vendor</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default EditVendorForm;
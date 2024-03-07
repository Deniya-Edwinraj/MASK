import { useState } from "react";
import OrderTable from "./OrderTable"
// import EditOrderForm from "./EditOrderForm";
import './Order.css';


function Orders() {

const usersData = [
    // {id:1,name:'Logesh',username:'jvlogesh'},
    // {id:2,name:'Ramesh',username:'rameshtr'},
    // {id:3,name:'Daniel',username:'danielradcliff'},
];

const addUser = (order)=>{
    order.id = orders.length + 1;
    setOrders([...orders,order])
}
const deleteUser = (id)=>{
    setOrders(orders.filter((order)=>order.id!==id))
    setEditing(false);
}

    const [orders,setOrders] = useState(usersData);
    const [editing,setEditing] = useState(false)


    const initialFormState = {id:null,name:'',username:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (order)=>{
        setEditing(true);
        setCurrentUser({id:order.id,name:order.name,username:order.username});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setOrders(orders.map((order)=>(order.id===id?updatedUser:order)))
    }

  return (
    <div className="container">
      <h1>Order Details of MASK</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing?(<div>
                <h2>Edit User</h2>
                <EditOrderForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>):(<div>
                {/* <h2>Add Vendor</h2>
          <AddVendorForm addUser={addUser} /> */}
          </div>
            ) 
        }
        </div>
        <div className="flex-large">
          {/* <h2>View Orders</h2> */}
          <OrderTable editRow={editRow} deleteUser={deleteUser} orders={orders} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
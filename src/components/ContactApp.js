import {React,useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact,editContact,updateContact } from "../redux/actions/contactActions";

const ContactApp = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const editIndex=useSelector((state)=>state.indexEdit);
  const firstNameRef=useRef()
  const lastNameRef=useRef()
  const phoneNumberRef=useRef()
  const addContactFormRef=useRef()

  const addContactN=()=>{
    let newContact={firstName:firstNameRef.current.value,lastName:lastNameRef.current.value,phoneNum:phoneNumberRef.current.value}
    dispatch(addContact(newContact))
    addContactFormRef.current.reset();
  }
  const editContactN=(i)=>{
    firstNameRef.current.value=contacts[i].firstName
    lastNameRef.current.value=contacts[i].lastName
    phoneNumberRef.current.value=contacts[i].phoneNum
    dispatch(editContact(i))
  }
  const updateContactN=()=>{
    let newContact={firstName:firstNameRef.current.value,lastName:lastNameRef.current.value,phoneNum:phoneNumberRef.current.value}
    dispatch(updateContact(editIndex,newContact))
    addContactFormRef.current.reset();
  }
  return (<>
    <div id="listOuterContainer">
      <h2>Contact List</h2>
      <div id="listContainer">
        <table>
          <tbody>
            <tr><th>Name</th><th>Phone Number</th></tr>
            {contacts
              ? contacts.map((item, i) => {
                  return (
                    <tr key={i}><td>{item.firstName} {item.lastName}</td><td>{item.phoneNum}</td><td><button className="btnDelete" onClick={() => dispatch(deleteContact(i))}>Delete</button></td><td><button className="btnEdit" onClick={() => editContactN(i)}>Edit</button></td></tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
     <div id="addContactDiv">
     <form id="formAddContact" ref={addContactFormRef}>
       <div><label>First Name</label><input ref={firstNameRef}/></div>
       <div><label>Last Name</label><input ref={lastNameRef}/></div>
       <div><label>Phone Number</label><input type="number" ref={phoneNumberRef}/></div>
     </form>
       {editIndex===-1? <button id="btnAddUpdate" onClick={addContactN}>Add</button>:<button id="btnAddUpdate" onClick={updateContactN}>Update</button>}
   </div>
   </>
  );
};

export default ContactApp;

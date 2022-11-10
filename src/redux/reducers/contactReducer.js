import { ADD_CONTACT, DELETE_CONTACT,EDIT_CONTACT,UPDATE_CONTACT } from "../actions/contactActions";
const initial_State = {
  indexEdit:-1,
  contacts: [
    {
      firstName: "Aman",
      lastName: "Jaiswal",
      phoneNum: 9856234712,
    },
    {
      firstName: "Rahul",
      lastName: "Kumar",
      phoneNum: 8569245124,
    },
    {
      firstName: "Anuj",
      lastName: "Dhar",
      phoneNum: 8695231425,
    },
  ],
};

export const reducer = (state = initial_State, action) => {
if(action.type===ADD_CONTACT){
    return { 
        ...state,
        contacts: [...state.contacts,action.newContact] 
       }
}
else if(action.type===DELETE_CONTACT){
    let cloneContacts=state.contacts;
    cloneContacts.splice(action.index,1)
    return { 
        ...state, 
        contacts: [...cloneContacts],}
}
else if(action.type===EDIT_CONTACT){
    return { 
        ...state,
        indexEdit:action.index
      }
}else if(action.type===UPDATE_CONTACT){
  let cloneContacts=state.contacts;
  cloneContacts[action.index]=action.editedContact;
  console.log(cloneContacts)
  return { 
      ...state,
      indexEdit:-1,
      contacts: [...cloneContacts]
    }
}
else{
    return state
}
};

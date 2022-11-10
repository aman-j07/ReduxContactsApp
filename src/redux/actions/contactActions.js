export const ADD_CONTACT="ADD_CONTACT"
export const DELETE_CONTACT="DELETE_CONTACT"
export const EDIT_CONTACT="EDIT_CONTACT"
export const UPDATE_CONTACT="UPDATE_CONTACT"

export const addContact=(newContact)=>{
    return{
        type:ADD_CONTACT,
        info:"Action to add a contact in list",
        newContact:newContact,
    }
}
export const deleteContact=(index)=>{
    return{
        type:DELETE_CONTACT,
        info:"Action to delete contact from list",
        index:index,
    }
}
export const editContact=(index)=>{
    return{
        type:EDIT_CONTACT,
        info:"Action to edit a contact in list",
        index:index,
    }
}
export const updateContact=(index,editedContact)=>{
    return{
        type:UPDATE_CONTACT,
        info:"Action to edit a contact in list",
        index:index,
        editedContact:editedContact,
    }
}
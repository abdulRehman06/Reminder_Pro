import {ADD_REMINDER} from '../src/constant'
// import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../src/constant'

export const acAddReminder = (text) => {
    const action = {
        text,
        type : ADD_REMINDER
    }
    console.log('action add_reminder' , action )
    return action ;
} 




// export const addReminder = (text, dueDate) => {
//   const action = {
//     type: ADD_REMINDER,
//     text,
//     dueDate
//   }
//   console.log('action in addReminder', action);
//   return action;
// }
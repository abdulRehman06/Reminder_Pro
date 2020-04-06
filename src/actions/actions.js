import { ADD_REMINDER, DELETE_REMINDER , CLEAR_REMINDER } from '../constant/constant'



export const ucAddReminder = (text , dueDate ) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate 
  }
  // console.log('action in addReminder', dueDate);
  return action;
}
export function ucdeleteReminder(id) {
  // console.log('id', id)
  // console.log('this', this)

  const action = {
    type: DELETE_REMINDER,
     id : id
  }
  return action;
}
export function ucClearReminder() {
  const action = {
    type: CLEAR_REMINDER,
  }
  return action;
}
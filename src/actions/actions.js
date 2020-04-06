import { ADD_REMINDER, DELETE_REMINDER } from '../constant/constant'



export const ucAddReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  // console.log('action in addReminder', action);
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
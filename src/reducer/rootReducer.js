import { ADD_REMINDER , DELETE_REMINDER  } from '../constant/constant'
import { act } from 'react-dom/test-utils';

const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    // console.log('new reduced reminders', reminders);
    return reminders;
  }

export const rootReducer = (state = [], action) => {
    console.log('root reduces is called')
    console.log('action', action)
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminders;
        case DELETE_REMINDER:
            reminders =  removeById( state ,  action.id)
            return  reminders ;
        default:
            return state;
    }

}
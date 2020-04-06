import { ADD_REMINDER , DELETE_REMINDER  , CLEAR_REMINDER } from '../constant/constant'
import { read_cookie , bake_cookie}  from 'sfcookies'

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
    // console.log('root reduces is called')
    // console.log('action', action)

    let reminders = null;
    state = read_cookie( 'reminders' ) // if browser is refresh then read data from cookie
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie( 'reminders' , reminders ) // setting values in cookie
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById( state ,  action.id)
            bake_cookie( 'reminders' , reminders ) // setting values in cookie
            return  reminders ;
        case CLEAR_REMINDER:
            reminders  =  [] ;  // clear reminder 
            bake_cookie( 'reminders' , reminders ) // clear cookie
            return  reminders ;
        default:
            return state;
    }

}
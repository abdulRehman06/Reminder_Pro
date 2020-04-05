import {ADD_REMINDER}  from '../constant'
const reminder = (action) => {
    return{
        text : action.text ,
        id : Math.random()
    }
}

const reducer = (state = [] , action) => {
   let  reminderPro = null;
    switch(action.type)
    {
        case ADD_REMINDER :
            reminderPro = [...state  , reminder(action)]
            console.log(' root red new Reminder' , reminderPro )
            return reminderPro ;
            // break;
        default:
         return state ;
    }

}

export default reducer ;
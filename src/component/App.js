import React, { Component } from 'react'
import { ucAddReminder, ucdeleteReminder  , ucClearReminder} from '../actions/actions'
import { connect } from 'react-redux';
import moment  from 'moment';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            dueDate: null
        }
    }


    addreminder() {
        // console.log('this.state'  , this.state.text)
        let { text , dueDate } = this.state  ;
        this.props.ucAddReminder(text , dueDate )
        this.setState({ text: '' })
        // console.log('this.state.text', this.state.text)
    }
    reminderList() {
        const { reminders } = this.props;
        let list = <ul className="list-group col-sm-4">
            {
                reminders.map(reminder => {
                    return (
                        <li key={reminder.id} className="list-group-item">
                            <div className="list-item" >
                                <div>  {reminder.text} </div>
                                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                            </div>
                            <div className=" delete-button" key={reminder.id}
                                onClick={(ev) => this.props.ucdeleteReminder(reminder.id)}
                            >
                                &#x2715;  {/* unicode   */}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        return list;

    }
    render() {
        console.log('this.props :', this.props)
        return (
            <div className="App">

                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-group form">
                    <div className="form-inline reminder-form">
                        <input type="text" name="" id="" className="form-control" placeholder="I have to ..."
                            value={this.state.text}
                            onChange={(ev) => this.setState({ text: ev.target.value })}
                        />
                        <input className="form-control" type="datetime-local"
                            onChange={(ev) => this.setState({ dueDate: ev.target.value })}
                        />
                        <button type="button" name="" id="" className="btn btn-primary"
                            onClick={() => this.addreminder()}
                        >Add Reminder</button>
                    </div>
                </div>
                {this.reminderList()}
                <div className="">
                <button type="button" name="" id="" className="btn btn-danger delete-button"
                            onClick={() => this.props.ucClearReminder()}
                        >Clear Reminder</button>
                </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { ucAddReminder, ucdeleteReminder  , ucClearReminder})(App); 
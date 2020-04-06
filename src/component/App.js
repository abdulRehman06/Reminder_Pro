import React, { Component } from 'react'
import { ucAddReminder  , ucdeleteReminder } from '../actions/actions'
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    addreminder() {
        // console.log('this.state'  , this.state.text)
        this.props.ucAddReminder(this.state.text)

        this.setState({ text : '' })
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
                            </div>
                            <div className=" delete-button" key={reminder.id}  
                            onClick = { (ev) => this.props.ucdeleteReminder(reminder.id)}
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
                            value=  {this.state.text }
                            onChange={(ev) => this.setState({ text: ev.target.value })}
                        />
                        <button type="button" name="" id="" className="btn btn-primary"
                            onClick={() => this.addreminder()}
                        >Add Reminder</button>
                    </div>
                </div>
                {this.reminderList()}
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { ucAddReminder , ucdeleteReminder  })(App); 
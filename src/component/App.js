import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acAddReminder, addReminder } from '../action'
// import {bindActionCreators}  from 'redux'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

    }
    addReminder() {
        console.log('this.state.text', this.state.text);
        this.props.acAddReminder(this.state.text);
    }
    render() {
        console.log('props value ', this.props)
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                    <div className="form-inline">
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="I have to ..."
                                onChange={(ev) => this.setState({ text: ev.target.value })}
                            >
                            </input>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success"
                            onClick={() => this.addReminder()}>
                            Submit</button>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log('state', state)
    return {
        reminder : state  
    };
}

export default connect(mapStateToProps, { acAddReminder })(App);

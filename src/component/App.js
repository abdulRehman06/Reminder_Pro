import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-group">
                    <div className="form-inline reminder-form">
                        <input type="text" name="" id="" className="form-control" placeholder="Add Reminder .." ></input>
                        <button type="button" name="" id="" className="btn btn-primary" >Add Reminder</button>
                    </div>
                    <div>
                        <button type="button" name="" id="" className="btn btn-primary" >Add Reminder</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default App; 
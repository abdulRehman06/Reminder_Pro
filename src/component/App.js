import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                    <div className="form-inline">
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="I have to ..."
                            >
                            </input>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success">
                            Submit</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;

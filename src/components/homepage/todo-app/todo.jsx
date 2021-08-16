import React from 'react';
// import Watch from './watch';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.counting();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    counting() {
        this.setState({ time: new Date() });
    }
    render() {
        return (
            <div className="row p-5 d-flex justify-content-center">
                <div className="col-3">
                    <div>
                        <h5 className="text-center">To Do App</h5>
                        <div className="d-flex">
                            <input className="to-do-input form-control" id="inputToDo" placeholder="Enter to do name" />
                            <button type="submit" className="add btn btn-warning">Add</button>
                        </div>
                        <div className="to-do-list" id="notes">
                        </div>
                        <div>{this.state.time.toLocaleTimeString()}</div>
                        {/* <div><Watch /></div> */}
                    </div>
                </div>
            </div>
        );
    }
}

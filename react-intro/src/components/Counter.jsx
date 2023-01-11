import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startingNum || 0
        };
    }

    increaseCount = () => {
        console.log("Hey! You clicked!!")
        let numToAdd = 1;
        if(this.props.secretNum) {
            numToAdd = this.props.secretNum;
        }
        this.setState({
            count: this.state.count + numToAdd
        })
    }
    
    render() {
        return (
            <div>
                <div>This is our class component!!! And our secret number is: {this.props.secretNum}</div>
                <div>Number of clicks: {this.state.count}</div>
                <button onClick={this.increaseCount}>Clicky!!</button>
            </div>
        )
    }
}

export default Counter;


// example of what can be stored in props:
// props = {
//     secretNum: 42
//     secretPhrase: "Open Sesame"
//}
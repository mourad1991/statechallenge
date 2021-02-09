import React, { Component } from 'react'
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            task:""
        }
    }
    handlechange=(e)=>{
        this.setState({task: e.target.value})
    }
    render() { 
        return ( <div>
            <input type="text" placeholder="Write a task" onChange={this.handlechange} value={this.state.task}></input>
            <button onClick={()=>{this.props.handleTask(this.state.task);this.setState({task:""}) }}>Add</button>
        </div> );
    }
}
 
export default AddItem;
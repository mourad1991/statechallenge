import React, { Component } from 'react'
import AddItem from './Component/AddItem/AddItem';
import Listitem from './Component/ListOfItem/Listitem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listofitem:[]
     }
  }
   handletask=(item)=>{
this.setState({listofitem:[...this.state.listofitem,item]});
   }
handleid=(id)=>{
this.setState({listofitem: this.state.listofitem.filter((el,i)=>i!==id)})
}
  
  render() { 
    return ( 
      <div>
        <h2>Todo Application</h2>
        <AddItem handleTask={this.handletask}/>
        <Listitem  items={this.state.listofitem} Handleid={this.handleid}/>
      </div>
     );
  }
}
 
export default App;
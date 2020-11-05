//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchFeild:''
    };

    //this.handleChange = this.handleChanges.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user=>this.setState({monsters:user}))
  }

  handleChanges = (e) =>{
    this.setState({searchFeild:e.target.value})
  }

  render(){
    const { monsters, searchFeild } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolerdex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChanges}  
        />
        <CardList monsters={filterMonsters} />
      
      </div>
    );
  }  
}

export default App;

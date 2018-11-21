class List extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  
  delete(index){
    //alert("Deleted Key")
    //alert("Deleted Key" + this.props.key)
    //console.log(this.props);
    //console.log(index);
    this.props.deleteItem(index)
    // alert("Deleted Key")
  } 
    
  render() {
    //console.log("success")
    return (
        <ul>
          {
            this.props.items.map((item, index) => <li key={index} onClick={() => this.delete(index)}>{item}</li>)
          }
        </ul>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.del = this.del.bind(this);

  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
        if( this.state.term !== ''){
            this.setState({
              term: '',
              items: [...this.state.items, this.state.term]
            });
        }
  }
 //varun
  del(key){
     console.log("reached in parent");
     //console.log(key);
    this.state.items.splice(key, 1)
    //console.log(newItems);
     this.setState({
       term: '',
       items: [...this.state.items]
     });
    
    //console.log(this.state.items); 
    //console.log(this.state);
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List deleteItem={this.del} items={this.state.items} />
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
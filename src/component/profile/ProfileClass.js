import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this", this.props);
    this.state = {
      count: 0,
      count1: 0,
      count3: 0,
      name: "Juhi",
      userInfo:{
        name:'Dummy-Juhi',
        location:'Dummy-Location'
      }
    };
    console.log("Child - Constructor" + this.props.name);
  }
  async componentDidMount() {
    //GitHub API
    const data = await fetch('https://api.github.com/users/juhibhardwaj22');
    const jsonData = await data.json();
    this.setState({
      userInfo:jsonData
    })
    console.log("Child - ComponentDidMount "+ this.state.userInfo.name);

    //  this.cleanup = setInterval(() =>{
    //   console.log("unMount-Example : - setInterval")
    // },1000)
  }
componentDidUpdate(){
  console.log("Child - ComponentDidUpdate");
}
componentWillUnmount(){
  clearInterval(this.cleanup);
  console.log("Child -  ComponentWillUnmount");
}
  handleCount = () => {
    /* this functiona for Count Again button*/
    this.setState((prevState, props) => {
      return { count1: this.state.count1 + 1 };
    });
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    console.log("Child - render" + this.props.name);
    return (
      <>
      <h3>Name : {this.state.userInfo.name}</h3><h3>Location : {this.state.userInfo.location}</h3><br />
      <hr/>
        <h2>Class Based Component(ProfileClass.js) :- {this.props.name}</h2>
        <h4>xyz:--{this.props.xyz}</h4>
        <h4>Count :- {this.state.count}</h4>
        <h4>Count1:-{this.state.count1}</h4>
        <p>Input Example:-{this.state.name}</p>
        {/* //we can also update the state like this but lead to state inconsistency. */}
        <p>{(this.state.count3 = 1)}</p>
        <input value={this.state.name} onChange={this.handleChange} /> <br />
        <br />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        <button onClick={this.handleCount}>Click-Again</button>
      </>
    );
  }
}

export default Profile;

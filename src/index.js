import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';


class App extends React.Component {
state = {
  lat: null,
  errMessage: '',
}

componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({lat: position.coords.latitude}),
    err => this.setState({errMessage: err.message})
  )
}

renderContent(){
  if(!this.state.lat && this.state.errMessage){
    return <div> Error: {this.state.errMessage}</div>
  }
  if(this.state.lat && !this.state.err){
    return <SeasonDisplay latitude={this.state.lat}/>
  }
  return <Spinner message='Please accept geolocation'/>
  }


  render(){
    return <div className="border">{this.renderContent()}</div>
  }
}
ReactDom.render(<App/>,document.querySelector('#root'));
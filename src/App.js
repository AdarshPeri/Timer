import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      remainingTime:60, 
      isOn: false,
      
    }
  }

 onStart = () => { 
      this.setState({isOn:true})
      this.time = setInterval(() => {
        if(this.state.remainingTime >0)
        {
          this.setState({remainingTime:this.state.remainingTime-1})
          
        }
      
        },1000);
     
  }

onStop =() =>
{ 
  clearInterval(this.time);
  this.setState({isOn:false});
 }

 onReset = () =>
 {
  this.setState({remainingTime: 60, isOn: false})
 }
   
addClass1 = () =>
{ this.onStart(); 
  let ele = this.refs.start1;
  ele.classList.add("resume")
}

removeClass1 = () => {
  this.onStop();
  let ele= this.refs.start1;
  ele.classList.remove("resume");
}

resetClass1 =() =>
{
  this.onReset();
  let ele=this.refs.start1;
  ele.classList.remove("resume","circle","small");
  void ele.offsetWidth;
  ele.classList.add("circle","small");
}
  render(){

     let start = (this.state.remainingTime === 60) ?
      <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' onClick={this.addClass1} >Start</button> :
      null
     let stop = (this.state.remainingTime === 60 || !this.state.isOn || this.state.remainingTime === 0 ) 
      ?null :<button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' onClick={this.removeClass1}>Stop</button>
     let resume = (this.state.remainingTime === 60 || this.state.isOn) ?
      null :
      <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' onClick={this.addClass1}>Resume</button>
     let reset = (this.state.remainingTime === 60 || this.state.isOn ) ?
      null :
      <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' onClick={this.resetClass1}>Reset</button>
      if(this.state.remainingTime === 0)
      {
      reset = <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue' onClick={this.resetClass1}>Reset</button>
      };

     return(
     <div>
        <div id='star' ref='start1'className="circle small">
         </div>    
        <div className="h1"><h1>{this.state.remainingTime}s </h1> 
        </div> 
        <div className="h2" >
        {start} </div>
        <div className="h2">
        {stop}
        </div>
        <div className="h3">
        {resume} </div>
        <div className="h4 ">
        {reset}
        </div>
        
      </div>
    )
  }
  }



export default App;

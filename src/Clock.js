import React, { Component } from 'react';
import Navbar from './Header'
class Clock extends React.Component {

  render(){
    let today = new Date();
    let date = (today.getMonth()+1)+'/' + today.getDate()+ '/'+ today.getFullYear() + ' ';
    let time = (today.getHours()>12?today.getHours()-12:today.getHours()) + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() +':'+ (today.getSeconds()<10?'0':'') + today.getSeconds() + (today.getHours()>12?' PM':' AM') ;

    let jst = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
    let nab = new Date().toLocaleString('en-US', { timeZone: 'Africa/Windhoek' });
    let lon = new Date().toLocaleString('en-US', { timeZone: 'Europe/London' });
    let hon = new Date().toLocaleString('en-US', { timeZone: 'Pacific/Honolulu'});
    let pac = new Date().toLocaleString('en-US', { timeZone: 'US/Pacific' });

    return(
      <div>
        <div className="site">
          <div className="clockContainer">
            <p className="localTime"> I am using states to refresh myself every second. :) <br/><br/>
            I have a check to clear interval once I unmount to prevent memory leakage. <br/><br/>
            Local date/time is: { date + time } </p>
            <p className="time">
            <ul className="worldClock">
              <li>Seattle: { pac }</li>
              <li>Tokyo: { jst }</li>
              <li>Namibia: { nab }</li>
              <li>London: { lon }</li>
              <li>Honolulu: { hon }</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
  clearInterval(this.interval);
  }
}

export default Clock;

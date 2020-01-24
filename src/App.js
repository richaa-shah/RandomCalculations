import React from "react";
import "./styles.css";

export default function App() {
  var today = new Date();
  var day = today.getDay();
  var dayList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = hour >= 12 ? " PM" : " AM";
  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && prepand === " PM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Noon";
    } else {
      hour = 12;
      prepand = " PM";
    }
  }
  if (hour === 0 && prepand === " AM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Midnight";
    } else {
      hour = 12;
      prepand = " AM";
    }
  }
  function calcDaysTogo(sentMonth, sentDay) {
    christmasDay= new Date(today.getFullYear(), sentMonth, sentDay);
    if(today.getMonth() ==11 && today.getDate > 25){
      christmasDay.setFullYear(christmasDay.getFullYear() + 1)
    }
    singleDay = 1000*60*60*24;

    return daysToGo =Math.ceil((christmasDay.getTime() - today.getTime())/singleDay);
  }
  function calcAreaTriangle(side1, side2, side3) {
    x = (side1 + side2 + side3) /2;
    return area = Math.sqrt(x*((x-side1)*(x-side2)*(x-side3)));
   
  }

  function formatTime(time) {
    return time < 10 ? (time = "0" + time) : time;
  }

  hour = formatTime(hour);
  minute = formatTime(minute);
  second = formatTime(second);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div> Today is {dayList[day]}. </div>
      <div>
        {" "}
        Current time is: {hour}:{minute}:{second} {prepand}
        <br />
        Current date is: {formatTime(today.getDate())}/{formatTime(today.getMonth() + 1)}/{today.getFullYear()}
        <br />
        There are {calcDaysTogo(4,10)} days left until you are 23!
        <br />
        There are {calcDaysTogo(9,2)} days left until Alex is 23!
        <br />
        There are {calcDaysTogo(11,25)} days left until Christmas
        <br />
        Area for a triangle with sides 5, 6, 7 is: {calcAreaTriangle(5,6,7)}
      </div>
    </div>
  );
}
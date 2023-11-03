//1.Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//2.defination Area
//Every function return something
function A(props)
{
  let name='Anjali';
  let surname2='Deepak';
  return<h1>Deepak -{name} {props.surname} <B surname={surname2} /> <C /> </h1>;
}
//class 
//Class Child extends Parent 

class B extends React.Component
{
  //1.Propraties/Varible

  name='Anil';


  //2.Constructor


  //3.Method


  render()
  {
    return <span>B - {this.name} - {this.props.surname} <C>Prajapati</C></span> 
  }

}
let C=(props)=>
  {
    let name='Suraj';
    console.log('Hi',props.children);
    return <span>{name} {props.children} <D surname3='Vishawakrma'>Kumar</D></span>
  }

let age=19;
let D=(props)=>
{
  let name='Rajan';
  return<h1>{name} {props.surname3} age:{age} {props.children} <E>surname4={surname}</E> </h1>
}


let surname4;
function E(props)
{
  let name='Aman';
  return <div>Name:{name} {surname} <div>{age}</div> <F></F> </div>
}


let b='Pankaj';
let F=(props)=>
{
  let school='NIC';
  return <div>{school} <div>{b}</div></div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let surname="Prajapti";
//root.render(<A surname={surname} />)
root.render(<App />);
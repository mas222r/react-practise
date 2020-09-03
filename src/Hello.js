import React from 'react';

export default function Hello(props){
   if(props.name){
      return <h1>Hello my name is {props.name}</h1>;
   }else{
      return <span>unknown name</span>;
   }   
	
	
}
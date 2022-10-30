import React from "react";
import useFetch from "./useFetch";

class Login extends React.Component{
    state = {
        loginEmail : "",
        loginPw: "",
        btnColor:true
    }
}
useFetch("ec2-3-35-149-126.ap-northeast-2.compute.amazonaws.com/auth/login",{
    method : "POST",
    headers:{
        'Content-type': 'application/json'
    },
    body:JSON.stringify({
        email:this.state.userId,
        password:this.state.userPw
    }).then(response => response.json())
});
/*
  return (
    <ul>
      <li>title: {user.title}</li>
      <li>price: {user.price}</li>
      <li>username: {user.username}</li>
      <h1>content: {user.paragraph}</h1>
      <li>status:{user.status}</li>

    </ul>
  );*/


  export default Login;
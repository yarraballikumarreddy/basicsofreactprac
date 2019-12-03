import React, { Component } from 'react';
import Greet from './Components/greeting'
 import { Hello } from './Components/greeting'
 import Welcome from './Components/Welcome'
// import Message from './Components/message'
//import Counter from './Components/Counter';
// import Header from "./demopage/header/Header";
// import Navbar from "./demopage/body/navbar/Navbar"
// import Section from "./demopage/body/section/Section";
// import Aside from  "./demopage/body/aside/Aside"
// import Footer from "./demopage/footer/Footer";
// import Destructuring from './Components/Destructuringfunction'
// import DestructuringClass from './Components/DestructuringClass'
// import MyStyle from './Components/mystyle'
// import Postlist from './apidata/postdata'
// import PostDataForm from './apidata/Postformdata';
//import  Table from './fragment/table';
import AppAll from './AppAll'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        {/* <Greet name="kumarreddy" surname="yarraballi">
          <p> this is chidren props </p>
        </Greet>
        <Greet name="venkataramana reddy" surname="yarraballi">
          <button>click me ....</button>
        </Greet>
        <Greet name = "maddi reddy" surname="yarraballi"></Greet>

       <Hello a={1} b={2}></Hello>


       <Welcome name="unknown reddy" surname="yarraballi"></Welcome> */}
       {/* <Welcome name="lakshmi devi" surname="yarraballi"></Welcome>
       <Welcome name="santha" surname="yarraballi"></Welcome> */}

        {/* <Header></Header>
       <Navbar></Navbar>
       <Aside></Aside>
       <Section></Section>
       <Footer></Footer> */}


        {/* <MyStyle></MyStyle> */}
        {/* <Counter></Counter>
        <Destructuring name="kumarreddy" surname="yarraballi"></Destructuring>
        <DestructuringClass name="rameshreddy" surname="somnath"></DestructuringClass> */}
        {/* <Message >

        </Message> */}

        {/* <Postlist></Postlist> */}
        {/* <PostDataForm></PostDataForm>

        <Table></Table> */}
        <AppAll></AppAll>
      </div>
    );
  }
}

export default App;


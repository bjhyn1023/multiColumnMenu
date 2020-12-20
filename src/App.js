import {Component} from 'react'
import rootdata  from "./data";
import Li from "./selectdemo/demoJs/li";

//props: 在调用子组件时，可以将要传给子组件的值添加在子组件的属性上，在子组件可以通过props接收
class App extends Component{
    render(){
        return  <ul id="menu">
            {Object.keys(rootdata).map((item,index)=>{
                return <Li 
                key={index}
                title={item}
                data={rootdata[item]}
                ></Li>
            })}
    </ul>
    }
}

export default App;
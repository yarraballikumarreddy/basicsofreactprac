import React ,{Component} from 'react';
class DestructuringClass extends Component{
    render(){
        const {name,surname}=this.props
        //destructuring in class
        return <h1>Class Component........
            {name}..{surname}
        </h1>
    }

}
export default DestructuringClass ;
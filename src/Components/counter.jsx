import  React, {Component} from "react";

class Counter extends Component{
// object contains data

state={
    count:1,
    imageurl:'https://picsum.photos/200',
    tags:["tag1","tag2","tag3"]

}

styles={

    fontSize:30,
    fontWeight:"bold"
}
handleincrement=()=>{

    this.setState({count:this.state.count+1})
}

// thi.state.count++ doesnt work react doesnt understand it to update
// fa bnst5dm setstate  to update state
render(){

    // exay katbna hna js
    let classes = this.getBadgeClasses();
    // let classes=" badge m-2 badge-";
    // classes += this.state.count===0 ? "warning" : "primary";
    return (

    <div>
        {/* this refer to current object */}

        {/* braces for any javascript expression */}
        {/* <img  src={this.state.imageurl} /> */}

{/* in jsx we have style attrbuite  */}

{/* style={{fonSize:10}} */}
    <span  className={classes}>{this.state.count}</span>
    <button  onClick={this.handleincrement} className="btn btn-secondary btn-sm">Increment</button>
    {/* mfhmtsh tar2t elktaba */}
    <ul> {this.state.tags.map(tag=><li key={tag}>{tag} </li>)}       </ul>
    </div> 
        
        );
    
    
}

    getBadgeClasses() {
        let classes = " badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
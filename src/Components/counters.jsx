import  React, {Component} from "react";
import Counter from './counter';
class Counters extends Component{


state={
counters:[
{id:1,value:0},
{id:2,value:0},
{id:3,value:0},
{id:4,value:0}


 ]  
}

render(){


    return (
<div> 
    {/* msh fahma elkey */}

{this.state.counters.map(c => <Counter  key={c.id} />)
}

    {/* rather than doing this we can use map */}
{/* <Counter/>
<Counter/>
<Counter/>
<Counter/> */}
</div>
    )


   
}
}
export default Counters;
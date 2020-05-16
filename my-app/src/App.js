import React from "react"
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(){
    //     this.setState(({count:(this.state.count)+1}))
    // }   
    handleClick(){
        this.setState(prevState =>{
            return {
                count:prevState.count+1
            }
        })
    }

    render(){
        return (
            <div className="container">
                <h1>{this.state.count}</h1>
                <button className="btn btn-primary btn-sm" onClick={this.handleClick} >Change!</button>
            </div>
        )
    }
}
// class Header extends React.Component{
//     render(){
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }
// class Greetings extends Component{
//     render(){
//         const date = new Date();
//         const hours = date.getHours();
//         let timeofday
//         if(hours < 12){
//             timeofday = "morning"
//         }else if(hours >= 12 && hours < 17){
//             timeofday = "afternoon"
//         }else{
//             timeofday = "night"
//         }
//     return(<h1>Good {timeofday} to you, sir/madam!</h1>)
//     }
// }
export default App;
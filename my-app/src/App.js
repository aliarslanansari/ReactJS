import React from "react"
import Conditional from "./Conditional"
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            firstname:"",
            lastname:"",
            color:"",
            isFriendly: false,
            gender:"",
            favColor:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}):this.setState({[name] : value, color:this.randomColor()})
    }
    randomColor(){
        return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+')';
    }
    render(){
        return (
        <div className="container align-center">
<form>
            <input 
                name="firstname"
                type="text" 
                placeholder="First Name"
                onChange={this.handleChange} /> 
            <input 
                name="lastname"
                type="text" 
                placeholder="Last Name"
                onChange={this.handleChange} />
                <br />
                <input 
                    type="checkbox"
                    name="isFriendly"
                    for="checkbox"
                    id="isFriendly"
                    checked={this.state.isFriendly===true}
                    onChange={this.handleChange}
                /> <label for="isFriendly">Is Friendly</label>
                <br />
                <input 
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    checked={this.state.gender==="male"}
                    onChange={this.handleChange}
                /> <label for="male">Male</label> 
                <input 
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    checked={this.state.gender==="female"}
                    onChange={this.handleChange}
                /> <label for="female">Female</label>
                <br />
                <label>Fav Color: </label>
            <select
                value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor"
            >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="black">Black</option>
            </select>
                <h1 style={{color:this.state.color}}>{this.state.firstname} {this.state.lastname}</h1>

        <h1 style={{color:this.state.color}}>You are a {this.state.gender}</h1>
        <h1 style={{color:this.state.color}}>You are {this.state.isFriendly? "Friendly":"Not Friendly"}</h1>
        <h1 style={{color:this.state.color}}>Your fav color is {this.state.favColor}</h1>
        <button>Submit</button>
        </form>
        </div>
        )
    }
}
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoading:true,
//             unreadMessage:[1,2,3],
//             isLoggedIn:false,
//             character:{},
//             apiLoading:false
//         }
//         this.handleLoggedInState = this.handleLoggedInState.bind(this);
//     }
//     componentDidMount(){
//         this.setState({apiLoading:true})
//         fetch("http://www.omdbapi.com/?apikey=c51ab09b&s=Baby")
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 character:data,
//                 apiLoading:false,
//             })
//         })
//         setTimeout(()=>{
//             this.setState({
//                 isLoading:false
//             })
//         },1500)
//     }
//     handleLoggedInState(){
//         this.setState({isLoggedIn:!this.state.isLoggedIn})
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.isLoading?<h1>Loading...</h1>:
//                 <Conditional />}

//                 {
//                     this.state.unreadMessage.length>0 && <h2>You Have {this.state.unreadMessage.length} unread messages!</h2>
//                 }
//                 <h2>{!this.state.isLoggedIn? "Logged Out":"Logged  In" }</h2>
//                 <button onClick={this.handleLoggedInState}> {this.state.isLoggedIn? "Log Out":"Log In" } </button>
//                 <h4>
//                     {this.state.apiLoading?"Loading...":"Data Fetched"}
//                 </h4>
//             </div>
//         )
//     }
// }


// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             count:0,
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     // handleClick(){
//     //     this.setState(({count:(this.state.count)+1}))
//     // }   
//     handleClick(){
//         this.setState(prevState =>{
//             return {
//                 count:prevState.count+1
//             }
//         })
//     }

//     render(){
//         return (
//             <div className="container">
//                 <h1>{this.state.count}</h1>
//                 <button className="btn btn-primary btn-sm" onClick={this.handleClick} >Change!</button>
//             </div>
//         )
//     }
// }
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
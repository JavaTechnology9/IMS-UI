import {Component} from "react";
import '../css/Header.css';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: false,
          username: ''
        };
        this.handleLogout=this.handleLogout.bind(this);
      }
     
      async handleLogout(event){
        const username=localStorage.getItem('username');
        const parameter={username};
        const response = await axios.post('http://localhost:8080/logout',parameter);
        console.log(response.data);
        localStorage.clear();
        //window.location.reload();
        this.props.navigate('/');
        
      }
      
    render() {
      const accessToken=localStorage.getItem('accessToken');
        return(
        <div class="topnav">
               {accessToken ? (
          <div>
            {/* <p>Welcome, {username}!</p> */}
            <button className={"active"} onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to={"/login"}><button className={"active"} >Login</button></Link>
          </div>
        )}
            {/* <a class="active" onClick={this.handleLogout}>Logout</a>
            <a href="#username">UserName</a> */}
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit">Search</button>
                </form>
            </div>
        </div>
       
      );
    }
}
const withNavigation = (Component) => {
  return (props) => {
      const navigate = useNavigate();

      return <Component {...props} navigate={navigate}/>;
  };
};
export default withNavigation(Header);
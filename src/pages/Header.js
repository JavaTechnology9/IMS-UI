import { Component } from "react";
import '../css/Header.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: ''
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout(event) {
    try {
      const username = localStorage.getItem('username');
      const parameter = { username };
      const response = await axios.post('http://localhost:8080/logout', parameter);
      if (response.status === 200) {
          alert(response.data);
          localStorage.clear();
          //window.location.reload();
          this.props.navigate('/');
      }
  } catch (error) {
      if (error.response) {
          // The request was made and the server responded with a status code
          const { status, data } = error.response;
          if (status === 401) {
              this.setState({ message: data });
          } else if (status === 400) {
              alert(data);
          } else if (status === 500) {
            alert(data);
          } else {
              alert('An error occurred' );
          }
      } else if (error.request) {
          // The request was made but no response was received
          alert('No response from server' );
      } else {
          // Something happened in setting up the request that triggered an Error
          alert('Error: ' + error.message );
      }
  }

  }

  render() {
    const accessToken = localStorage.getItem('accessToken');
    const fullName = localStorage.getItem('fullName');
    return (
      <div className="topnav">
        {accessToken ? (
          <div>

            <button className={"active"} onClick={this.handleLogout}> Logout</button>
          </div>
        ) : (
          <div>
            <Link to={"/login"}><button className={"active"} >Login</button></Link>
          </div>
        )}
        {/* <a class="active" onClick={this.handleLogout}>Logout</a>
            <a href="#username">UserName</a> */}
        {/* <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit">Search</button>
                </form>
            </div> */}
        <div>
          <p id="username">{fullName}</p>
        </div>
      </div>

    );
  }
}
const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} />;
  };
};
export default withNavigation(Header);
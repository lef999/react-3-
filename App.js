import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Ramirez",
        bio: "A passionate Operator",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZt7rMMRusG7AhHzvrPC5WfY4iuuHAU6vqtw&s",
        profession: "Military Security",
      },
      shows: false,
      timeInterval: 0,
    };
  }

 
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeInterval: prevState.timeInterval + 1 }));
    }, 1000);
  }

 
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle the show state
  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={this.toggleProfile}>{shows ? "Hide Profile" : "Show Profile"}</button>

        {shows && (
          <div
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              display: "inline-block",
            }}
          >
            <h2>{person.fullName}</h2>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        <h3>Time since mount: {timeInterval} seconds</h3>
      </div>
    );
  }
}

export default App;

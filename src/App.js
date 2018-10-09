import React, { Component } from "react";
import Navbar from "./components/Navbar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

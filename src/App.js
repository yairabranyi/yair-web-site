import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import styled from "styled-components"


import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Skils from "./components/Skils"
import Error from "./components/Error"
import Navigation from "./components/Navigation"

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Skils" component={Skils} />
          <Route component={Error} />
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App


const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

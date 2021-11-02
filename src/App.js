import './App.css';
import styled from 'styled-components'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
const AppElement = styled.div`

`

const Offset = styled.section`
  transition: .5s background-color ease-in; 
`

function App() {
  return (
    <AppElement>
      <Offset>
        <Nav/>
        <Hero/>
      </Offset>
    </AppElement>
  );
}

export default App;

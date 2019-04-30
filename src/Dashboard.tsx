import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { ExampleContextInterface, ExampleContextProvider } from './MyProvider';
import LandingPage from './LandingPage';
import styled from 'styled-components';

const someOtherContext: ExampleContextInterface = {
  name: 'Joseph',
  author: 'George RR Martin',
  url: 'www.google.com'
}

const Container = styled.div`
  border: 2px solid black;
`;

const Dashboard: React.FC = () => {

  // View using useState() hook
  const [view, setView] = useState(true);

  // Counter using useReducer() hook
  const initialState = {
    count: 0
  }
  const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }

      case 'decrement':
        return { count: state.count - 1 }

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  // Side effect that triggers after every re-render
  useEffect(() => {
    console.log('useEffect() triggered.')
  })

  // Supplying the second optional parameter (type array)
  // will skip re-rendering if the parameter value has not changed
  useEffect(() => {
    console.log('View changed.')
  }, [view])

  return (
    <ExampleContextProvider value={someOtherContext}>
      <LandingPage />
      {view && (
        <Container>
          <p>Count: {state.count}</p>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
          <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        </Container>
      )}
      <button onClick={() => setView(!view)}>{view ? 'Hide Counter' : 'Show Counter'}</button>
      <div>
        <Link to="/test">Component 1</Link>
      </div>
    </ExampleContextProvider>
  )
}

export default Dashboard;

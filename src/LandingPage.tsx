import React from 'react';
import { ExampleContextConsumer } from './MyProvider';

const LandingPage: React.FC = () => {
  return (
    <ExampleContextConsumer>
      {exampleContext => exampleContext && (
        <React.Fragment>
          <p>{exampleContext.name}</p>
          <p>{exampleContext.author}</p>
          <p>{exampleContext.url}</p>
        </React.Fragment>
      )}
    </ExampleContextConsumer>
  )
}

export default LandingPage;

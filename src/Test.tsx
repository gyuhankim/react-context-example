import React from 'react';
import { Link } from 'react-router-dom';
import { OtherContextInterface, OtherContextProvider } from './MyOtherProvider';
import SubTest from './SubTest';

const otherTestContext: OtherContextInterface = {
  dataOne: 'Testing',
  dataTwo: 100,
  dataThree: {
    dataThreeOne: `King's Landing`,
    dataThreeTwo: 8,
    dataThreeThree: true
  }
}

const Test: React.FC = () => {
  return (
    <OtherContextProvider value={otherTestContext}>
      Component 1
      <SubTest />
      <div>
        <Link to="/">Back</Link>
      </div>
    </OtherContextProvider>
  )
}

export default Test;

import React from 'react';
import { OtherContextConsumer } from './MyOtherProvider';

const SubTest: React.FC = () => {

  return (
    <OtherContextConsumer>
      {otherContext => (
        otherContext.dataThree.dataThreeThree === false &&
        <React.Fragment>
          <h2>Too many floofs...</h2>
        </React.Fragment>
      )}
    </OtherContextConsumer>
  )
}

export default SubTest;

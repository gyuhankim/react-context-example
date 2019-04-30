import React from 'react';
import { OtherContextConsumer } from './MyOtherProvider';

const SubTest: React.FC = () => {

  return (
    <OtherContextConsumer>
      {otherContext => (
        otherContext.dataThree.dataThreeThree === false &&
        <React.Fragment>
          <p>{otherContext.dataOne}</p>
          <p>{otherContext.dataTwo}</p>
        </React.Fragment>
      )}
    </OtherContextConsumer>
  )
}

export default SubTest;

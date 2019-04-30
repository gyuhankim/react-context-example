import React from 'react';


export interface OtherContextInterface {
  dataOne: string,
  dataTwo: number,
  dataThree: {
    dataThreeOne: string,
    dataThreeTwo: number,
    dataThreeThree: boolean
  }
}

export const defaultContext: OtherContextInterface = {
  dataOne: '',
  dataTwo: 0,
  dataThree: {
    dataThreeOne: '',
    dataThreeTwo: 0,
    dataThreeThree: false
  }
}

const OtherContext = React.createContext<OtherContextInterface>(defaultContext);

export const OtherContextProvider = OtherContext.Provider;
export const OtherContextConsumer = OtherContext.Consumer;

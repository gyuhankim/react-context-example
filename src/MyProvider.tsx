import React from 'react';

export interface ExampleContextInterface {
  name: string,
  author: string,
  url: string
}

export const defaultContext: ExampleContextInterface = {
  name: '',
  author: '',
  url: ''
}

const ExampleContext = React.createContext<ExampleContextInterface>(defaultContext);

export const ExampleContextProvider = ExampleContext.Provider;
export const ExampleContextConsumer = ExampleContext.Consumer;

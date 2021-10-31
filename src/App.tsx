import React from 'react';
import { Form } from './components/Form/Form';
import { AppContainer } from './App.styles';

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Form />
    </AppContainer>
  );
}
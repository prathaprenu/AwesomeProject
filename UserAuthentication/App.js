import React from 'react';
import AuthState from './context/authContext/AuthState';
import AppNavigator from './views/navigation/AppNavigator';

function App() {
  return (
    <AuthState>
      <AppNavigator />
    </AuthState>
  );
}
export default App;
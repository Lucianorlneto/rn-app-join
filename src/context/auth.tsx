import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

interface AuthContextData{
    isLoggedIn: boolean;
    user: {
      name: string
    };
    login: (user: string, pass: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  function login(user: string, pass: string) {
    if ((user === 'admin' && pass === '123456') || (user === 'admin2' && pass === '123456')) {
      setIsLoggedIn(true);
      setUser({ name: user });
    } else {
      Alert.alert(
        'Falha na autenticação',
        'Usuário ou senha inválidos.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  function logout() {
    setIsLoggedIn(false);
    setUser({});
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn, user, login, logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

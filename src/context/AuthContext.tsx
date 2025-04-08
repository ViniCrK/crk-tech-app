import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContextType = {
  estaAutenticado: boolean;
  entrar: (email: string, senha: string) => void;
  sair: () => void;
};

const AuthContext = createContext<AuthContextType>({
  estaAutenticado: false,
  entrar: () => {},
  sair: () => {},
});

export function useAuth() {
  const ctx = useContext(AuthContext);

  return ctx;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  const entrar = (email: string, senha: string) => {
    if (email == "teste@email.com" && senha == "123456") {
      setEstaAutenticado(true);
      console.log("Usuário autenticado");
    }
  };

  const sair = () => {
    setEstaAutenticado(false);
    console.log("Usuário desconectado");
  };

  return (
    <AuthContext.Provider value={{ estaAutenticado, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

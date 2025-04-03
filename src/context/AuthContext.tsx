import { createContext, PropsWithChildren, useContext } from "react";

type AuthContextType = {
  entrar: () => void;
  sair: () => void;
};

const AuthContext = createContext<AuthContextType>({
  entrar: () => {},
  sair: () => {},
});

export function useAuth() {
  const ctx = useContext(AuthContext);

  return ctx;
}

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider
      value={{
        entrar: () => {
          console.log("Entrou no sistema!");
        },
        sair: () => {
          console.log("Saiu do sistema!");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

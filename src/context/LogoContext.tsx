
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LogoContextProps {
  logo: string | null;
  setLogo: (logo: string | null) => void;
  logoFile: File | null;
  setLogoFile: (file: File | null) => void;
}

const LogoContext = createContext<LogoContextProps | undefined>(undefined);

export const LogoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  return (
    <LogoContext.Provider value={{ logo, setLogo, logoFile, setLogoFile }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (context === undefined) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};

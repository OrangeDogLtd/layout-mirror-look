
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LabelTemplateContextProps {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

const LabelTemplateContext = createContext<LabelTemplateContextProps | undefined>(undefined);

export const LabelTemplateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("landscape-option-1");
  const [backgroundColor, setBackgroundColor] = useState<string>("white");
  const [accentColor, setAccentColor] = useState<string>("orange");

  return (
    <LabelTemplateContext.Provider value={{ 
      selectedTemplate, 
      setSelectedTemplate,
      backgroundColor,
      setBackgroundColor,
      accentColor,
      setAccentColor
    }}>
      {children}
    </LabelTemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(LabelTemplateContext);
  if (context === undefined) {
    throw new Error('useTemplate must be used within a LabelTemplateProvider');
  }
  return context;
};


import React from 'react';
import { useLogo } from "@/context/LogoContext";
import { useTemplate } from "@/context/LabelTemplateContext";
import { 
  DynamicLandscapeOption1, 
  DynamicLandscapeOption2, 
  DynamicLandscapeOption3,
  DynamicFacingOutTemplate 
} from "./templates/DynamicLandscapeTemplates";

interface SimpleLabelPreviewProps {
  className?: string;
}

const SimpleLabelPreview: React.FC<SimpleLabelPreviewProps> = ({ className }) => {
  const { logo } = useLogo();
  const { selectedTemplate, backgroundColor, accentColor } = useTemplate();
  
  // Default size for the logo in preview
  const logoSize = 50;

  // Render the appropriate template based on the selection
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "landscape-option-1":
        return (
          <DynamicLandscapeOption1 
            backgroundColor={backgroundColor} 
            accentColor={accentColor} 
            logo={logo} 
            logoSize={logoSize}
          />
        );
      case "landscape-option-2":
        return (
          <DynamicLandscapeOption2 
            backgroundColor={backgroundColor} 
            accentColor={accentColor} 
            logo={logo} 
            logoSize={logoSize}
          />
        );
      case "landscape-option-3":
        return (
          <DynamicLandscapeOption3 
            backgroundColor={backgroundColor} 
            accentColor={accentColor} 
            logo={logo} 
            logoSize={logoSize}
          />
        );
      default:
        return (
          <DynamicLandscapeOption1 
            backgroundColor={backgroundColor} 
            accentColor={accentColor} 
            logo={logo} 
            logoSize={logoSize}
          />
        );
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-bold">Label Preview</h3>
      
      {/* Facing Out section */}
      <div className="mb-4">
        <div className="bg-[#FF6600] text-white p-2 text-center font-bold rounded-t-lg text-sm">
          Facing Out
        </div>
        <div className="h-32 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            <DynamicFacingOutTemplate 
              backgroundColor={backgroundColor} 
              accentColor={accentColor} 
              logo={logo} 
              logoSize={logoSize}
            />
          </div>
        </div>
      </div>
      
      {/* Facing In section */}
      <div>
        <div className="bg-[#FF6600] text-white p-2 text-center font-bold rounded-t-lg text-sm">
          Facing In
        </div>
        <div className="h-32 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
          <div className="w-full h-full p-2">
            {renderTemplate()}
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500">Label size: 68x45mm</div>
    </div>
  );
};

export default SimpleLabelPreview;

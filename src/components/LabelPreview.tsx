
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLogo } from "@/context/LogoContext";
import { useTemplate } from "@/context/LabelTemplateContext";
import { 
  DynamicLandscapeOption1,
  DynamicLandscapeOption2,
  DynamicLandscapeOption3,
  DynamicFacingOutTemplate
} from "./templates/DynamicLandscapeTemplates";

const LabelPreview = () => {
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
    <div className="space-y-4 sticky top-8">
      <h3 className="text-lg font-bold">Label Preview</h3>
      
      <Tabs defaultValue="facing-out" className="w-full">
        <TabsList className="grid grid-cols-3 w-full bg-gray-100">
          <TabsTrigger 
            value="both-sides" 
            className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white"
          >
            Both Sides
          </TabsTrigger>
          <TabsTrigger 
            value="facing-out" 
            className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white"
          >
            Facing Out
          </TabsTrigger>
          <TabsTrigger 
            value="facing-in" 
            className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white"
          >
            Facing In
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="both-sides" className="space-y-4 mt-4">
          {/* Facing Out section in Both Sides tab */}
          <div className="mb-6">
            <div className="bg-[#FF6600] text-white p-4 text-center font-bold rounded-t-lg">
              Facing Out
            </div>
            <div className="h-48 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
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
          
          {/* Facing In section in Both Sides tab */}
          <div>
            <div className="bg-[#FF6600] text-white p-4 text-center font-bold rounded-t-lg">
              Facing In
            </div>
            <div className="h-48 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
              <div className="w-full h-full p-2">
                {renderTemplate()}
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">Label size: 68x45mm</div>
        </TabsContent>
        
        <TabsContent value="facing-out" className="mt-4">
          <div>
            <div className="bg-[#FF6600] text-white p-4 text-center font-bold rounded-t-lg">
              Facing Out
            </div>
            <div className="h-48 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
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
          <div className="text-center text-sm text-gray-500 mt-4">Label size: 68x45mm</div>
        </TabsContent>
        
        <TabsContent value="facing-in" className="mt-4">
          <div>
            <div className="bg-[#FF6600] text-white p-4 text-center font-bold rounded-t-lg">
              Facing In
            </div>
            <div className="h-48 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
              <div className="w-full h-full p-2">
                {renderTemplate()}
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-4">Label size: 68x45mm</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LabelPreview;

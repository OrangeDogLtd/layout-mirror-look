
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useTemplate } from "@/context/LabelTemplateContext";
import { StaticLandscapeOption1, StaticLandscapeOption2, StaticLandscapeOption3 } from "./templates/StaticLandscapeTemplates";

// Define the CMYK colour options with corrected values
const colourOptions = [
  { name: "White", value: "white", hex: "#FFFFFF", border: true },
  { name: "Gray", value: "gray", hex: "#8E9196" },
  { name: "Black", value: "black", hex: "#000000" },
  { name: "Dark Blue", value: "dark-blue", hex: "#063954" }, // Darker blue
  { name: "Green", value: "green", hex: "#4a8a48" }, // Darker green
  { name: "Purple", value: "purple", hex: "#9b87f5" },
  { name: "Orange", value: "orange", hex: "#F97316" },
  { name: "Light Pink", value: "light-pink", hex: "#FFDEE2" },
  { name: "Brown", value: "brown", hex: "#8B4513" }, // Corrected brown
  { name: "Baby Blue", value: "baby-blue", hex: "#1EAEDB" },
  { name: "Red", value: "red", hex: "#ea384c" },
  { name: "Yellow", value: "yellow", hex: "#FEF7CD" },
  { name: "Lime Green", value: "lime-green", hex: "#8BC34A" },
];

// Colour Circle component for the radio items
const ColourCircle = ({ color, isSelected, border }) => (
  <div
    className={cn(
      "w-8 h-8 rounded-full transition-all",
      isSelected ? "ring-2 ring-offset-2 ring-[#FF6600]" : "",
      border ? "border border-gray-300" : ""
    )}
    style={{ backgroundColor: color }}
  >
    {isSelected && (
      <div className="w-full h-full flex items-center justify-center">
        <Check className="h-4 w-4 text-white" />
      </div>
    )}
  </div>
);

// Colour Picker Popover Component
const ColourPickerPopover = ({ title, selectedColour, onSelectColour }) => {
  const selectedOption = colourOptions.find(c => c.value === selectedColour);
  
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">{title}</h3>
      
      <Popover>
        <PopoverTrigger className="w-full flex items-center justify-between border rounded-md p-2 hover:bg-gray-50 bg-gray-50">
          <div className="flex items-center gap-2">
            <ColourCircle 
              color={selectedOption?.hex} 
              isSelected={false} 
              border={selectedOption?.border} 
            />
            <span>{selectedOption?.name}</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </PopoverTrigger>
        
        <PopoverContent className="w-72">
          <div className="grid grid-cols-4 gap-4">
            {colourOptions.map((colour) => (
              <div key={colour.value} className="flex flex-col items-center gap-1">
                <button
                  type="button"
                  onClick={() => onSelectColour(colour.value)}
                  className="flex items-center justify-center focus:outline-none"
                >
                  <ColourCircle 
                    color={colour.hex} 
                    isSelected={selectedColour === colour.value} 
                    border={colour.border}
                  />
                </button>
                <span className="text-xs text-center">{colour.name}</span>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const LabelLayoutOptions = () => {
  const [orientation, setOrientation] = useState("landscape");
  const { 
    selectedTemplate, 
    setSelectedTemplate,
    backgroundColor, 
    setBackgroundColor,
    accentColor, 
    setAccentColor 
  } = useTemplate();
  const [logoSizeFacingOut, setLogoSizeFacingOut] = useState([50]);
  const [logoSizeFacingIn, setLogoSizeFacingIn] = useState([50]);
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Select Label Layout</h3>
        
        <Tabs defaultValue="landscape" onValueChange={setOrientation} className="w-full">
          <TabsList className="grid grid-cols-2 w-full bg-gray-100">
            <TabsTrigger 
              value="landscape" 
              className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white"
            >
              Landscape
            </TabsTrigger>
            <TabsTrigger 
              value="portrait" 
              className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white"
            >
              Portrait
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="landscape" className="pt-4">
            <RadioGroup 
              value={selectedTemplate}
              onValueChange={setSelectedTemplate}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <Label
                  htmlFor="landscape-option-1"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedTemplate === "landscape-option-1" ? "border-[#FF6600] ring-2 ring-[#FF6600]/20" : "border-gray-200"
                  )}
                >
                  <div className="p-3 bg-white">
                    <StaticLandscapeOption1 />
                  </div>
                  <div className="bg-[#FF6600] p-2 text-center text-sm text-white">
                    Option 1
                  </div>
                  <RadioGroupItem value="landscape-option-1" id="landscape-option-1" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="landscape-option-2"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedTemplate === "landscape-option-2" ? "border-[#FF6600] ring-2 ring-[#FF6600]/20" : "border-gray-200"
                  )}
                >
                  <div className="p-3 bg-white">
                    <StaticLandscapeOption2 />
                  </div>
                  <div className="bg-[#FF6600] p-2 text-center text-sm text-white">
                    Option 2
                  </div>
                  <RadioGroupItem value="landscape-option-2" id="landscape-option-2" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="landscape-option-3"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedTemplate === "landscape-option-3" ? "border-[#FF6600] ring-2 ring-[#FF6600]/20" : "border-gray-200"
                  )}
                >
                  <div className="p-3 bg-white">
                    <StaticLandscapeOption3 />
                  </div>
                  <div className="bg-[#FF6600] p-2 text-center text-sm text-white">
                    Option 3
                  </div>
                  <RadioGroupItem value="landscape-option-3" id="landscape-option-3" className="sr-only" />
                </Label>
              </div>
            </RadioGroup>
          </TabsContent>
          
          <TabsContent value="portrait" className="pt-4">
            <RadioGroup 
              value={selectedTemplate}
              onValueChange={setSelectedTemplate}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <Label
                  htmlFor="portrait-option-1"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedTemplate === "portrait-option-1" ? "border-[#FF6600] ring-2 ring-[#FF6600]/20" : "border-gray-200"
                  )}
                >
                  <div className="p-3 bg-white">
                    <div className="aspect-square bg-white relative">
                      <div className="absolute bottom-0 left-0 right-0 bg-[#FF6600] p-2 text-center text-sm text-white">
                        Option 1
                      </div>
                    </div>
                  </div>
                  <RadioGroupItem value="portrait-option-1" id="portrait-option-1" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="portrait-option-2"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedTemplate === "portrait-option-2" ? "border-[#FF6600] ring-2 ring-[#FF6600]/20" : "border-gray-200"
                  )}
                >
                  <div className="p-3 bg-white">
                    <div className="aspect-square bg-white relative">
                      <div className="absolute bottom-0 left-0 right-0 bg-[#FF6600] p-2 text-center text-sm text-white">
                        Option 2
                      </div>
                    </div>
                  </div>
                  <RadioGroupItem value="portrait-option-2" id="portrait-option-2" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="portrait-option-3"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedTemplate === "portrait-option-3" ? "border-[#FF6600] ring-2 ring-[#FF6600]/20" : "border-gray-200"
                  )}
                >
                  <div className="p-3 bg-white">
                    <div className="aspect-square bg-white relative">
                      <div className="absolute bottom-0 left-0 right-0 bg-[#FF6600] p-2 text-center text-sm text-white">
                        Option 3
                      </div>
                    </div>
                  </div>
                  <RadioGroupItem value="portrait-option-3" id="portrait-option-3" className="sr-only" />
                </Label>
              </div>
            </RadioGroup>
          </TabsContent>
        </Tabs>
      </div>

      {/* Colour Selection Section - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ColourPickerPopover 
          title="Background Colour"
          selectedColour={backgroundColor}
          onSelectColour={setBackgroundColor}
        />
        
        <ColourPickerPopover 
          title="Accent Colour"
          selectedColour={accentColor}
          onSelectColour={setAccentColor}
        />
      </div>

      {/* Logo Size Section with Sliders */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Logo Size</h3>
        
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="logo-size-facing-out">Logo Size (Facing Out)</Label>
              <span className="text-sm text-gray-500">{logoSizeFacingOut}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Small</span>
              <Slider
                id="logo-size-facing-out"
                value={logoSizeFacingOut}
                onValueChange={setLogoSizeFacingOut}
                min={10}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-gray-500">Large</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="logo-size-facing-in">Logo Size (Facing In)</Label>
              <span className="text-sm text-gray-500">{logoSizeFacingIn}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Small</span>
              <Slider
                id="logo-size-facing-in"
                value={logoSizeFacingIn}
                onValueChange={setLogoSizeFacingIn}
                min={10}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-gray-500">Large</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelLayoutOptions;

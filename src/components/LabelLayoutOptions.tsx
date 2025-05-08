
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

// Define the CMYK colour options with corrected values
const colourOptions = [
  { name: "White", value: "white", hex: "#FFFFFF", border: true },
  { name: "Gray", value: "gray", hex: "#8E9196" },
  { name: "Black", value: "black", hex: "#000000" },
  { name: "Dark Blue", value: "dark-blue", hex: "#0A4D6D" }, // Darker blue
  { name: "Green", value: "green", hex: "#6DB56A" }, // Darker green
  { name: "Purple", value: "purple", hex: "#9b87f5" },
  { name: "Orange", value: "orange", hex: "#F97316" },
  { name: "Light Pink", value: "light-pink", hex: "#FFDEE2" },
  { name: "Brown", value: "brown", hex: "#6D4C41" }, // Corrected brown
  { name: "Baby Blue", value: "baby-blue", hex: "#1EAEDB" },
  { name: "Red", value: "red", hex: "#ea384c" },
  { name: "Yellow", value: "yellow", hex: "#FEF7CD" },
  { name: "Lime Green", value: "lime-green", hex: "#8BC34A" }, // Corrected lime green
];

// Colour Circle component for the radio items
const ColourCircle = ({ color, isSelected, border }) => (
  <div
    className={cn(
      "w-8 h-8 rounded-full transition-all",
      isSelected ? "ring-2 ring-offset-2 ring-[#FF6422]" : "",
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
        <PopoverTrigger className="w-full flex items-center justify-between border rounded-md p-2 hover:bg-gray-50">
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
  const [backgroundColour, setBackgroundColour] = useState("white");
  const [accentColour, setAccentColour] = useState("orange");
  const [selectedLayout, setSelectedLayout] = useState("orange-circle");
  const [logoSizeFacingOut, setLogoSizeFacingOut] = useState([50]);
  const [logoSizeFacingIn, setLogoSizeFacingIn] = useState([50]);
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Select Label Layout</h3>
        
        <Tabs defaultValue="landscape" onValueChange={setOrientation} className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="landscape">Landscape</TabsTrigger>
            <TabsTrigger value="portrait">Portrait</TabsTrigger>
          </TabsList>
          
          <TabsContent value="landscape" className="pt-4">
            <RadioGroup 
              value={selectedLayout}
              onValueChange={setSelectedLayout}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <Label
                  htmlFor="orange-circle"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedLayout === "orange-circle" ? "border-[#FF6422] ring-2 ring-[#FF6422]/20" : "border-gray-200"
                  )}
                >
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                      Orange Circle Service Label
                    </div>
                  </div>
                  <RadioGroupItem value="orange-circle" id="orange-circle" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="black-banner"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedLayout === "black-banner" ? "border-[#FF6422] ring-2 ring-[#FF6422]/20" : "border-gray-200"
                  )}
                >
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                      Black Banner Service Label
                    </div>
                  </div>
                  <RadioGroupItem value="black-banner" id="black-banner" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="split-panel"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedLayout === "split-panel" ? "border-[#FF6422] ring-2 ring-[#FF6422]/20" : "border-gray-200"
                  )}
                >
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                      Split Panel Service Label
                    </div>
                  </div>
                  <RadioGroupItem value="split-panel" id="split-panel" className="sr-only" />
                </Label>
              </div>
            </RadioGroup>
          </TabsContent>
          
          <TabsContent value="portrait" className="pt-4">
            <RadioGroup 
              value={selectedLayout}
              onValueChange={setSelectedLayout}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <Label
                  htmlFor="portrait-standard"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedLayout === "portrait-standard" ? "border-[#FF6422] ring-2 ring-[#FF6422]/20" : "border-gray-200"
                  )}
                >
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                      Portrait Standard
                    </div>
                  </div>
                  <RadioGroupItem value="portrait-standard" id="portrait-standard" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="portrait-vertical"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedLayout === "portrait-vertical" ? "border-[#FF6422] ring-2 ring-[#FF6422]/20" : "border-gray-200"
                  )}
                >
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                      Portrait Vertical Split
                    </div>
                  </div>
                  <RadioGroupItem value="portrait-vertical" id="portrait-vertical" className="sr-only" />
                </Label>
              </div>
              
              <div>
                <Label
                  htmlFor="portrait-horizontal"
                  className={cn(
                    "cursor-pointer block border rounded-md w-full overflow-hidden transition-all", 
                    selectedLayout === "portrait-horizontal" ? "border-[#FF6422] ring-2 ring-[#FF6422]/20" : "border-gray-200"
                  )}
                >
                  <div className="h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                      Portrait Horizontal Split
                    </div>
                  </div>
                  <RadioGroupItem value="portrait-horizontal" id="portrait-horizontal" className="sr-only" />
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
          selectedColour={backgroundColour}
          onSelectColour={setBackgroundColour}
        />
        
        <ColourPickerPopover 
          title="Accent Colour"
          selectedColour={accentColour}
          onSelectColour={setAccentColour}
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

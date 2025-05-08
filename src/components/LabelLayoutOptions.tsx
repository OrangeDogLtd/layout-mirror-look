
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Define the CMYK color options
const colorOptions = [
  { name: "White", value: "white", hex: "#FFFFFF", border: true },
  { name: "Gray", value: "gray", hex: "#8E9196" },
  { name: "Black", value: "black", hex: "#000000" },
  { name: "Light Blue", value: "light-blue", hex: "#D3E4FD" },
  { name: "Dark Blue", value: "dark-blue", hex: "#0EA5E9" },
  { name: "Green", value: "green", hex: "#F2FCE2" },
  { name: "Purple", value: "purple", hex: "#9b87f5" },
  { name: "Orange", value: "orange", hex: "#F97316" },
  { name: "Light Pink", value: "light-pink", hex: "#FFDEE2" },
  { name: "Brown", value: "brown", hex: "#403E43" },
  { name: "Baby Blue", value: "baby-blue", hex: "#1EAEDB" },
  { name: "Teal", value: "teal", hex: "#0FA0CE" },
  { name: "Red", value: "red", hex: "#ea384c" },
  { name: "Yellow", value: "yellow", hex: "#FEF7CD" },
  { name: "Gold", value: "gold", hex: "#FEC6A1" },
  { name: "Lime Green", value: "lime-green", hex: "#F2FCE2" },
];

// Color Circle component for the radio items
const ColorCircle = ({ color, isSelected, border }) => (
  <div
    className={cn(
      "w-8 h-8 rounded-full transition-all",
      isSelected ? "ring-2 ring-offset-2 ring-[#FF6422]" : "",
      border ? "border border-gray-300" : ""
    )}
    style={{ backgroundColor: color }}
  />
);

const LabelLayoutOptions = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Select Label Layout</h3>
        
        <RadioGroup defaultValue="orange-circle" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="orange-circle" id="orange-circle" />
              <div className="border rounded-md w-full h-32 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                  Orange Circle Service Label
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="black-banner" id="black-banner" />
              <div className="border rounded-md w-full h-32 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                  Black Banner Service Label
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="split-panel" id="split-panel" />
              <div className="border rounded-md w-full h-32 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 text-center text-sm">
                  Split Panel Service Label
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Background Color Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Background Color</h3>
        <RadioGroup defaultValue="white" className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {colorOptions.map((color) => (
            <div key={color.value} className="flex flex-col items-center gap-1">
              <div className="relative flex items-center justify-center">
                <RadioGroupItem 
                  value={color.value} 
                  id={`bg-${color.value}`}
                  className="sr-only"
                />
                <Label
                  htmlFor={`bg-${color.value}`}
                  className="cursor-pointer flex items-center justify-center"
                >
                  <ColorCircle 
                    color={color.hex} 
                    isSelected={false} 
                    border={color.border}
                  />
                </Label>
              </div>
              <span className="text-xs text-center">{color.name}</span>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Accent Color Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Accent Color</h3>
        <RadioGroup defaultValue="orange" className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {colorOptions.map((color) => (
            <div key={color.value} className="flex flex-col items-center gap-1">
              <div className="relative flex items-center justify-center">
                <RadioGroupItem 
                  value={color.value} 
                  id={`accent-${color.value}`} 
                  className="sr-only"
                />
                <Label
                  htmlFor={`accent-${color.value}`}
                  className="cursor-pointer flex items-center justify-center"
                >
                  <ColorCircle 
                    color={color.hex} 
                    isSelected={false} 
                    border={color.border}
                  />
                </Label>
              </div>
              <span className="text-xs text-center">{color.name}</span>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default LabelLayoutOptions;


import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Font options
const fontOptions = [
  { label: "Bebas Neue", value: "bebas-neue" },
  { label: "Arial", value: "arial" },
  { label: "Helvetica", value: "helvetica" },
  { label: "Verdana", value: "verdana" },
];

// Font size options
const fontSizeOptions = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
  { label: "Extra Large", value: "xl" },
];

// Font weight options
const fontWeightOptions = [
  { label: "Normal", value: "normal" },
  { label: "Semi-Bold", value: "semibold" },
  { label: "Bold", value: "bold" },
];

const TextStyleControls = ({ label, font, setFont, size, setSize, weight, setWeight }) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="grid grid-cols-3 gap-2">
        <Select value={font} onValueChange={setFont}>
          <SelectTrigger>
            <SelectValue placeholder="Font" />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={size} onValueChange={setSize}>
          <SelectTrigger>
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            {fontSizeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={weight} onValueChange={setWeight}>
          <SelectTrigger>
            <SelectValue placeholder="Weight" />
          </SelectTrigger>
          <SelectContent>
            {fontWeightOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const TextInputSection = () => {
  // Phone number styling state
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneFont, setPhoneFont] = useState("bebas-neue");
  const [phoneSize, setPhoneSize] = useState("large");
  const [phoneWeight, setPhoneWeight] = useState("bold");
  
  // Secondary text styling state
  const [secondaryText, setSecondaryText] = useState("");
  const [secondaryFont, setSecondaryFont] = useState("bebas-neue");
  const [secondarySize, setSecondarySize] = useState("medium");
  const [secondaryWeight, setSecondaryWeight] = useState("normal");
  
  // Get font family based on selection
  const getFontFamily = (font) => {
    switch (font) {
      case "bebas-neue": return "'Bebas Neue', sans-serif";
      case "arial": return "Arial, sans-serif";
      case "helvetica": return "Helvetica, sans-serif";
      case "verdana": return "Verdana, sans-serif";
      default: return "'Bebas Neue', sans-serif";
    }
  };
  
  // Get font size based on selection
  const getFontSize = (size) => {
    switch (size) {
      case "small": return "text-sm";
      case "medium": return "text-base";
      case "large": return "text-lg";
      case "xl": return "text-2xl";
      default: return "text-base";
    }
  };
  
  // Get font weight based on selection
  const getFontWeight = (weight) => {
    switch (weight) {
      case "normal": return "font-normal";
      case "semibold": return "font-semibold";
      case "bold": return "font-bold";
      default: return "font-normal";
    }
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Label Text</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input
              id="phone-number"
              placeholder="e.g. 0800 123 4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <TextStyleControls
            label="Phone Number Styling"
            font={phoneFont}
            setFont={setPhoneFont}
            size={phoneSize}
            setSize={setPhoneSize}
            weight={phoneWeight}
            setWeight={setPhoneWeight}
          />
          
          <div className="border p-3 rounded-md bg-gray-50">
            <p 
              style={{ fontFamily: getFontFamily(phoneFont) }}
              className={cn(
                getFontSize(phoneSize),
                getFontWeight(phoneWeight)
              )}
            >
              {phoneNumber || "Phone Number Preview"}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="secondary-text">Secondary Text</Label>
            <Input
              id="secondary-text"
              placeholder="e.g. Next Service Due"
              value={secondaryText}
              onChange={(e) => setSecondaryText(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <TextStyleControls
            label="Secondary Text Styling"
            font={secondaryFont}
            setFont={setSecondaryFont}
            size={secondarySize}
            setSize={setSecondarySize}
            weight={secondaryWeight}
            setWeight={setSecondaryWeight}
          />
          
          <div className="border p-3 rounded-md bg-gray-50">
            <p 
              style={{ fontFamily: getFontFamily(secondaryFont) }}
              className={cn(
                getFontSize(secondarySize),
                getFontWeight(secondaryWeight)
              )}
            >
              {secondaryText || "Secondary Text Preview"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInputSection;

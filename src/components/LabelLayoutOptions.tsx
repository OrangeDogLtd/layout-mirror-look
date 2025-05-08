
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const LabelLayoutOptions = () => {
  return (
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
  );
};

export default LabelLayoutOptions;

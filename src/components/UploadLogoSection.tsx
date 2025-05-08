
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const UploadLogoSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-center">Upload Your Logo</h3>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
        <Upload className="h-8 w-8 text-gray-400 mb-3" />
        <p className="text-gray-600 text-center mb-2">Click to upload or drag and drop</p>
        <p className="text-gray-400 text-sm text-center mb-6">PNG or JPEG (recommended: PNG with transparency)</p>
        
        <Button variant="outline" className="bg-white hover:bg-gray-50">
          Select Logo
        </Button>
      </div>
    </div>
  );
};

export default UploadLogoSection;

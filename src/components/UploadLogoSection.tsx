
import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogo } from "@/context/LogoContext";
import { toast } from "sonner";

const UploadLogoSection = () => {
  const { logo, setLogo, setLogoFile } = useLogo();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a PNG or JPEG file");
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("File size should be less than 2MB");
      return;
    }

    // Create object URL for preview
    const objectUrl = URL.createObjectURL(file);
    setLogo(objectUrl);
    setLogoFile(file);
    toast.success("Logo uploaded successfully");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-center">Upload Your Logo</h3>
      
      {logo ? (
        <div className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Your Logo</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleRemoveLogo}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="Your logo" 
              className="max-h-32 max-w-full object-contain" 
            />
          </div>
        </div>
      ) : (
        <div 
          className={`border-2 border-dashed ${isDragging ? 'border-[#FF6600] bg-orange-50' : 'border-gray-300'} rounded-lg p-8 flex flex-col items-center justify-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-8 w-8 text-gray-400 mb-3" />
          <p className="text-gray-600 text-center mb-2">Click to upload or drag and drop</p>
          <p className="text-gray-400 text-sm text-center mb-6">PNG or JPEG (recommended: PNG with transparency)</p>
          
          <Button 
            variant="outline" 
            className="bg-white hover:bg-gray-50"
            onClick={() => fileInputRef.current?.click()}
          >
            Select Logo
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".png,.jpg,.jpeg"
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default UploadLogoSection;

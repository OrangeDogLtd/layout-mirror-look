
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload } from "lucide-react";
import LabelPreview from "@/components/LabelPreview";
import UploadLogoSection from "@/components/UploadLogoSection";
import LabelLayoutOptions from "@/components/LabelLayoutOptions";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-6xl px-6 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Custom Service Label Builder
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Create your own custom service label for your workshop
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Design Form */}
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Orange Header */}
              <div className="bg-[#FF6422] text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Design Your Label</h2>
                <p>Upload your logo and fill in your business information</p>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-8">
                <UploadLogoSection />
                <LabelLayoutOptions />
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="w-full lg:w-[400px]">
            <LabelPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

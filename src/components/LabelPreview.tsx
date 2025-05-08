
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LabelPreview = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Label Preview</h3>
      
      <Tabs defaultValue="facing-out" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="both-sides">Both Sides</TabsTrigger>
          <TabsTrigger value="facing-out">Facing Out</TabsTrigger>
          <TabsTrigger value="facing-in">Facing In</TabsTrigger>
        </TabsList>
        
        <TabsContent value="both-sides" className="space-y-4 mt-4">
          {/* Facing Out section in Both Sides tab */}
          <div className="mb-6">
            <div className="bg-[#FF6422] text-white p-4 text-center font-bold rounded-t-lg">
              Facing Out
            </div>
            <div className="h-48 border-2 border-gray-200 rounded-b-lg flex items-center justify-center">
              {/* Preview content would go here */}
              <div className="text-center text-gray-400">Preview will appear here</div>
            </div>
          </div>
          
          {/* Facing In section in Both Sides tab */}
          <div>
            <div className="bg-[#FF6422] text-white p-4 text-center font-bold rounded-t-lg">
              Facing In
            </div>
            <div className="h-48 border-2 border-gray-200 rounded-b-lg flex items-center justify-center">
              {/* Preview content would go here */}
              <div className="text-center text-gray-400">Preview will appear here</div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">Label size: 68x45mm</div>
        </TabsContent>
        
        <TabsContent value="facing-out" className="space-y-4 mt-4">
          <div className="bg-[#FF6422] text-white p-4 text-center font-bold rounded-t-lg">
            Facing Out
          </div>
          <div className="h-48 border-2 border-gray-200 rounded-b-lg flex items-center justify-center">
            {/* Preview content would go here */}
            <div className="text-center text-gray-400">Preview will appear here</div>
          </div>
          <div className="text-center text-sm text-gray-500">Label size: 68x45mm</div>
        </TabsContent>
        
        <TabsContent value="facing-in" className="space-y-4 mt-4">
          <div className="bg-[#FF6422] text-white p-4 text-center font-bold rounded-t-lg">
            Facing In
          </div>
          <div className="h-48 border-2 border-gray-200 rounded-b-lg flex items-center justify-center">
            {/* Preview content would go here */}
            <div className="text-center text-gray-400">Preview will appear here</div>
          </div>
          <div className="text-center text-sm text-gray-500">Label size: 68x45mm</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LabelPreview;

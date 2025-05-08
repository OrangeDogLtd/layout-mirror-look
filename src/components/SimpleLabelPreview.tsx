
import React from 'react';

interface SimpleLabelPreviewProps {
  className?: string;
}

const SimpleLabelPreview: React.FC<SimpleLabelPreviewProps> = ({ className }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-bold">Label Preview</h3>
      
      {/* Facing Out section */}
      <div className="mb-4">
        <div className="bg-[#FF6600] text-white p-2 text-center font-bold rounded-t-lg text-sm">
          Facing Out
        </div>
        <div className="h-32 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
          <div className="text-center text-gray-400 text-xs">Preview will appear here</div>
        </div>
      </div>
      
      {/* Facing In section */}
      <div>
        <div className="bg-[#FF6600] text-white p-2 text-center font-bold rounded-t-lg text-sm">
          Facing In
        </div>
        <div className="h-32 border-2 border-gray-200 border-t-0 rounded-b-lg flex items-center justify-center">
          <div className="text-center text-gray-400 text-xs">Preview will appear here</div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500">Label size: 68x45mm</div>
    </div>
  );
};

export default SimpleLabelPreview;

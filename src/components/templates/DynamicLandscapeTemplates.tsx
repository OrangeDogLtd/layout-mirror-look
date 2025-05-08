
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DynamicTemplateProps {
  backgroundColor: string;
  accentColor: string;
  logo: string | null;
  logoSize: number;
}

// Helper function to get color hex value
const getColorHex = (colorName: string): string => {
  const colorMap: Record<string, string> = {
    "white": "#FFFFFF",
    "gray": "#8E9196",
    "black": "#000000",
    "dark-blue": "#063954",
    "green": "#4a8a48",
    "purple": "#9b87f5",
    "orange": "#F97316",
    "light-pink": "#FFDEE2",
    "brown": "#8B4513",
    "baby-blue": "#1EAEDB",
    "red": "#ea384c",
    "yellow": "#FEF7CD",
    "lime-green": "#8BC34A"
  };

  return colorMap[colorName] || "#FFFFFF";
};

export const DynamicLandscapeOption1: React.FC<DynamicTemplateProps> = ({
  backgroundColor,
  accentColor,
  logo,
  logoSize
}) => {
  const bgHex = getColorHex(backgroundColor);
  const accentHex = getColorHex(accentColor);

  return (
    <div className="w-full h-full relative">
      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" 
        style={{shapeRendering:"geometricPrecision", textRendering:"geometricPrecision", imageRendering:"auto", fillRule:"evenodd", clipRule:"evenodd"}}
        viewBox="0 0 7433.34 4919.12">
        <g id="Layer_x0020_1">
          <rect className="fil0" x="0" y="-0" width="7433.34" height="4919.12" rx="344.56" ry="437.26" fill={bgHex}/>
          <path className="fil1" d="M446.88 0l6539.59 0c122.9,0 234.63,50.21 315.61,131.07 80.99,80.86 131.26,192.41 131.26,315.14l0 4026.71c0,122.73 -50.27,234.28 -131.26,315.14 -80.98,80.86 -192.71,131.07 -315.61,131.07l-6539.59 0c-122.9,0 -234.63,-50.21 -315.61,-131.07 -80.99,-80.86 -131.26,-192.41 -131.26,-315.14l0 -4026.71c0,-122.73 50.27,-234.28 131.26,-315.14 80.98,-80.86 192.71,-131.07 315.61,-131.07z" fill="#373435" fillRule="nonzero"/>
          <path className="fil2" d="M2105.1 3827.28l0 -1078.79 -1483.09 0c-39.31,0 -75.05,16.09 -100.96,42 -25.92,25.89 -42,61.64 -42,100.97l0 792.86c0,39.3 16.09,75.04 42,100.95 25.91,25.91 61.66,42 100.96,42l1483.09 0z" fill={accentHex}/>
          <path className="fil4" d="M2105.1 3827.28l0 -1078.79 4720.71 0c39.31,0 75.05,16.09 100.96,42 25.92,25.89 42,61.64 42,100.97l0 792.86c0,39.3 -16.09,75.04 -42,100.95 -25.91,25.91 -61.66,42 -100.96,42l-4720.71 0z" fill="#E6E7E8"/>
        </g>
      </svg>

      {logo && (
        <div 
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            width: `${logoSize}%`, 
            maxWidth: '80%',
            maxHeight: '60%'
          }}
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export const DynamicLandscapeOption2: React.FC<DynamicTemplateProps> = ({
  backgroundColor,
  accentColor,
  logo,
  logoSize
}) => {
  const bgHex = getColorHex(backgroundColor);
  const accentHex = getColorHex(accentColor);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricInitialized = useRef(false);

  useEffect(() => {
    if (!canvasRef.current || fabricInitialized.current) return;

    // Load Fabric.js script if it's not already loaded
    const loadFabricJS = async () => {
      try {
        // Check if fabric is already available globally
        if (typeof window !== 'undefined' && !(window as any).fabric) {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js';
          script.async = true;
          
          // Create a promise to wait for the script to load
          const loadPromise = new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Fabric.js'));
          });
          
          document.body.appendChild(script);
          await loadPromise;
        }
        
        initializeCanvas();
        fabricInitialized.current = true;
      } catch (error) {
        console.error("Error loading Fabric.js:", error);
      }
    };
    
    loadFabricJS();
    
    return () => {
      // Clean up canvas when component unmounts
      if (fabricInitialized.current && canvasRef.current && (window as any).fabric) {
        const fabricCanvas = (window as any).fabric.Canvas.__canvas && 
                            (window as any).fabric.Canvas.__canvas[canvasRef.current.id];
        if (fabricCanvas) {
          fabricCanvas.dispose();
        }
      }
    };
  }, []);

  useEffect(() => {
    // Re-render canvas when props change
    if (fabricInitialized.current) {
      initializeCanvas();
    }
  }, [backgroundColor, accentColor, logo, logoSize]);

  const initializeCanvas = () => {
    if (!canvasRef.current || typeof (window as any).fabric === 'undefined') return;

    const canvas = new (window as any).fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 250
    });
    
    // Clear and set background color
    canvas.clear();
    canvas.setBackgroundColor(bgHex, canvas.renderAll.bind(canvas));

    // Grey rounded rectangle (service box)
    const serviceBox = new (window as any).fabric.Rect({
      left: 20,
      top: 40,
      width: 360,
      height: 80,
      rx: 8,
      ry: 8,
      fill: '#E6E7E8',
      stroke: '#373435',
      strokeWidth: 1
    });

    // Accent colored circle
    const circle = new (window as any).fabric.Circle({
      left: 320,
      top: 180,
      radius: 30,
      fill: accentHex,
      stroke: '#373435',
      strokeWidth: 1
    });

    // Add all objects to canvas
    canvas.add(serviceBox);
    canvas.add(circle);

    // Add logo if provided
    if (logo) {
      (window as any).fabric.Image.fromURL(logo, (img: any) => {
        const maxWidth = 150 * (logoSize / 100);
        const scale = Math.min(maxWidth / img.width, 60 / img.height);
        
        img.scale(scale);
        img.set({
          left: 40,
          top: 160,
          originX: 'left',
          originY: 'center'
        });
        
        canvas.add(img);
        canvas.renderAll();
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <canvas ref={canvasRef} id="labelCanvas" className="w-full h-full" />
    </div>
  );
};

export const DynamicLandscapeOption3: React.FC<DynamicTemplateProps> = ({
  backgroundColor,
  accentColor,
  logo,
  logoSize
}) => {
  const bgHex = getColorHex(backgroundColor);
  const accentHex = getColorHex(accentColor);

  return (
    <div className="w-full h-full relative">
      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" 
        style={{shapeRendering:"geometricPrecision", textRendering:"geometricPrecision", imageRendering:"auto", fillRule:"evenodd", clipRule:"evenodd"}}
        viewBox="0 0 7433.34 4919.12">
        <g id="Layer_x0020_1">
          <path className="fil0" d="M437.24 0l6558.85 0c240.49,0 437.24,196.76 437.24,437.24l0 4044.63c0,240.48 -196.75,437.24 -437.24,437.24l-6558.85 0c-240.49,0 -437.24,-196.76 -437.24,-437.24l0 -4044.63c0,-240.48 196.75,-437.24 437.24,-437.24z" fill={bgHex}/>
          <path className="fil1" d="M446.88 0l6539.59 0c122.9,0 234.63,50.21 315.61,131.07 80.99,80.86 131.26,192.41 131.26,315.14l0 4026.71c0,122.73 -50.27,234.28 -131.26,315.14 -80.98,80.86 -192.71,131.07 -315.61,131.07l-6539.59 0c-122.9,0 -234.63,-50.21 -315.61,-131.07 -80.99,-80.86 -131.26,-192.41 -131.26,-315.14l0 -4026.71c0,-122.73 50.27,-234.28 131.26,-315.14 80.98,-80.86 192.71,-131.07 315.61,-131.07z" fill="#373435" fillRule="nonzero"/>
          <path className="fil2 str0" d="M6836.46 2922.31l-4262.57 0 -1977 0c-72.76,0 -132.3,-68.97 -132.3,-153.27l0 -410.01c0,-84.3 59.53,-153.27 132.3,-153.27l1977 0 4262.57 0c72.77,0 132.3,68.98 132.3,153.27l0 410.01c0,84.29 -59.54,153.27 -132.3,153.27z" fill="#FEFEFE" stroke="#373435" strokeWidth="19.68" strokeMiterlimit="22.9256"/>
          <path className="fil2 str0" d="M6836.46 3691.05l-6239.57 0c-72.76,0 -132.3,-68.97 -132.3,-153.27l0 -410.04c0,-84.3 59.53,-153.27 132.3,-153.27l6239.57 0c72.77,0 132.3,68.98 132.3,153.27l0 410.04c0,84.29 -59.54,153.27 -132.3,153.27z" fill="#FEFEFE" stroke="#373435" strokeWidth="19.68" strokeMiterlimit="22.9256"/>
          <path className="fil3" d="M2433.35 2215.6l0 696.88 -1836.46 0c-33.41,0 -63.87,-15.94 -86.02,-41.6 -22.47,-26.04 -36.45,-62.09 -36.45,-101.83l0 -410.01c0,-39.74 13.96,-75.79 36.45,-101.83 22.15,-25.67 52.61,-41.6 86.02,-41.6l1836.46 0z" fill={accentHex}/>
          <path className="fil2 str0" d="M6836.46 4459.78l-6239.57 0c-72.76,0 -132.3,-68.97 -132.3,-153.27l0 -410.04c0,-84.3 59.53,-153.27 132.3,-153.27l6239.57 0c72.77,0 132.3,68.98 132.3,153.27l0 410.04c0,84.29 -59.54,153.27 -132.3,153.27z" fill="#FEFEFE" stroke="#373435" strokeWidth="19.68" strokeMiterlimit="22.9256"/>
          <path className="fil3" d="M2433.35 2984.32l0 696.88 -1836.46 0c-33.41,0 -63.87,-15.94 -86.02,-41.6 -22.47,-26.04 -36.45,-62.09 -36.45,-101.83l0 -410.01c0,-39.74 13.96,-75.79 36.45,-101.83 22.15,-25.67 52.61,-41.6 86.02,-41.6l1836.46 0z" fill={accentHex}/>
          <path className="fil3" d="M2433.35 3753.05l0 696.88 -1836.46 0c-33.41,0 -63.87,-15.94 -86.02,-41.6 -22.47,-26.04 -36.45,-62.09 -36.45,-101.83l0 -410.01c0,-39.74 13.96,-75.79 36.45,-101.83 22.15,-25.67 52.61,-41.6 86.02,-41.6l1836.46 0z" fill={accentHex}/>
        </g>
      </svg>

      {logo && (
        <div 
          className="absolute top-[25%] left-[30%] transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            width: `${logoSize}%`,
            maxWidth: '60%',
            maxHeight: '40%'
          }}
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
};

// New template for facing out labels using the provided SVG
export const DynamicFacingOutTemplate: React.FC<DynamicTemplateProps> = ({
  backgroundColor,
  accentColor,
  logo,
  logoSize
}) => {
  const bgHex = getColorHex(backgroundColor);
  
  return (
    <div className="w-full h-full relative">
      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" version="1.1" 
        style={{shapeRendering:"geometricPrecision", textRendering:"geometricPrecision", imageRendering:"auto", fillRule:"evenodd", clipRule:"evenodd"}}
        viewBox="0 0 2015.49 1333.78">
        <g id="Layer_x0020_1">
          <rect className="fil0" x="0" width="2015.49" height="1333.78" rx="93.42" ry="118.56" fill="#FEFEFE"/>
          <path className="fil1" d="M121.17 0l1773.16 0c33.32,0 63.62,13.61 85.58,35.54 21.96,21.92 35.59,52.17 35.59,85.45l0 1091.81c0,33.28 -13.63,63.52 -35.59,85.45 -21.96,21.92 -52.25,35.54 -85.58,35.54l-1773.16 0c-33.32,0 -63.62,-13.61 -85.58,-35.54 -21.96,-21.92 -35.59,-52.17 -35.59,-85.45l0 -1091.81c0,-33.28 13.63,-63.52 35.59,-85.45 21.96,-21.92 52.25,-35.54 85.58,-35.54zm1773.16 5.9l-1773.16 0c-31.69,0 -60.51,12.95 -81.4,33.81 -20.89,20.86 -33.86,49.63 -33.86,81.28l0 1091.81c0,31.65 12.97,60.42 33.86,81.28 20.89,20.85 49.7,33.81 81.4,33.81l1773.16 0c31.69,0 60.51,-12.95 81.4,-33.81 20.89,-20.86 33.86,-49.63 33.86,-81.28l0 -1091.81c0,-31.65 -12.97,-60.42 -33.86,-81.28 -20.89,-20.85 -49.7,-33.81 -81.4,-33.81z" fill="#373435"/>
        </g>
      </svg>

      {logo && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            width: `${logoSize}%`,
            maxWidth: '80%',
            maxHeight: '70%'
          }}
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
};

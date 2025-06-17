
import React from "react";
import { 
  Database, 
  Link, 
  Bot, 
  Settings, 
  Code, 
  Layers, 
  RotateCcw, 
  TestTube, 
  Target 
} from "lucide-react";
import { Feature } from "./types";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getIcon = () => {
    switch (feature.icon) {
      case "custom-logo":
        return (
          <img 
            src="/lovable-uploads/d483e6f4-63ea-4cef-a784-88543898b1d4.png" 
            alt="Data Monitor Logo" 
            className="w-6 h-6 object-contain"
          />
        );
      case "sources-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/1efeca07-9a62-454f-9dfe-2d7d2d8dbe00.png" 
              alt="Sources Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Sources logo failed to load, falling back to Database icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Database 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "source-links-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/cbcd9c7e-27d8-4a1b-b7a7-bd8a4efdc1c6.png" 
              alt="Source Links Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Source Links logo failed to load, falling back to Link icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Link 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "electron-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/aacd8936-4766-436b-9ecc-581c9e6f43e6.png" 
              alt="Electron AI Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Electron AI logo failed to load, falling back to Bot icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Bot 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "mappings-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/96b70841-8b24-454c-846c-5994e44c6680.png" 
              alt="Mappings Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Mappings logo failed to load, falling back to Settings icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Settings 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "expression-library-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/2a187721-a4cd-4642-bc81-1ce8a8610a5b.png" 
              alt="Expression Library Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Expression Library logo failed to load, falling back to Code icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Code 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "semantic-layer-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/60915d00-c0ad-4bc0-bb22-f9e8c53494f3.png" 
              alt="Semantic Layer Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Semantic Layer logo failed to load, falling back to Layers icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Layers 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "mapper-replay-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/6c5770f7-a0b4-4491-a532-e6733e60d1a9.png" 
              alt="Mapper Replay Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Mapper Replay logo failed to load, falling back to RotateCcw icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <RotateCcw 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "sandbox-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/461de090-e2c8-42fe-9922-677f351efc1a.png" 
              alt="Sandbox Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Sandbox logo failed to load, falling back to TestTube icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <TestTube 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      case "destinations-logo":
        return (
          <>
            <img 
              src="/lovable-uploads/b061c278-08d2-476d-a88b-790cc9a6588f.png" 
              alt="Destinations Logo" 
              className="w-6 h-6 object-contain"
              onError={(e) => {
                console.log('Destinations logo failed to load, falling back to Target icon');
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <Target 
              size={24} 
              className="text-[#2462AA]" 
              style={{ display: 'none' }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
      <div className="flex items-center mb-4">
        <div className="bg-[#2462AA]/10 p-3 rounded-lg mr-4 flex items-center justify-center">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;

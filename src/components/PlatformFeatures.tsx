
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

const PlatformFeatures = () => {
  const features = [
    {
      icon: "custom-logo", // Special identifier for custom logo
      title: "Data Monitoring",
      description: "Monitor the health and status of all data source connections in one central location."
    },
    {
      icon: "sources-logo", // Special identifier for sources logo
      title: "Sources",
      description: "Use a library of 500+ connectors to ingest and integrate your data."
    },
    {
      icon: "source-links-logo", // Special identifier for source links logo
      title: "Source Links",
      description: "Combine data from multiple sources into a unified structure for analysis."
    },
    {
      icon: "electron-logo", // Special identifier for electron logo
      title: "Electron AI",
      description: "Built-in AI assistant for managing mappings, pipeline tasks, and data logic using natural language."
    },
    {
      icon: "mappings-logo", // Special identifier for mappings logo
      title: "Mappings",
      description: "Configure and control how your data is transformed and routed to destinations."
    },
    {
      icon: "expression-library-logo", // Special identifier for expression library logo
      title: "Mapping Expression Library",
      description: "Includes functions and helpers for logic, math, structure, text, dates, and statistics."
    },
    {
      icon: Layers,
      title: "Semantic Layer and Models",
      description: "Build and maintain reusable, consistent data models for business clarity and governance."
    },
    {
      icon: RotateCcw,
      title: "Mapper Replay",
      description: "Retransform source data using updated mappings without reingesting raw data."
    },
    {
      icon: TestTube,
      title: "Sandbox Mode",
      description: "Build, test, and validate mapping changes in an isolated environment before deployment."
    },
    {
      icon: "destinations-logo", // Special identifier for destinations logo
      title: "Destinations",
      description: "Output data to Snowflake, BigQuery, Databricks, S3, and Google Cloud Storage."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to build, manage, and scale your data infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#2462AA]/10 p-3 rounded-lg mr-4 flex items-center justify-center">
                    {feature.icon === "custom-logo" ? (
                      <img 
                        src="/lovable-uploads/d483e6f4-63ea-4cef-a784-88543898b1d4.png" 
                        alt="Data Monitor Logo" 
                        className="w-6 h-6 object-contain"
                      />
                    ) : feature.icon === "sources-logo" ? (
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
                    ) : feature.icon === "source-links-logo" ? (
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
                    ) : feature.icon === "electron-logo" ? (
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
                    ) : feature.icon === "mappings-logo" ? (
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
                    ) : feature.icon === "expression-library-logo" ? (
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
                    ) : feature.icon === "destinations-logo" ? (
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
                    ) : (
                      React.createElement(feature.icon, { size: 24, className: "text-[#2462AA]" })
                    )}
                    {feature.icon === "sources-logo" && (
                      <Database 
                        size={24} 
                        className="text-[#2462AA]" 
                        style={{ display: 'none' }}
                      />
                    )}
                    {feature.icon === "source-links-logo" && (
                      <Link 
                        size={24} 
                        className="text-[#2462AA]" 
                        style={{ display: 'none' }}
                      />
                    )}
                    {feature.icon === "electron-logo" && (
                      <Bot 
                        size={24} 
                        className="text-[#2462AA]" 
                        style={{ display: 'none' }}
                      />
                    )}
                    {feature.icon === "mappings-logo" && (
                      <Settings 
                        size={24} 
                        className="text-[#2462AA]" 
                        style={{ display: 'none' }}
                      />
                    )}
                    {feature.icon === "expression-library-logo" && (
                      <Code 
                        size={24} 
                        className="text-[#2462AA]" 
                        style={{ display: 'none' }}
                      />
                    )}
                    {feature.icon === "destinations-logo" && (
                      <Target 
                        size={24} 
                        className="text-[#2462AA]" 
                        style={{ display: 'none' }}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2462AA] to-[#4D83C1] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Data Pipeline?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using Reactor Data to power their analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2462AA] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#2462AA] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;

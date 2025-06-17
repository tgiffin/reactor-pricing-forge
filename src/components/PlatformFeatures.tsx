
import React from "react";
import FeatureCard from "./platform-features/FeatureCard";
import CallToActionSection from "./platform-features/CallToActionSection";
import { features } from "./platform-features/featuresData";

const PlatformFeatures = () => {
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
          {features.slice(0, 9).map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
        
        {/* Center the last card */}
        <div className="flex justify-center mt-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <FeatureCard feature={features[9]} />
          </div>
        </div>
        
        <CallToActionSection />
      </div>
    </section>
  );
};

export default PlatformFeatures;

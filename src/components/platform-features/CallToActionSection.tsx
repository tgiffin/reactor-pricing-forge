
import React from "react";

const CallToActionSection = () => {
  return (
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
          <a 
            href="https://reactordata.com/get-reactor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-[#2462AA] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block"
          >
            Schedule Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;

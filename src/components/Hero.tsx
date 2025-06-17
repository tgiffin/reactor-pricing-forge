import { ArrowRight } from "lucide-react";

const ReactorLogo = () => (
  <div className="flex items-center justify-center mb-8">
    <div className="flex items-center gap-4">
      {/* Reactor logo - recreating the design from style guide */}
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Central yellow circle */}
        <div className="absolute w-6 h-6 bg-[#FFCC00] rounded-full z-20"></div>
        
        {/* Orange outer circles positioned correctly */}
        {/* Top circle */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Top-right circle */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Right circle */}
        <div className="absolute top-1/2 right-1 transform -translate-y-1/2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Bottom-right circle */}
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Bottom circle */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Bottom-left circle */}
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Left circle */}
        <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Top-left circle */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-[#E87B00] rounded-full z-10"></div>
        
        {/* Connecting lines from center to outer circles */}
        {/* Top line */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-[#E87B00] z-0"></div>
        
        {/* Top-right line */}
        <div className="absolute top-4 right-4 w-3 h-0.5 bg-[#E87B00] transform rotate-45 origin-left z-0"></div>
        
        {/* Right line */}
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-3 h-0.5 bg-[#E87B00] z-0"></div>
        
        {/* Bottom-right line */}
        <div className="absolute bottom-4 right-4 w-3 h-0.5 bg-[#E87B00] transform -rotate-45 origin-left z-0"></div>
        
        {/* Bottom line */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-[#E87B00] z-0"></div>
        
        {/* Bottom-left line */}
        <div className="absolute bottom-4 left-4 w-3 h-0.5 bg-[#E87B00] transform rotate-45 origin-left z-0"></div>
        
        {/* Left line */}
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-3 h-0.5 bg-[#E87B00] z-0"></div>
        
        {/* Top-left line */}
        <div className="absolute top-4 left-4 w-3 h-0.5 bg-[#E87B00] transform -rotate-45 origin-left z-0"></div>
      </div>
      <h2 className="text-2xl font-bold text-[#2C3E50] ml-2">REACTOR</h2>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 lg:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <ReactorLogo />
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Simple, Transparent Pricing
          <span className="block text-[#2462AA]">Built to Scale With You</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Pay for what you use, not for what you don't. 
          <span className="block mt-2">Start with two free Data sources.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#2462AA] hover:bg-[#1a4d88] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
            Get Started Free <ArrowRight size={20} />
          </button>
          <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-slate-50">
            View Demo
          </button>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFCC00] opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#2462AA] opacity-20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;

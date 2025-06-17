
import { ArrowRight } from "lucide-react";

const ReactorLogo = () => (
  <div className="flex items-center justify-center mb-8">
    <div className="flex items-center gap-4">
      {/* Using one of the uploaded logo images */}
      <img 
        src="/lovable-uploads/dd574295-68a9-439a-8926-7f98c8b1c234.png" 
        alt="Reactor Logo" 
        className="w-16 h-16 object-contain"
        onError={(e) => {
          console.log('Logo failed to load:', e.currentTarget.src);
          // Fallback to another uploaded image
          e.currentTarget.src = "/lovable-uploads/4c8b5d92-5e6a-4f7b-9c3d-2a1b8e7f6d5c.png";
        }}
      />
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
          <a 
            href="https://reactordata.com/get-reactor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-slate-50 inline-block"
          >
            View Demo
          </a>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFCC00] opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#2462AA] opacity-20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;

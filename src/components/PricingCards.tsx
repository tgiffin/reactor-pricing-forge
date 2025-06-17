
import { Check, ArrowRight, Star } from "lucide-react";

const PricingCards = () => {
  const pricingTiers = [
    {
      name: "Core",
      price: "$2,000",
      period: "/month",
      description: "Zero to 30 million processed rows per month",
      features: [
        "Includes 2 free vendor data sources",
        "Additional vendor sources: $99/month each",
        "Any supported Destination (S3, Databricks S3/Autoloader, Snowflake w/Snowpipe streaming, Big Query or GCS)"
      ],
      cta: "Get Started",
      ctaStyle: "bg-[#2462AA] hover:bg-[#1a4d88] text-white",
      popular: false
    },
    {
      name: "Pro",
      price: "$4,000",
      period: "/month",
      description: "30 to 75 million processed rows per month",
      features: [
        "Includes 2 free vendor data sources",
        "Additional vendor sources: $99/month each",
        "Any supported Destination (S3, Databricks S3/Autoloader, Snowflake w/Snowpipe streaming, Big Query or GCS)"
      ],
      cta: "Talk to Sales",
      ctaStyle: "bg-slate-900 hover:bg-slate-800 text-white",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations processing over 75 million monthly rows",
      features: [
        "Includes 2 free vendor data sources",
        "Additional vendor sources: $99/month each",
        "Any supported Destination (S3, Databricks S3/Autoloader, Snowflake w/Snowpipe streaming, Big Query or GCS)",
        "Custom SLAs, support, and scaling"
      ],
      cta: "Request Demo",
      ctaStyle: "bg-[#E87B00] hover:bg-[#d16900] text-white",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Flexible pricing that grows with your data processing needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-2 ${
                tier.popular 
                  ? 'border-[#2462AA] ring-4 ring-[#2462AA]/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#2462AA] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-600 text-lg">{tier.period}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{tier.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${tier.ctaStyle}`}>
                {tier.cta}
                <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600">
            All plans include our comprehensive data integration platform. 
            <span className="block mt-2">Need a custom solution? <a href="#" className="text-[#2462AA] hover:text-[#1a4d88] font-semibold">Contact our sales team</a></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;

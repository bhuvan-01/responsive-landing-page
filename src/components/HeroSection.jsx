import Image from "next/image";

const HeroSection = () => (
  <section className="bg-blue-50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-blue-900">Essential Vitamins</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600">Online Medical Supplies</p>
          <h2 className="text-4xl font-bold text-blue-900">
            Get Your Vitamins & Minerals
          </h2>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore
          </button>
        </div>

        {/* Center Content (Product Image) */}
        <div className="relative flex justify-center">
          <div className="relative">
            <Image
              src="/assets/f2-1.png" // Replace with your actual image path
              alt="Probiotics Bottle"
              width={300}
              height={300}
            />
            <div className="absolute bg-yellow-200 w-72 h-72 rounded-full -z-10 -top-10 left-10"></div>
          </div>
        </div>

        {/* Right Content (Features List) */}
        <div className="space-y-6">
          {[
            {
              icon: "/assets/icon-vitamins.png",
              title: "Vitamins",
              description: "Increased Vitamins and minerals in your diet",
            },
            {
              icon: "/assets/icon-weightloss.png",
              title: "Weight Loss",
              description: "Find scientifically proven solutions",
            },
            {
              icon: "/assets/icon-functional-foods.png",
              title: "Functional Foods",
              description: "From protein powders to baby formula",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center shadow-md">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className=" py-12 mt-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="rounded-[80px] bg-[#17414F] p-12 shadow-lg" style={{ width: '1464px', height: '586px', maxWidth: '100%' }}> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white" style={{ height: '100%' }}> 
          {[
            {
              icon: "/assets/icon-clinic.png",
              title: "Clinically Studied",
              description: "All products that we offer have undergone lab and safety tests.",
            },
            {
              icon: "/assets/icon-veg.png",
              title: "Vegetarian Friendly",
              description: "We have a wide selection of vegetarian products to meet your needs.",
            },
            {
              icon: "/assets/icon-india.png",
              title: "Made In India",
              description: "Shop local and explore health products made right here in India.",
            },
            {
              icon: "/assets/icon-ship.png",
              title: "Free Shipping",
              description: "We deliver to your door with no shipping costs on your orders.",
            },
            {
              icon: "/assets/icon-risk.png",
              title: "No Risk",
              description: "We ensure that all products are safe and within their use-by date.",
            },
            {
              icon: "/assets/icon-gmo.png",
              title: "GMO Free",
              description: "Natural, no modified products and derivatives for those who need it.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 flex flex-col items-center text-center backdrop-blur-md  h-full" 
            >
              <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center mb-4 ">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="text-lg font-bold">{feature.title}</h4>
              <p className="text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    

  </section>
);

export default HeroSection;

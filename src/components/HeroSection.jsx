import Image from "next/image";

const HeroSection = () => (
  <section className="bg-blue-50 py-8 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-8xl font-bold text-blue-900">Essential Vitamins</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 sm:gap-12">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-gray-600">Online Medical Supplies</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900">
            Get Your Vitamins & Minerals
          </h2>
          <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore
          </button>
        </div>

        {/* Center Image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <Image
              src="/assets/f2-1.png"
              alt="Probiotics Bottle"
              layout="responsive"
              width={300}
              height={300}
            />
            <div className="absolute bg-yellow-200 w-48 h-48 sm:w-72 sm:h-72 rounded-full -z-10 -top-4 sm:-top-10 left-4 sm:left-10"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {[
            {
              icon: "/assets/vitamin.png",
              title: "Vitamins",
              description: "Increased Vitamins and minerals in your diet",
            },
            {
              icon: "/assets/weight-loss.png",
              title: "Weight Loss",
              description: "Find scientifically proven solutions",
            },
            {
              icon: "/assets/functional-foods.png",
              title: "Functional Foods",
              description: "From protein powders to baby formula",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex justify-center items-center shadow-md">
                <Image src={item.icon} alt={item.title} width={28} height={28} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-8 sm:py-12 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="rounded-[40px] sm:rounded-[80px] bg-[#17414F] p-6 sm:p-12 shadow-lg"
          style={{ width: "100%", maxWidth: "1464px", height: "auto" }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 text-white"
            style={{ overflow: "hidden" }}
          >
            {[
              {
                icon: "/assets/experiment.png",
                title: "Clinically Studied",
                description: "All products that we offer have undergone lab and safety tests.",
              },
              {
                icon: "/assets/leaves.png",
                title: "Vegetarian Friendly",
                description: "We have a wide selection of vegetarian products to meet your needs.",
              },
              {
                icon: "/assets/india.png",
                title: "Made In India",
                description: "Shop local and explore health products made right here in India.",
              },
              {
                icon: "/assets/grocery-store.png",
                title: "Free Shipping",
                description: "We deliver to your door with no shipping costs on your orders.",
              },
              {
                icon: "/assets/risk-management.png",
                title: "No Risk",
                description: "We ensure that all products are safe and within their use-by date.",
              },
              {
                icon: "/assets/leaves.png",
                title: "GMO Free",
                description: "Natural, no modified products and derivatives for those who need it.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl p-4 sm:p-6 flex flex-col items-center text-center backdrop-blur-md"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex justify-center items-center mb-4">
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <h4 className="text-sm sm:text-lg font-bold">{feature.title}</h4>
                <p className="text-xs sm:text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

import Image from "next/image";

const ingredients = [
  {
    id: 1,
    name: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    imagePath: "/assets/h2-b1.png", 
  },
  {
    id: 2,
    name: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    imagePath: "/assets/bn2-2.png", 
  },
  {
    id: 3,
    name: "Magnesium",
    description: "Boost energy and support muscle function",
    imagePath: "/assets/bn2-3.png", 
  },
  {
    id: 4,
    name: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    imagePath: "/assets/bn2-4.png", 
  },
  {
    id: 5,
    name: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    imagePath: "/assets/bn2-5.png", 
  },
];

const IngredientsSection = () => (
  <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-6">
     
      <div className="mb-8 text-center">
        <h3 className="text-lg font-semibold text-blue-700 uppercase">Ingredients</h3>
        <h2 className="text-3xl font-bold text-gray-800">Better Ingredients</h2>
        <p className="mt-2 text-gray-600">
          Only the best when you choose products offered on our platform – high-quality ingredients for high-quality products!
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="relative w-full h-72 bg-blue-50 rounded-lg  overflow-hidden"
          >
           
            <Image
              src={ingredient.imagePath}
              alt={ingredient.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
           
            <div className="absolute inset-0 "></div>
            
            <div className="absolute top-4 left-4">
              <h3 className="text-lg font-bold text-black">{ingredient.name}</h3>
              <p className="text-sm text-black">{ingredient.description}</p>
            </div>
            <a
              href="#"
              className="absolute bottom-4 left-4 text-blue-700 text-sm font-bold underline hover:text-blue-600"
            >
              See More
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;

import Image from "next/image";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "The Covid-19 Epidemic in 2022 Is Back",
      date: "20 APR",
      image: "/assets/blog1.png", // Replace with actual image paths
    },
    {
      id: 2,
      title: "The Covid-19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/assets/blog1.png", // Replace with actual image paths
    },
    {
      id: 3,
      title: "Hac hendrerit mus nons semper suspendisse",
      date: "17 MAR",
      image: "/assets/blog1.png", // Replace with actual image paths
    },
    {
      id: 4,
      title: "The Covid-19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/assets/blog1.png", // Replace with actual image paths
    },
    {
      id: 5,
      title: "The Covid-19 Epidemic in 2022 Is Back",
      date: "20 APR",
      image: "/assets/blog2.png", // Replace with actual image paths
    },
    {
      id: 6,
      title: "The Covid-19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/assets/blog2.png", // Replace with actual image paths
    },
    {
      id: 6,
      title: "The Covid-19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/assets/blog2.png", // Replace with actual image paths
    },
    {
      id: 6,
      title: "The Covid-19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/assets/blog2.png", // Replace with actual image paths
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-4">Our Blog</h2>
        <h2 className="text-3xl text-black font-bold text-center mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-lg shadow-lg ${
                idx === 2 ? "md:row-span-1" : ""
              }`}
            >
              {/* Blog Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              {/* Blog Details */}
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-blue-500 text-xs px-2 py-1 rounded">{blog.date}</span>
                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

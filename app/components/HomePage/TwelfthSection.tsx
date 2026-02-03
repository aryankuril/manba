import Image from "next/image";

const products = [
  {
    title: "Two wheeler Loan",
    image: "/images/related-1.png",
  },
  {
    title: "Pre-Owned Two Wheeler Loan",
    image: "/images/related-2.png",
  },
  {
    title: "EV Three Wheeler Loan",
    image: "/images/related-3.png",
  },
];

export default function TwelfthSection() {
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
      <div className=" mx-auto ">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold mb-12">
          <span className="text-[#1f4d6b]">Related</span>{" "}
          <span className="text-[#f5a623]">Products</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-[#f6f6f6] rounded-2xl overflow-hidden p-5"
            >
              {/* Image */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-gray-800 mb-4">
                  {item.title}
                </h5>

                {/* Full width button */}
                <button className="w-full bg-[#1f4d6b] text-white py-3 rounded-lg hover:bg-[#173a52] transition">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import TextAnimation from "./../TextAnimation";
import Button from "../Button";

const products = [
  {
    title: "Two Wheeler Loan",
    image: "/images/related-2.png",
    link: "https://www.manbafinance.com/two-wheeler-loan/",
  },
  {
    title: "Pre-Owned Two Wheeler Loan",
    image: "/images/related-3.png",
    link: "https://www.manbafinance.com/used-two-wheeler-loan/",
  },
  {
    title: "EV Three Wheeler Loan",
    image: "/images/related-1.png",
    link: "https://www.manbafinance.com/ev-three-wheeler/",
  },
];

export default function TwelfthSection() {
  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20">
      <div className="mx-auto">
        {/* Heading */}
        <TextAnimation>
          <h2 className="text-center text-black font-semibold mb-10">
            Related Products
          </h2>
        </TextAnimation>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-[#f6f6f6] rounded-corners overflow-hidden p-5"
            >
              {/* Image */}
              <div className="relative w-full h-56 rounded-corners overflow-hidden">
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

                {/* Button with unique link */}
                <Button
                  text="Explore More"
                  href={item.link}
                  className="bg-[#205073] text-white w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

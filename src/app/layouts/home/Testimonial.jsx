

import Image from "next/image";


const testimonials = [
  {
    id: 1,
    name: "Ronald Richards",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
  },
  {
    id: 2,
    name: "Wade Warren",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    rating: 4,
  },
  {
    id: 3,
    name: "Jacob Jones",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    rating: 4,
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md duration-300">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-14 h-14">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <h3 className="text-[22px] font-bold text-[#1E1B4B]">
          {item.name}
        </h3>
      </div>

      
      <p className="text-gray-500 leading-7 mb-8">
        {item.review}
      </p>

      
      
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-xl ${
              index < item.rating
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#EEF4FF] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1E1B4B]">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-4">
            Trusted by many happy customers
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
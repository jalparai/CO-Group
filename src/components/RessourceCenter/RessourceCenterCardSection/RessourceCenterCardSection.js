import { motion } from "framer-motion";
import Frame1000002189 from "../../../assets/RessourceCenter/RessourceCenterCardSection/Frame1000002189.png";
import { apiclient } from "../../../apiConfig/apiConfig";
import { useEffect, useState } from "react";


const RessourceCenterCardSection = ({data}) => {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    if (data?.cardSection?.cards) {
      // Update cards when data becomes available
      setCards([
        {
          category: data?.cardSection?.cards[0]?.title || "Blog",
          title: data?.cardSection?.cards[0]?.description || "Latest blog posts",
          link: "/blog",
          image: data?.cardSection?.cards[0]?.image || Frame1000002189, // Use imported fallback image
        },
        {
          category: data?.cardSection?.cards[1]?.title || "Guides",
          title: data?.cardSection?.cards[1]?.description || "Helpful guides",
          link: "/guides",
          image: data?.cardSection?.cards[1]?.image || Frame1000002189,
        },
        {
          category: data?.cardSection?.cards[2]?.title || "Podcasts",
          title: data?.cardSection?.cards[2]?.description || "Our podcasts",
          link: "/podcasts",
          image: data?.cardSection?.cards[2]?.image || Frame1000002189,
        },
      ]);
    }
  }, [data]);


  return (
    <section className="my-[32px]">
      <div className="max-w-[1372px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative bg-white h-[427px] rounded-[30px] overflow-hidden shadow-lg group cursor-pointer"
              style={{
                backgroundImage: `url(${encodeURI(card.image)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }} // Smooth hover effect
            >
              {/* Dark overlay with smooth transition */}
              <motion.div
                className="absolute inset-0 rounded-[30px] bg-black bg-opacity-50 group-hover:bg-opacity-80 transition-opacity duration-500"
              ></motion.div>

              {/* Text content (Smooth Hover Appearance) */}
              <motion.div
                className="relative font-Montserrat p-6 flex flex-col justify-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
              >
                <span className="text-[20px] font-light text-white uppercase">
                  {card.category}
                </span>
                <h3 className="text-[30px] font-bold text-white my-[20px]">
                  {card.title}
                </h3>
                <motion.a
                  href={card}
                  className="inline-flex text-[18px] font-bold text-white border border-white rounded-[24px] py-[10px] px-[23px] hover:bg-white hover:text-black transition-colors duration-300"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Button scale effect on hover
                >
                  Read More
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RessourceCenterCardSection;

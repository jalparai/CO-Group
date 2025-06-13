import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";

import CourierDeliveryService from "../../../../assets/ShippingOptionsIcons/CourierDeliveryService.svg";
import PostalDeliveryService from "../../../../assets/ShippingOptionsIcons/PostalDeliveryService.svg";
import CODService from "../../../../assets/ShippingOptionsIcons/CODService.svg";
import ParcelTerminals from "../../../../assets/ShippingOptionsIcons/ParcelTerminals.svg";


const shippingOptions = [
  {
    icon: CourierDeliveryService,
    title: "Courier Delivery Service",
    description:
      "Rely on us for prompt courier delivery service, ensuring timely shipment arrival to their designated destinations.",
  },
  {
    icon: PostalDeliveryService,
    title: "Postal Delivery Service",
    description:
      "Deliver packages through postal services with reliable and cost-effective solutions.",
  },
  {
    icon: CODService,
    title: "COD (Cash on Delivery) Service",
    description:
      "Allow recipients to pay the delivery courier upon receiving the package, enhancing convenience for your customers.",
  },
  {
    icon: ParcelTerminals,
    title: "Parcel Terminals",
    description:
      "Offer a convenient and efficient solution for sending parcels and express shipments.",
  },
];

const ShippingOptions = ({data}) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [Options, setOptions] = useState(data?.cardSection?.cards||shippingOptions);

  useEffect(() => {
    const fetchData = async () => {
      if (data?.cardSection?.cards) {
        setOptions(data.cardSection.cards);
      }
      else {
        setOptions(shippingOptions);
      }
    };
    fetchData();
  }, [data]);

  // Framer Motion Variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className="relative lg:w-[95%]  flex mb-[40px] flex-col items-center mx-auto lg:mb-[58px] w-full 
    space-x-0   huge:w-[100%] px-[16px] md:px-[26px] py-[30px] huge:px-[113px] huge:py-[50px] lg:px-[42.5px] lg:py-[54.5px]
    "
    >
      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[350px] lg:blur-[350px] -z-10 h-fit"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
        //   backgroundBlendMode: "overlay",
        // }}
      ></div>

      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center mb-[18px]"
      >
        <div className="text-[#E61D2D] text-[20px] font-medium font-Montserrat tracking-[0.3em]">
          SHIPPING PROCESS
        </div>
      </motion.div> */}

      {/* SHIPPING OPTIONS Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="text-center lg:text-left lg:ml-[183px] w-full max-w-screen-lg"
      >
        <div className="flex justify-center lg:justify-start mb-[18px]">
          <div className="text-[#E61D2D] text-[20px] font-medium font-Montserrat tracking-[0.3em]">
           {data?.title || "SHIPPING OPTIONS"}
          </div>
        </div>
        <h1 className="whitespace-pre-line text-[22px] lg:text-[50px] mb-[40px] font-Montserrat font-bold leading-[1.2]">
          {data?.cardSection?.heading ||
          <>
          Our Delivery Options for
          <br />
          E-commerce Sellers
          </>
}
        </h1>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full max-w-screen-lg"
      >
      <Swiper
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    // when viewport ≥ 640px
    640: {
      slidesPerView: 1,
    },
    // when viewport ≥ 768px (tablet)
    768: {
      slidesPerView: 2,
    },
    // when viewport ≥ 1024px (small desktop)
    1024: {
      slidesPerView: 3,
    },
    // when viewport ≥ 1280px (large desktop)
    1280: {
      slidesPerView: 3,
    },
  }}
  navigation={false}
  pagination={{ clickable: true }}
  modules={[Navigation]}
  className="mySwiper"
>
  {Options.map((option, index) => (
    <SwiperSlide key={index}>
      <motion.div
        variants={cardVariants}
        className="group flex flex-col justify-center items-center bg-[#FFFFFF]/5 border border-transparent rounded-[24px] min-h-[auto] w-auto lg:min-h-[480px] h-full p-4 m-2 transition-colors duration-500
                   hover:bg-[#338AF3]/10 hover:border-[#338AF3] justify-between"
      >
        <img
          src={option.image || option.icon}
          alt={option.title}
          className="my-[24px] bg-[#3D3D3D]/50 rounded-[20px] p-4 transition-colors duration-300
                     group-hover:bg-[#0A2A47] group-hover:border group-hover:border-[#319AE6] lg:w-[90px] lg:h-[90px] w-[70px] h-[70px]"
        />
        <h3 className="lg:text-[36px] text-[24px] font-Montserrat text-center font-bold">
          {option.title}
        </h3>
        <p className="text-center text-[18px] lg:text-[24px] font-light font-Montserrat text-[#8A8A8A] my-[24px] max-w-[300px] mx-auto">
          {option.description}
        </p>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

      </motion.div>
    </div>
  );
};

export default ShippingOptions;

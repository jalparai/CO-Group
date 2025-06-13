import { motion } from "framer-motion";
import SecureStorage from "../../../../assets/WarehousingAndFulfillmentDescreptionItems/SecureStorage.png";
import InventoryManagement from "../../../../assets/WarehousingAndFulfillmentDescreptionItems/InventoryManagement.png";
import OrderFulfillment from "../../../../assets/WarehousingAndFulfillmentDescreptionItems/OrderFulfillment.png";
import { useEffect } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WarehousingAndFulfillmentDescreption = ({data}) => {


  useEffect(() => {
  }, [data]);

  return (
    <div className="relative flex flex-col items-center mt-[69px] px-4 lg:px-0">
      <div className="flex justify-center mb-[14px] sm:mb-5 lg:mb-[16px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="whitespace-pre-line text-[#E61D2D] text-[11.5px] sm:text-sm lg:text-[20px] font-medium font-Montserrat gap-2 inline-flex items-center tracking-[0.3em]"
        >
          {data?.title ? data.title :"WAREHOUSING PROCESS"}
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
        className="relative text-center mb-[81px] sm:mb-5 lg:mb-[91px]"
      >
        <h1 className="whitespace-pre-line text-[28px] sm:text-2xl lg:text-[50px] font-Montserrat font-bold leading-tight sm:leading-normal lg:leading-[60px]">
          {data?.cardSection?.heading? data.cardSection?.heading : "Our Warehousing & Fulfillment Process"}
        </h1>
      </motion.div>
      <div className="max-w-[1232px] w-full mx-auto grid gap-10 md:gap-16">
        {/* {
          data?.cardSection?.cards.map((card => {
            <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <img
            src={card?.image || SecureStorage}
            alt="Secure Storage"
            className="border border-[#5F5A5A] rounded-[19.2px] lg:rounded-[30px] w-full md:w-1/2 max-w-sm md:max-w-none"
          />
          <div className="mt-4 md:mt-0 px-[9.6px] text-left">
            <h3 className="text-[17px] sm:text-[30px] font-Montserrat font-semibold mb-[15px] lg:mb-[40px]">
             {card?.title || "Secure Storage"}
            </h3>
            <p className="text-gray-600 text-[13px] sm:text-base md:text-[19px] font-Montserrat font-normal max-w-full md:max-w-[595px] mx-auto md:mx-0">
              {card.description || "Your goods are stored in our warehouses, strategically positioned"+
              "to enhance delivery efficiency and reduce costs. Our extensive"+
              "network of storage facilities provides ample space for ongoing"+
              "storage of goods awaiting shipment, as well as dedicated areas for"+
              "packing and preparation prior to shipping."}
            </p>
          </div>
        </motion.div>
          }))
        } */}
        {/* Card 1: Secure Storage */}
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <img
            src={data?.cardSection?.cards[0].image || SecureStorage}
            alt="Secure Storage"
            className="border border-[#5F5A5A] rounded-[19.2px] lg:rounded-[30px] w-full md:w-1/2 max-w-sm md:max-w-none"
          />
          <div className="mt-4 md:mt-0 px-[9.6px] text-left">
            <h3 className="text-[17px] sm:text-[30px] font-Montserrat font-semibold mb-[15px] lg:mb-[40px]">
              {data?.cardSection?.cards[0].title ? data?.cardSection?.cards[0].title : "Secure Storage"}
            </h3>
            <p className="text-gray-600 text-[13px] sm:text-base md:text-[19px] font-Montserrat font-normal max-w-full md:max-w-[595px] mx-auto md:mx-0">
              {data?.cardSection?.cards[0].description || "Your goods are stored in our warehouses, strategically positioned"+
              "to enhance delivery efficiency and reduce costs. Our extensive"+
              "network of storage facilities provides ample space for ongoing"+
              "storage of goods awaiting shipment, as well as dedicated areas for"+
              "packing and preparation prior to shipping."}
            </p>
          </div>
        </motion.div>

        {/* Card 2: Inventory Management */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <div className="order-2 md:order-1 px-[9.6px] mt-4 md:mt-0 text-left">
            <h3 className="text-[17px] sm:text-[30px] font-Montserrat font-semibold mb-[15px] lg:mb-[40px]">
            {data?.cardSection?.cards[1].title ? data?.cardSection?.cards[1].title :"Inventory Management"}
            </h3>
            <p className="text-gray-600 text-[13px] sm:text-base md:text-[19px] font-Montserrat font-normal max-w-full md:max-w-[595px] mx-auto md:mx-0">
              {data?.cardSection?.cards[1].description || "We prioritize the security of your goods above all else. To"+
              "safeguard them against damage, we store your products on shelves"+
              "or pallets, making them easily accessible for order preparation."+
              "Furthermore, our warehouses are outfitted with state-of-the-art"+
              "security systems that adhere to industry standards, ensuring that"+
              "all potential risks are minimized."}
            </p>
          </div>
          <img
            src={data?.cardSection?.cards[1].image || InventoryManagement}
            alt="Inventory Management"
            className="w-full md:w-1/2 max-w-sm md:max-w-none border border-[#5F5A5A] rounded-[19.2px] lg:rounded-[30px] order-1 md:order-2"
          />
        </motion.div>

        {/* Card 3: Order Fulfillment */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <img
            src={data?.cardSection?.cards[2].image || OrderFulfillment}
            alt="Order Fulfillment"
            className="w-full md:w-1/2 border border-[#5F5A5A] rounded-[19.2px] lg:rounded-[30px] max-w-sm md:max-w-none"
          />
          <div className="mt-4 md:mt-0 text-left px-[9.6px]">
            <h3 className="text-[17px] sm:text-[30px] font-Montserrat font-semibold mb-[15px] lg:mb-[40px]">
            {data?.cardSection?.cards[2].title ? data?.cardSection?.cards[2].title :"Order Fulfillment"}
            </h3>
            <p className="text-gray-600 text-[13px] sm:text-base md:text-[19px] font-Montserrat font-normal max-w-full md:max-w-[595px] mx-auto md:mx-0">
              {data?.cardSection?.cards[2].description || "We oversee the handling of both incoming and outgoing goods for"+
              "your inventory. Upon receiving your shipment, items are carefully"+
              "shelved and organized by reference for easy retrieval. Regular"+
              "stock counts are conducted to accurately determine your inventory"+
              "levels, with updates recorded on a dedicated sheet each time goods"+
              "are received or dispatched."}
            </p>
          </div>
        </motion.div> 
      </div>
    </div>
  );
};

export default WarehousingAndFulfillmentDescreption;

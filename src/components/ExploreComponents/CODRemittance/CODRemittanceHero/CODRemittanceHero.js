import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Sourcing from "../../../../assets/CODRemittanceHeroImg/Sourcing.png";
import ticketCheck from "../../../../assets/CODRemittanceHeroImg/ticket-check.svg";
import ticketX from "../../../../assets/CODRemittanceHeroImg/ticket-x.svg";
import ticket from "../../../../assets/CODRemittanceHeroImg/ticket.svg";
import Solution from "../../../../assets/CODRemittanceHeroImg/Solution.svg";
import { IoIosArrowUp } from "react-icons/io";
import { useInView } from "framer-motion";
import Bg from "../../../../assets/Dashboard/sphear-4.svg"
const CODRemittanceHero = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30% 0px" });

  return (
    <div className="relative flex flex-col items-center lg:mt-[140px] px-4">
            <img src={Bg} className="absolute w-[100%] top-[-131px] lg:top-[-731px]"/>

      <div
        className="absolute inset-0 bg-black/80 blur-[200px] md:blur-[250px] lg:blur-[200px] -z-10"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(90deg, #D9D9D9 0%, #297FFF 10%, #BF38FF 22%, #CF68FF 52%, #28C8FF 74%, #E1A1FF 100%)",
        //   backgroundBlendMode: "overlay",
        // }}
      ></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center">
        <motion.div
          className="relative flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-[1496px] px-4 py-6 lg:px-[42.5px] lg:py-[54.5px] rounded-[30px]"
          ref={ref}
          initial={{ opacity: 0, y: "50%" }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex-1 flex justify-center lg:justify-start">
            <div>
              <motion.div
                initial={{
                  background: "linear-gradient(to right, #53ACFF, #282E6A)",
                }}
                animate={{
                  background: isHovered
                    ? "linear-gradient(to right, #282E6A, #53ACFF)"
                    : "linear-gradient(to right, #53ACFF, #282E6A)",
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="rounded-full inline-flex items-center justify-center mt-4 lg:mt-8"
              >
                <button
                  className="text-white text-[10.8px] lg:text-[16px] font-medium font-Montserrat rounded-[30px] lg:px-[15px] lg:py-[15px] px-[15px] py-[15px] flex justify-center items-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="button"
                >
                  <img
                    src={Solution}
                    alt="Solution"
                    className="w-[18.15px] h-[19px] lg:w-[28.15px] lg:h-[30px]"
                  />
                  {data?.title ? data?.title : "Solutions / Cash On Delivery"}
                </button>
              </motion.div>
              <h1 className="mt-6 lg:mt-12 mb-4 lg:mb-8 text-[24px] lg:text-[50px] font-Montserrat font-bold leading-tight lg:leading-[60px] text-left dark:text-white">
              {data?.generalSection?.heading ? data?.generalSection?.heading 
              :<>Effortless COD
                <br />
                <span className="text-[#979797]">Payment Processing</span></>
              }
              </h1>
              <p className="w-full lg:w-[577px] mb-6 md:mb-[28px] lg:mb-[34px] text-[12px] lg:text-[18px] font-normal font-Montserrat leading-[19.2px] lg:leading-[30px] text-[#5D5D5D] text-left">
                {data?.generalSection?.description ? data?.generalSection?.description : "COD Power Group offers a seamless COD remittance service to"+
                "simplify your cash flow management. With our secure and"+
                "efficient platform, you can easily track and manage your COD"+
                "payments, ensuring that you receive your funds quickly and"+
                "securely."}
              </p>
              <a
                href="https://get-started.codpowergroup.com/registration"
                target="blank"
                className="text-[16px] lg:text-[25px] font-Montserrat font-bold text-[#0587FF]"
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center lg:justify-end mt-[36px] lg:mt-0">
            <img
              src={data?.generalSection?.image || Sourcing}
              alt="worker"
              className="w-[280px] lg:w-[540px] object-cover rounded-lg"
            />
            <div className="absolute -top-4 -right-4 lg:-right-10 bg-[#005FFF] rounded-[20px] lg:rounded-[40.32px] px-4 lg:px-[28px] py-3 lg:py-[22px]">
              <div className="flex items-center font-Montserrat text-[15px] lg:text-[26.88px] font-light text-white mb-3 lg:mb-[10px]">
                Status <IoIosArrowUp className="ml-3 lg:ml-[30.64px]" />
              </div>
              <button className="flex items-center my-1 lg:my-[7px] opacity-50 hover:opacity-100">
                <img
                  src={ticket}
                  alt="ticket"
                  className="mr-2 lg:mr-[6px] w-[22px] lg:w-full"
                />{" "}
                <p className="font-Montserrat text-[15px] lg:text-[26.88px] font-light text-white">
                  All
                </p>
              </button>
              <button className="flex items-center my-1 lg:my-[7px] opacity-50 hover:opacity-100">
                <img
                  src={ticketX}
                  alt="ticketX"
                  className="mr-2 lg:mr-[6px] w-[22px] lg:w-full"
                />{" "}
                <p className="font-Montserrat text-[15px] lg:text-[26.88px] font-light text-white">
                  Paid
                </p>
              </button>
              <button className="flex items-center my-1 lg:my-[7px] opacity-50 hover:opacity-100">
                <img
                  src={ticketCheck}
                  alt="ticketCheck"
                  className="mr-2 lg:mr-[6px] w-[22px] lg:w-full"
                />{" "}
                <p className="font-Montserrat text-[15px] lg:text-[26.88px] font-light text-white">
                  Unpaid
                </p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CODRemittanceHero;

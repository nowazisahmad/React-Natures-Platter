import daawatLogo from "../assets/dawat-logo.png";
import indiaGateLogo from "../assets/Group 9181.png";
import offerOne from "../assets/offers-1.png";
import offerTwo from "../assets/offers-2.png";

const ArrivalOffers = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-22.5">
      <div className="mx-auto w-[86%] max-w-275">
        <h2 className="mb-10 text-[28px] font-bold text-[#239B2A] sm:text-[32px]">
          Arrival & Offers
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.55fr_1fr]">
          <div
            className="
              relative
              h-71.25
              overflow-hidden
              rounded-[18px]
              bg-[#0C5D14]
              px-8
              py-8
              sm:h-72.5
              lg:h-71.25
            "
          >
            <img
              src={daawatLogo}
              alt="Daawat"
              className="
                absolute
                left-10
                top-8
                z-10
                w-36.25
                object-contain
                sm:w-40
              "
            />
            <div
              className="
                absolute
                left-8
                top-32.5
                flex
                h-13.5
                w-70
                items-center
                justify-center
                rounded-xl
                bg-[#67BD6F]
                sm:w-75
              "
            >
              <p className="text-[19px] tracking-[2px] text-white">
                Cook Exotic Dishes
              </p>
            </div>
            <p
              className="
                absolute
                bottom-9
                left-8
                z-10
                text-[25px]
                font-light
                text-white
                sm:text-[27px]
              "
            >
              UP to{" "}
              <span className="font-bold">
                20% OFF
              </span>
            </p>
            <img
              src={offerOne}
              alt="Daawat Rice"
              className="
                absolute
                -right-1.25
                top-6.25
                h-62.5
                w-77.5
                object-contain
                sm:-right-2.5
                sm:w-85
              "
            />
          </div>
          <div
            className="
              relative
              h-71.25
              overflow-hidden
              rounded-[18px]
              bg-[#193578]
              px-6
              py-7
              sm:h-72.25
              lg:h-71.25
            "
          >
            <img
              src={indiaGateLogo}
              alt="India Gate"
              className="
                absolute
                left-7
                top-5
                z-10
                w-23.75
                object-contain
                sm:w-26.25
              "
            />
            <div
              className="
                absolute
                left-5
                top-34
                flex
                h-13.5
                w-58.75
                items-center
                justify-center
                rounded-xl
                bg-[#3159A7]
                sm:w-62.5
              "
            >
              <p className="text-[18px] tracking-[1.5px] text-white">
                World's No.1 Rice
              </p>
            </div>

            {/* Discount */}
            <p
              className="
                absolute
                bottom-9
                left-6
                z-10
                text-[25px]
                font-light
                text-white
                sm:text-[27px]
              "
            >
              UP to{" "}
              <span className="font-bold">
                40% OFF
              </span>
            </p>
            <img
              src={offerTwo}
              alt="India Gate Rice"
              className="
                absolute
                -right-3.75
                top-8.75
                h-55
                w-47.5
                object-contain
                sm:-right-2.5
                sm:h-58.75
                sm:w-51.25
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArrivalOffers;
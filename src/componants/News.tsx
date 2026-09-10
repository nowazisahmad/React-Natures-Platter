import groceryBasket from "../assets/grocery-basket.png";

const News = () => {
  return (
    <section
      className="bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,#079900_50%,#079900_100%)] px-5 pb-16 pt-16 sm:px-8
       lg:pb-20  lg:pt-20 "
    >
      <div className="mx-auto max-w-[1100px]">
        <div className=" relative mx-auto flex max-w-[760px] flex-col items-center overflow-hidden rounded-[16px] bg-[#F0ECE3] px-6 py-8 sm:px-10 md:min-h-[265px] md:flex-row md:justify-between md:px-12 lg:px-14">
          <div className=" flex w-full justify-center md:w-[45%] md:justify-start">
            <img
              src={groceryBasket}
              alt="Grocery Basket"
              className=" h-[190px] w-auto object-contain sm:h-[210px] md:h-[220px] lg:h-[235px]"
            />
          </div>
          <div className=" mt-6 w-full md:mt-0 md:w-[50%]">
            <h2 className=" text-[30px] font-bold leading-tight text-[#171717] sm:text-[24px]">
              Get Grocery News!
            </h2>
            <p className=" mt-3 max-w-[360px] text-[13px] leading-[18px] text-[#333333]">
              {" "}
              Exclusive training tips, ticks, product deals and more.
            </p>
            <input
              type="email"
              placeholder="Enter email..."
              className=" mt-5 h-[39px] w-full max-w-[275px] rounded-[5px]
              border-none bg-white px-3 text-[14px] text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              className=" mt-4 rounded-[5px] bg-[#079900] px-5 py-2 text-[15px] font-medium text-white transition hover:bg-[#078000]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

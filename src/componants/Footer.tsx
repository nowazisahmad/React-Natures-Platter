import footerLogo from "../assets/footer-logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#079900] text-white">
      <div className="mx-auto max-w-[1100px] px-8 pb-8 sm:px-10 lg:px-14">
        <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <img
              src={footerLogo}
              alt="Nature's Platter"
              className="w-[120px] object-contain sm:w-[135px]"
            />
            <p className=" mt-4 max-w-[280px] text-[14px] leading-[17px] text-white/90">
              {" "}
              Discover a world of treats, toys, and
              <br className="hidden sm:block" /> essentials handpicked for your
              furry <br className="hidden sm:block" /> friends
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-1">
            <a
              href="#"
              className=" w-fit text-[14px] text-blue-500 transition hover:text-black"
            >
              {" "}
              Product
            </a>
            <a
              href="#"
              className=" w-fit text-[14px] text-blue-500 transition hover:text-black"
            >
              {" "}
              Services
            </a>
            <a
              href="#"
              className=" w-fit text-[14px] text-blue-500 transition hover:text-black"
            >
              {" "}
              Contact us
            </a>
          </div>
          <div>
            <h3 className="text-[15px] font-medium">Follow Us</h3>
            <div className="mt-3 flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className=" text-white transition hover:scale-110 hover:text-black"
              >
                <FaFacebookF size={17} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className=" text-white transition hover:scale-110 hover:text-black"
              >
                <FaInstagram size={17} />{" "}
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className=" text-white transition hover:scale-110 hover:text-black"
              >
                <FaLinkedinIn size={17} />{" "}
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className=" text-white transition hover:scale-110 hover:text-black"
              >
                <FaYoutube size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

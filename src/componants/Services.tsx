import React from "react";
import ServiceImage from "../assets/service.png";
import DeliveryImage from '../assets/delivery.png'
import HProductsImage from '../assets/products.png'

const Services = () => {
  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#179800]">Our Services</h2>

      <div className="grid grid-cols-3 gap-4  py-8 ">
        <div className="rounded-md bg-green-200 hover:bg-green-300 hover:scale-103 transition-transform duration-200 shadow-2xl p-4">
          <img  src={ServiceImage} alt="" className="mx-auto bg-white rounded-[50%] p-2.5" />
          <h2 className="text-3xl font-semibold text-center mb-2">
            Services
          </h2>
          <p className="text-center">
            We offer a wide range of services to meet your needs. From fresh
            produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>
        <div className="rounded-md bg-green-200 hover:bg-green-300 hover:scale-103 transition-transform duration-200 shadow-2xl p-4">
          <img src={DeliveryImage} alt="" className="mx-auto bg-white rounded-[50%] p-2.5" />
          <h2 className="text-3xl font-semibold text-center mb-2">
           Fast Delivery
          </h2>
          <p className="text-center">
            We offer a wide range of services to meet your needs. From fresh
            produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>
        <div className="rounded-md bg-green-200 hover:bg-green-300 hover:scale-103 transition-transform duration-200 shadow-2xl p-4">
          <img src={HProductsImage} alt="" className="mx-auto bg-white rounded-[50%] p-2.5" />
          <h2 className="text-3xl font-semibold text-center mb-2">
            Healthy Products
          </h2>
          <p className="text-center">
            We offer a wide range of services to meet your needs. From fresh
            produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
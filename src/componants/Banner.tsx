import BannerImage from '../assets/Hero Section 1.png'

const Banner = () => {
  return (
    <div className="text-center">
      <div className="max-w-2xl mx-auto py-8">
        <h2 className="text-4xl font-bold text-center mb-2">Freshness <span className="text-[#179800]">You Can Count</span> On, Prices You’ll Love!</h2>
        <p className="text-center">
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry staples, we’ve got you covered every day!
        </p>
      </div>
       <img src={BannerImage} alt="Banner" className="mx-auto max-w-200" />
    </div>
  );
};

export default Banner;

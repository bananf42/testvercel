import banner from "../../assets/images/mobile-mockup-ad.png";

const Advertisement = () => {
  return (
    <section className="  container pb-5 xl:pb0 ">
      <div className="px-4 xl:pl-[115px] pt-6 xl:pt-[42px] pb-[60px] xl:pb-[160px]  bg-[#262626] rounded-3xl relative overflow-hidden">
        <h3
          className=" text-2xl leading-10
       xl:text-[48px] font-semibold xl:leading-[63px] text-white max-w-[682px] mb-20 xl:mb-0 "
        >
          Become Part of the Fastest Growing Community of Creators
        </h3>

        {/* images */}
        <div className="w-[580px] h-[720px] absolute right-[-80px] xl:right-[110px] bottom-[-500px] xl:bottom-[-420px] scale-75 xl:scale-100 xl:block">
          <img src={banner} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;

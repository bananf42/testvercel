import SectionTitle from "../Heading/SectionTitle";
import CreatorSlide from "./CreatorSlide";
import Marquee from "react-fast-marquee";

const Creators = () => {
  const creators = [
    {
      creator_img:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Aitana Lopez",
      creator_role: "AI Creator",
      followers: "200k",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Sam Jones",
      creator_role: "AI Creator",
      followers: "508k",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Alex Garland",
      creator_role: "AI Creator",
      followers: "720k",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Devy Jonas",
      creator_role: "AI Creator",
      followers: "3M",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Jamal Sheikh",
      creator_role: "AI Creator",
      followers: "205k",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/26852336/pexels-photo-26852336/free-photo-of-portrait-of-couple-sitting-together.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Marty bliss",
      creator_role: "AI Creator",
      followers: "1M",
    },
  ];

  return (
    <section className=" py-[60px] xl:py-[150px]">
      <SectionTitle>Trusted by the{`world's`} biggest creators</SectionTitle>

      {/* creator slider area */}
      <div className=" pt-[60px] xl:pt-[120px]">
        <Marquee>
          <div className="flex gap-6 xl:gap-12 mr-6 xl:mr-12 xl:h-[612px] creator--holder ">
            {creators.map((singleCreator, index) => (
              <CreatorSlide creator={singleCreator} key={index} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Creators;

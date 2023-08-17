import { useEffect } from "react";
import heartImage from "../../assets/image/heart.png";

const AboutDonation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" px-8 py-8 mobile:gap-12 mobile:px-8 mobile:py-12 tablet:gap-16 tablet:px-4 tablet:py-16">
      <div className="m-auto flex max-w-[1005px] flex-1 flex-col items-start gap-8 rounded-[10px] mobile:gap-12 tablet:gap-16">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className=" flex flex-col items-center gap-6 self-stretch">
            <span className="flex flex-col self-stretch text-center font-[Inter] text-[32px] font-extrabold leading-[40px] -tracking-[0.72px] text-[#404040] mobile:text-4xl mobile:leading-[44px]">
              What is a Donation Transparency pledge?
            </span>
          </div>
          <p className=" self-stretch text-[16px] font-normal leading-[24px] text-[#404040] mobile:text-lg">
            <span className="font-[Inter]">
              It's a powerful petition that ensures your hard-earned funds are
              put to impactful use by agreeing to transparent spending
              practices.
            </span>
            <span className="font-[Inter] mobile:font-[Poppins]">
              &nbsp;Signing a pledge is not legally binding. Rather you indicate
              your commitment to donate towards a specific charitable cause,
              provided the receiver (typically a nonprofit) embraces the live
              transaction reporting principles of Donation Transparency.
            </span>
          </p>
        </div>
        <div className=" flex flex-col items-start gap-3 self-stretch">
          <img
            src={heartImage}
            alt=""
            className=" w-full self-stretch rounded-md"
          ></img>
        </div>
        <div className=" flex flex-col items-center gap-5 self-stretch">
          <div className=" item-start flex flex-col gap-5 self-stretch">
            <p className=" self-stretch font-[Inter] text-[16px] font-normal leading-[24px] text-[#404040] mobile:text-lg mobile:leading-7">
              Pledges serve as a vital tool, demonstrating to nonprofits the
              growing pool of dedicated donors ready to contribute, contingent
              on their adoption of transparent spending. Help us showcase the
              demand for transparency and empower nonprofits to make a lasting
              difference. Join the pledge movement today and be part of a new
              era of accountable giving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDonation;

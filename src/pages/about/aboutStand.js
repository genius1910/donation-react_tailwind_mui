import { useEffect } from "react";
import photo from "../../assets/image/1.png";
import Button from "@mui/material/Button";

const AboutStand = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" px-8 py-8 mobile:gap-12 mobile:px-8 mobile:py-12 tablet:gap-16 tablet:px-4 tablet:py-16">
      <div className="m-auto flex max-w-[1005px] flex-1 flex-col items-start gap-8 rounded-[10px] mobile:gap-12 tablet:gap-16">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className=" flex flex-col items-center gap-6 self-stretch">
            <p className="self-stretch text-center font-[Inter] text-[32px] font-extrabold leading-[40px] -tracking-[0.64px] mobile:text-[36px] mobile:leading-[44px] mobile:-tracking-[0.72px] tablet:text-[24px] tablet:leading-[32px] tablet:-tracking-[0.48px]">
              Stand for Transparency: Pledge Your Support for Haiti's Flood
              Victims
            </p>
          </div>
          <p className="self-stretch font-[Inter] text-[16px] leading-[24px] text-[#404040] mobile:text-lg">
            In response to the recent devastating floods in Haiti, we invite you
            to join us in a pledge that holds the power to change the future of
            humanitarian aid. By signing this pledge, you are joining a movement
            that supports nonprofits providing urgent relief in Haiti, but with
            a crucial difference - you demand transparency.
          </p>
        </div>
        <div className=" flex flex-col items-start gap-3 self-stretch">
          <img
            src={photo}
            alt=""
            className=" w-full self-stretch rounded-md"
          ></img>
        </div>
        <Button
          variant="contained"
          className=" !flex w-full !items-center !justify-center !gap-2 !rounded-[6px] !bg-mainBgColor !px-5 !py-4 !normal-case mobile:w-auto "
        >
          <span className=" text-center font-[Inter] text-base font-medium text-white ">
            Sign this pledge
          </span>
        </Button>
        <span className=" self-stretch font-[Inter] text-[20px] font-extrabold leading-[28px] -tracking-[0.4px] text-[#171717] mobile:font-semibold tablet:text-[32px] tablet:font-extrabold tablet:leading-[48px] tablet:-tracking-[0.64px]">
          Mission Description:
        </span>
        <div className=" flex flex-col items-center gap-5 self-stretch">
          <span className="flex flex-col self-stretch font-[Inter] text-[16px] leading-[24px] text-[#404040] mobile:text-lg">
            <p>
              Donation Transparency is not just a platform; it is a promise of
              trust. It allows you to track your donations in real-time, set
              alerts for unauthorized expenditure categories, and ensures that
              your generosity reaches those who need it most. Your signature on
              this pledge will be a beacon for active charities, encouraging
              them to embrace transparency by using our platform for their
              donation processes.
            </p>
            <p>
              In the realm of humanitarian aid, challenges are inevitable. From
              logistical issues to the complexities of providing immediate
              relief, these hurdles are amplified in the aftermath of natural
              disasters like the recent floods in Haiti. However, by insisting
              on transparency, we can navigate these challenges together,
              ensuring that your contribution makes a real impact.
            </p>
            <p>
              Signing this pledge is not legally binding. It is, instead, a
              commitment that you will support these vital relief efforts,
              provided the nonprofits receive funds through Donation
              Transparency. This approach could usher in a new era of trust and
              transparency in disaster relief efforts worldwide.
            </p>
            <p>
              Our goal is to gather 5000 signatures. This show of support will
              not only drive charities to operate more transparently, but it
              could also inspire other disaster relief efforts to do the same.
              Once a charity that aligns with this mission sets up a profile
              page on Donation Transparency, we will inform you promptly.
            </p>
            <p>
              Sharing this pledge is a powerful way to spread our message. While
              a social media post can reach many, we find a personal message to
              2-3 close contacts can be even more effective. Let's change the
              future of humanitarian aid together. Pledge, share, and watch the
              difference your demand for transparency can make.
            </p>
          </span>
        </div>
        <Button
          variant="contained"
          className=" !flex w-full !items-center !justify-center !gap-2 !rounded-[6px] !bg-mainBgColor !px-5 !py-4 !normal-case mobile:w-auto "
        >
          <span className=" text-center font-[Inter] text-base font-medium text-white ">
            Sign this pledge
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AboutStand;

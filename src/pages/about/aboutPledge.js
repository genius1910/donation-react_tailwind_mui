import { useEffect } from "react";
import photo from "../../assets/image/2.png";
import Button from "@mui/material/Button";

const AboutPledge = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" px-8 py-8 mobile:gap-12 mobile:px-8 mobile:py-12 tablet:gap-16 tablet:px-4 tablet:py-16">
      <div className="m-auto flex max-w-[1005px] flex-1 flex-col items-start gap-8 rounded-[10px] mobile:gap-12 tablet:gap-16">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className=" flex flex-col items-center gap-6 self-stretch">
            <p className="self-stretch font-[Inter] text-[32px] font-extrabold leading-[40px] -tracking-[0.64px] mobile:text-[36px] mobile:leading-[44px] mobile:-tracking-[0.72px] tablet:text-[24px] tablet:leading-[32px] tablet:-tracking-[0.48px]">
              Pledge for Climate Action Transparency: Empower Trust and
              Accountability
            </p>
          </div>
          <p className="self-stretch font-[Inter] text-[16px] leading-[24px] text-[#404040] mobile:text-lg">
            The climate crisis is upon us, demanding urgent and transformative
            action. Efforts including limiting the rise in global temperatures
            require significant financial investment, technology transfer, and
            capacity-building, especially for developing countries. The need for
            climate finance is immense and the pace of required change is swift.
            Now more than ever, your support is needed to ensure the integrity
            of these efforts​​.
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
              Our mission is to secure 5,000 pledges from potential donors like
              you, willing to support nonprofits engaged in climate action. By
              signing this pledge, you are not committing to a legal obligation,
              but symbolizing your readiness to donate if the nonprofit receives
              funds through Donation Transparency.
            </p>
            <p>
              Donation Transparency is an application that facilitates real-time
              tracking of expenditures and alerts for unauthorized categories,
              ensuring your generous contributions are utilized effectively and
              transparently. With this tool, you can trust that your donation is
              making a real impact, directly contributing to the critical
              transformations needed to combat climate change​2​.
            </p>
            <p>
              Once we reach our signature goal, your collective commitment will
              be presented to active charities. This will serve as a powerful
              incentive for them to adopt Donation Transparency, thereby
              promoting a more transparent donation process. By ensuring
              accountability, we can build lasting relationships between donors
              and nonprofits, fostering trust and promoting long-term
              loyalty​2​.
            </p>
            <p>
              Sharing this pledge is pivotal to achieving our goal. While social
              media is an effective tool, we encourage you to send a personal
              message about the pledge to 2-3 close contacts. Personal messaging
              can have a profound impact, and we believe that together, we can
              make a difference.
            </p>
            <p>
              By supporting this pledge, you are not only contributing to the
              fight against climate change but also promoting transparency in
              all relief efforts. You will be notified once a charity has set up
              a profile page on Donation Transparency, and you can continue to
              follow their progress and impact.
            </p>
            <p>
              Let's take action together for a more transparent, accountable,
              and effective fight against climate change.
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

export default AboutPledge;

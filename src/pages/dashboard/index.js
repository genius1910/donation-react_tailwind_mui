/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import photo1 from "../../assets/image/1.png";
import photo2 from "../../assets/image/2.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" m-auto flex max-w-tableMaxWidth flex-col gap-8 px-8 py-8 text-center mobile:gap-12 mobile:px-8 mobile:py-12 tablet:gap-16 tablet:px-4 tablet:py-16">
      <div className=" border-b-solid flex flex-col items-start gap-8 self-stretch border-b border-b-[#D4D4D4] mobile:gap-2">
        <div className="flex flex-col items-center justify-center gap-[10px] self-stretch pb-[8px]">
          <p className=" px-[32px] text-center font-[Inter] text-[32px] font-extrabold leading-[40px] -tracking-[0.64px] text-[#171717] mobile:text-[36px] mobile:leading-[44px] mobile:-tracking-[0.72px]">
            Explore transparency pledges to sign
          </p>
        </div>
        <div className="flex flex-col items-center justify-center self-stretch pb-[8px] text-start">
          <div className=" flex items-center justify-center gap-[32px] self-stretch px-[32px] tablet:px-[16px]">
            <p className=" flex-1 justify-center font-[Inter] text-base font-normal italic leading-6 text-black mobile:font-medium">
              Signing pledges is not legally binding. It is, instead, a
              commitment that you will support relief efforts funded through
              radical donation transparency. &nbsp;
              <Link to="/about_donation">
                <span className="font-bold">Read More</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-8 self-stretch text-center mobile:gap-16">
        <div className=" item-start flex flex-col  gap-6 self-stretch  rounded-[10px] bg-[#E5E5E5] px-8 py-8 text-center mobile:gap-12 mobile:px-8 mobile:py-12 tablet:px-4 tablet:py-16">
          <div className=" flex flex-1 flex-col items-start gap-6 self-stretch">
            <div className=" flex flex-col items-start gap-6 self-stretch">
              <span className=" flex flex-col self-stretch text-start font-[Inter] text-xl font-extrabold leading-7 -tracking-[0.4px] text-[#171717] mobile:font-semibold">
                Stand for Transparency: Pledge Your Support for Haiti's Flood
                Victims
              </span>
              <span className=" flex flex-col self-stretch text-start font-[Inter] text-base font-normal text-[#737373] mobile:text-lg">
                <p>
                  Haiti has been hit hard by intense flooding, leaving thousands
                  of homes submerged and over 13,300 displaced.
                </p>
                <p>
                  Upon reaching our goal of 5000 signatures, we will present
                  this pledge to emerging and active charities as an incentive
                  to embrace radical donation transparency.
                </p>
              </span>
            </div>
            <div className=" flex flex-col items-start gap-1">
              <Link
                className=" text-center font-[Inter] text-base font-medium text-[#171717]  mobile:font-bold"
                to="/about_stand"
              >
                Read More
              </Link>
              <span className=" text-center font-[Inter] text-base font-normal text-[#737373]">
                482 Signees
              </span>
            </div>
            <div className="block w-full mobile:hidden">
              <Link to="/about_stand">
                <Button
                  variant="contained"
                  className=" !flex w-full !items-center !justify-center !gap-2 !rounded-[6px] !bg-mainBgColor !px-5 !py-4 !normal-case mobile:w-auto mobile:!rounded-md"
                >
                  <span className=" text-center font-[Inter] text-base font-medium text-white ">
                    Sign this pledge
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <img
            src={photo1}
            className=" flex w-full items-start gap-[10px] self-stretch rounded-[6px]"
            alt=""
          ></img>
          <div className="hidden mobile:block">
            <Link to="/about_stand">
              <Button
                variant="contained"
                className=" !flex w-full !items-center !justify-center !gap-2 !rounded-[6px] !bg-mainBgColor !px-5 !py-4 !normal-case mobile:w-auto mobile:!rounded-md"
              >
                <span className=" text-center font-[Inter] text-base font-medium text-white">
                  Sign this pledge
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className=" item-start flex flex-col gap-6 self-stretch  rounded-[10px] bg-[#E5E5E5] px-8 py-8 text-center mobile:gap-12 mobile:px-8 mobile:py-12 tablet:px-4 tablet:py-16">
          <div className=" flex flex-1 flex-col items-start gap-6 self-stretch">
            <div className=" flex flex-col items-start gap-6 self-stretch">
              <span className=" flex flex-col self-stretch text-start font-[Inter] text-xl font-extrabold leading-7 -tracking-[0.4px] text-[#171717] mobile:font-semibold">
                Pledge for Climate Action Transparency: Empower Trust and
                Accountability
              </span>
              <span className=" flex flex-col self-stretch text-start font-[Inter] text-base font-normal text-[#737373] mobile:text-lg">
                <p>
                  The climate crisis is upon us, demanding urgent and
                  transformative action.
                </p>
                <p>
                  Upon reaching our goal of 5000 signatures, we will present
                  this pledge to active charities as an incentive to use
                  Donation Transparency for a more transparent donation process.
                </p>
              </span>
            </div>
            <div className=" flex flex-col items-start gap-1">
              <Link
                className=" text-center font-[Inter] text-base font-medium text-[#171717]  mobile:font-bold"
                to="/about_pledge"
              >
                Read More
              </Link>
              <span className=" text-center font-[Inter] text-base font-normal text-[#737373]">
                3233 Signees
              </span>
            </div>
            <div className="w-full ">
              <Link to="/about_pledge">
                <Button
                  variant="contained"
                  className=" !flex w-full !items-center !justify-center !gap-2 !rounded-[6px] !bg-mainBgColor !px-5 !py-4 !normal-case mobile:w-auto mobile:!rounded-md"
                >
                  <span className=" text-center font-[Inter] text-base font-medium text-white ">
                    Sign this pledge
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <img
            src={photo2}
            className=" flex w-full items-start gap-[10px] self-stretch rounded-[6px]"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

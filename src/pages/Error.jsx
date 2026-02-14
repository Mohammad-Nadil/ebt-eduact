
import Container from "../components/Container";
import error from "../../public/images/404.png";
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Error = () => {
  return (
    <>
      <section>
        <Container>
          <div className=" py-30 flex flex-col  items-center justify-center">
            <div className="pb-20">
              <img src={error} alt="" />
            </div>
            <div className="input text-center ">
              <h3 className="font-urbanist text-[40px] font-bold text-primaryText leading-6.5 mb-5">
                Oops! Page not Found
              </h3>
              <p className="font-urbanist text-[16px] font-semibold text-secondaryText leading-8 mb-7.5">
                The page you are looking for is not exist.
              </p>
              <div className="flex items-center mb-7.5 gap-2.25 py-5 pl-10 rounded-sm bg-[#F6F6F6] w-124">
                <CiSearch className="text-2xl text-secondaryText " />
                <input
                  type="text"
                  placeholder="Type Here"
                  className="outline-none font-urbanist text-[16px] font-semibold text-secondaryText leading-6.5  "
                />
              </div>
            </div>
            <div className="btn mx-auto">
              <a href="/">
              <button className="text-base font-urbanist font-bold text-[18px]  text-white sm:text-lg flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10 ">
                <p>Back to Home</p>
                <FaArrowRightLong />
              </button></a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Error;

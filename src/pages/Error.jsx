import React from "react";
import Container from "../components/Container";
import error from '../../public/images/404.png'

const Error = () => {
  return (
    <>
    <section>
      <Container>
        <div className=" py-30 flex flex-col gap-20 items-center justify-center">
          <div>
            <img src={error} alt="" />
          </div>
          <div className="input text-center">
              <h3 className="font-urbanist text-[40px] font-bold text-primaryText leading-6.5 mb-5">
                Oops! Page not Found
              </h3>
              <p className="font-urbanist text-[16px] font-semibold text-secondaryText leading-8 mb-7.5">
                The page you are looking for is not exist.
              </p>
              <div className="flex items-center gap-2.25">
                <input type="text" placeholder="Type Here" />
              </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
};

export default Error;

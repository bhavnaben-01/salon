import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Logo from "@/components/Logo";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found — Solaro</title>
      </Helmet>

      <section className="bg-[#F8F5F2] min-h-[90vh] flex items-center px-5 md:px-8 lg:px-16 xl:px-28">
        <div className="max-w-[1400px] mx-auto w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-10 md:gap-8">
              {/* Logo aligned with title */}
              <Link to="/">
                <Logo className="h-8 w-auto" />
              </Link>

              <div className="space-y-4">
                <h1 className="font-heading text-[50px] md:text-[64px] leading-tight md:leading-[83px] font-normal text-[#0A0404]">
                  Page not found
                </h1>
                <p className="font-body text-[16px] leading-[26px] font-normal text-[#505050]">
                  Unfortunately, page you are looking for does not exitst
                </p>
              </div>

              <Link
                to="/"
                className="inline-flex font-body text-[14px] font-semibold uppercase tracking-[1px] bg-primary text-white px-10 py-5 btn-radius hover:bg-primary/90 transition-all"
              >
                GO TO HOME PAGE
              </Link>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/salon/404.png"
                alt="404 Illustration"
                className="w-full h-auto max-w-[650px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

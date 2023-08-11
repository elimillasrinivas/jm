import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";



const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const About = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"About Us"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />

      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>
            Empowering Success: Jobminar - Your Path to Growth and Excellence
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>
                  Welcome to Jobminar Consultants Pvt. Ltd – Your premier destination for comprehensive staffing solutions, innovative web development, result-oriented digital marketing, specialized political digital marketing, seamless corporate events management, and top-notch construction services. Our expert team delivers exceptional results, ensuring your success in every endeavor. Trust us for reliable, efficient, and tailor-made solutions to fuel your growth and reach new heights in your business ventures. Partner with us today and experience excellence in action.
                  </p>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="/img/gallery-1.jpeg"
                    alt="About Image One"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>what we offer</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Jobminar Consultants Pvt. Ltd: Your Trusted Staffing Solutions Provider.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Unleashing Digital Potential: Web Development & Digital Marketing Experts.

                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Empowering Political Campaigns: Specialized Political Digital Marketing Services.

                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Seamless Events Management: Corporate Events with Precision & Flair.

                    </li>
                    <li>
                      <i className="fa-solid fa-circle-dot" /> Building Dreams: Top-tier Construction Services for Your Projects.
                    </li>
                  </ul>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src="/img/gallery-3.jpeg"
                    alt="About Image Two"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection />

     

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="data">
                <figure>
                  <img
                    className="w-100"
                    src="/img/service2.jpeg"
                    alt="About key Benefits"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data">
                <h2>Key Benefits</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                   <b>Unmatched Expertise: </b> Our team brings years of industry experience and expertise to deliver exceptional solutions.
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                    <b>Tailored Solutions:</b> We understand your unique needs and craft customized strategies for your success.

                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                    <b>Results-Driven Approach:</b> Our focus is on delivering tangible results that drive growth and exceed expectations.

                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>
                    <b>Client-Centric Service:</b> We prioritize client satisfaction, providing dedicated support at every stage of your journey.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

      <TestimonialSlider />

      <PartnersSlider noTop />
    </Layouts>
  );
};
export default About;

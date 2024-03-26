function About() {
  return (
    <>
      <div className="sign-bg w-full m-auto h-[65vh] flex justify-start items-center">
        <div className="w-[70vw] flex m-auto flex-col">
          <h1 className="text-white text-center m-auto w-[50vw] text-xxxl mb-3  font-thin">
            Zerocap is a leading capital markets firm for digital assets
          </h1>
        </div>
      </div>
      <div className="bg-gray-300 w-full h-[75vh]">
        <div className="w-[60vw] flex  pt-20 m-auto">
          <div className="text-orange ml-[-50px] lh-1 text-xxl w-[25vw] font-thin">
            We’re taking digital assets mainstream
          </div>
          <div></div>
        </div>
        <div className="w-[60vw] m-auto flex  pt-10">
          <div className="w-[50%]"></div>
          <div className="text-white w-[60%] mt-10 text-md font-thin">
            Zerocap is a market-leading digital asset investment firm, served by
            an expert team with a deep understanding of digital asset
            technology, institutional trading. Zerocap sets a new standard for
            governance and compliance in the crypto industry, as evidenced by
            licensing, auditing, institutional backing and a unique insurance
            policy from Lloyd’s of London.
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-auto flex justify-start items-center">
        <div className="w-[60vw] m-auto mt-20 flex flex-col pt-20">
          <h3 className="text-red font-nunito text-lg">About</h3>
          <p className="font-nunito text-md w-[45vw] mb-5">
            At XXX, we are dedicated to providing convenient access to a wide
            range of Over-The-Counter (OTC) products for our customers. Whether
            you're looking for everyday healthcare essentials, wellness
            products, or specialized remedies, we strive to be your one-stop
            destination.
          </p>
          <h3 className="text-red font-nunito text-lg">Our Mission</h3>
          <p className="font-nunito text-md w-[45vw] mb-5">
            Our mission is to empower individuals to take control of their
            health and well-being by offering a diverse selection of OTC
            products backed by reliable information and exceptional customer
            service.
          </p>
          <h3 className="text-red font-nunito text-lg">What Sets Us Apart</h3>

          <ul className="list-disc ml-7 w-[50vw] mb-5">
            <li>
              <strong>Extensive Product Range</strong>: We curate a
              comprehensive selection of OTC products, ranging from trusted
              brands to niche remedies, ensuring that you find what you need.
            </li>
            <li>
              <strong>Quality Assurance</strong>: We prioritize quality and
              safety, partnering with reputable manufacturers and adhering to
              stringent standards to ensure the efficacy and reliability of
              every product we offer.
            </li>
            <li>
              <strong>Expert Guidance</strong>: Our team is composed of
              knowledgeable professionals who are committed to providing expert
              guidance and personalized recommendations to assist you in making
              informed decisions about your health.
            </li>
            <li>
              <strong>Convenience</strong>: With our user-friendly interface and
              streamlined ordering process, shopping for OTC products has never
              been easier. We aim to save you time and hassle, so you can focus
              on what matters most—your health.
            </li>
            <li>
              <strong>Community Engagement</strong>: We believe in fostering a
              supportive community centered around health and wellness. Through
              educational resources, interactive forums, and engaging content,
              we aim to empower individuals to make proactive choices for their
              well-being.
            </li>
          </ul>
          <h3 className="text-red font-nunito text-lg">
            Our Commitment to You
          </h3>
          <p className="font-nunito text-md w-[45vw] mb-5">
            At XXX, we prioritize transparency, integrity, and customer
            satisfaction. Whether you're seeking relief from minor ailments,
            managing chronic conditions, or pursuing a healthier lifestyle, we
            are here to support you every step of the way.
          </p>
          <p className="font-nunito text-md w-[45vw] mb-5">
            Thank you for choosing XXX. We look forward to serving you and
            helping you achieve your health goals.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center bg-gray-500 w-full h-[60vh]">
        <h1 className="text-white font-thin text-xxl">
          Get in touch with us to dive into <br /> digital asset capital markets
        </h1>
        <button className="bg-cyan font-thin mt-10 w-[20vw] h-10 rounded-3xl">
          Contact Us
        </button>
        <div className="flex mt-10">
          <h3 className="text-white font-thin text-xl mr-5">
            Ready to sign up?
          </h3>
          <button className="bg-transparent border w-[15vw] border-cyan rounded-3xl ml-5 text-cyan">
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
}

export default About;

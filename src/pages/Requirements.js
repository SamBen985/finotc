import "../styles/signup.css";

function SignUp() {
  return (
    <>
      <div className="sign-bg w-full m-auto h-[65vh] flex justify-start items-center">
        <div className="w-[70vw] flex m-auto flex-col">
          <h1 className="text-white text-xxxl mb-3 mt-20 font-thin font-nunito">
            Requirements
          </h1>
          <h6 className="text-white font-nunito">
            Complete the following two steps to start trading with us
          </h6>
          <h6 className="text-white font-nunito mt-[100px]">
            Financial services and products are available to{" "}
            <u>wholesale clients</u> only
          </h6>
        </div>
      </div>
      <div className="bg-white w-full h-auto flex justify-start items-center">
        <div className="w-[60vw] m-auto pt-20 flex flex-col">
          <h3 className="text-red font-nunito text-lg">Step 1:</h3>
          <h1 className="text-xxl font-bold">Create an Account</h1>
          <p className="font-nunito text-md w-[45vw]">
            Safely store and access your assets, utilising our digital asset
            custody with industry-leading insurance and MPC technology.
          </p>

          <p className="font-nunito text-md w-[45vw] mt-10 text-gray-100">
            To setup multiple accounts, you can register with the same email
            address or specify during the KYC process that you want to link your
            accounts to your main email address. You will be able to access your
            accounts with single-signon.
          </p>
        </div>
      </div>
      <div className="bg-white w-full h-auto flex justify-start items-center">
        <div className="w-[60vw] m-auto mt-20 flex flex-col pt-20">
          <h3 className="text-red font-nunito text-lg">Step 2:</h3>
          <h1 className="text-xxl font-bold">KYC (Know Your Customer)</h1>
          <p className="font-nunito text-md w-[45vw]">
            As with all cryptocurrency exchanges, we must adhere to AML
            (Anti-Money Laundering) and CTF (Counter-Terrorism Financing)
            legislation. In Australia this is overseen by AUSTRAC, and requires
            that we know who we are trading with.
          </p>
          <ul className="list-disc ml-7 mt-5 w-[50vw]">
            <li className="font-bold ">
              The onboarded individual / entity must match the bank details
              intended for the account.
            </li>
            <li>
              You will be prompted to verify your identity and provide your KYC
              information in the portal
            </li>
            <li>You will be required to upload your KYC documents</li>
            <li>
              If you are unable to proceed to the next page it could mean that
              there are missing information, do not leave the required fields
              blank
            </li>
          </ul>
          <p className="font-nunito text-md w-[45vw] mt-10 text-gray-100">
            Note: if you encounter a problem completing your KYC details in the
            portal you may Fill out the PDF version of the KYC Form online and
            email your KYC docs to kyc@zerocap.com or you can Download the PDF
            fill it out manually and send it via email with your docs (as stated
            in section E of the form) to kyc@zerocap.com.
          </p>
        </div>
      </div>
      <div className="w-full mt-20">
        <div className="flex flex-col w-[55vw] m-auto">
          <h1 className="text-xxl w-[50vw] mb-5 font-thin">
            The documents required vary depending on your account type
          </h1>
          <div className="mb-20 w-[50vw]">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Individuals
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      <strong> Proof of identity (POI)</strong> is the primary
                      document. An unexpired original soft copy of the
                      identification document which can either be a:
                    </p>
                    <ul className="list-disc">
                      <li>
                        passport (valid for at least 6 months to expiration)
                      </li>
                      <li>
                        national ID or any government-issued ID (valid for at
                        least 3 months to expiration)
                      </li>
                      <li>driving license (not acceptable for US citizens)</li>
                    </ul>
                    <p>
                      <strong> Proof of address (POA) </strong> – a recurring
                      locally issued document. It should be the original soft
                      copy in a pdf format clearly showing the account holder’s
                      name, address and date issued. Submit the most recent copy
                      not older than 90 days. It can either be a:
                    </p>
                    <ul className="list-disc">
                      <li>utility bill </li>
                      <li>bank statement</li>
                    </ul>
                    <p>
                      <strong>Unacceptable documents are:</strong>
                    </p>
                    <ul className="list-disc">
                      <li>screenshot of the actual soft-copy</li>
                      <li>expired or out dated documents</li>
                      <li>tampered documents or redacted image</li>
                      <li>medical bill</li>
                      <li>delivery receipts</li>
                    </ul>
                    <p>
                      Note: Depending on the quality of the information
                      gathered, additional supporting documents may be required.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Companies
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Original soft copy of company formation documents showing
                      the people with significant control, ownership structure,
                      beneficial owners (UBO, director(s), authorised person),
                      activities, nature and place of business.
                    </p>
                    <p>
                      The following documents will be collected which may differ
                      according to the country of jurisdiction:
                    </p>
                    <ul className="list-disc">
                      <li>Certificate of Incorporation (COI) </li>
                      <li>Memorandum and articles of association (AOA)</li>
                      <li>
                        Company registration certificate / company extract /
                        company registry or business profile showing the company
                        particulars (i.e records from ASIC, ICRIS, ACRA,
                        Companies House, SEC, etc.)
                      </li>
                      <li>
                        Certificate of incumbency (applicable only for LLC or
                        corporations)
                      </li>
                      <li>
                        Company shareholding document (ROM/Share register/list
                        of direct and indirect parents and shareholders down to
                        the UBO)
                      </li>
                      <li>
                        Complete list of the names of directors (register of
                        directors)
                      </li>
                      <li>
                        KYC documents of all shareholders with 25% or more
                        interest (requirements for individuals will apply)
                      </li>
                    </ul>
                    <p>
                      Note: Depending on the quality of the information
                      gathered, additional supporting documents may be required.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Trust/SMSF
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h1 className="text-xl">Trust</h1>
                    <ul className="list-disc">
                      <li>Trust Deed / Trust agreement / Trust settlement</li>
                      <li>List of Beneficiary(ies)</li>
                      <li>
                        Certificate of registration (issued by charity
                        commissioner / Registrar of Trusts / Provident fund/
                        etc.)
                      </li>
                      <li>
                        Declaration of source of fund and source of wealth
                      </li>
                      <li>
                        Name of settlor(s). If the underlying asset is more than
                        $ 10,000 AUD settlor’s KYC is required and requirements
                        for individual/company will apply
                      </li>
                      <li>Protectors (if any)</li>
                      <li>List of executors (if any)</li>
                    </ul>
                    <h1 className="text-xl mt-10">SMSF</h1>
                    <ul className="list-disc">
                      <li>
                        SMSF Deed/ Adoption Agreement/ Operating Agreement
                      </li>
                      <li>List of member or beneficiary</li>
                      <li>
                        Proof of registration (Registrar of SMSF, etc. ) if
                        registered
                      </li>
                      <li>
                        Declaration of source of fund and source of wealth
                      </li>
                      <li>
                        Declare if the trustee(s) is also the fund members
                      </li>
                      <li>Provident Fund Commissioner etc.), if registered</li>
                    </ul>
                    <p>
                      Note: Depending on the quality of the information
                      gathered, additional supporting documents may be required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange w-full h-[35vh] flex flex-col justify-center items-center">
        <h1 className="font-thin text-xxl">Request a callback from our team</h1>
        <button className="bg-white rounded-xl mt-2 w-40 h-10">
          Contact Us
        </button>
      </div>
    </>
  );
}

export default SignUp;

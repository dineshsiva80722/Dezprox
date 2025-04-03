import React from "react";

const Features = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-[rgba(246,246,248,1)] flex flex-col overflow-hidden items-center justify-center px-20 py-24 max-md:px-5">
        <div className="flex w-[1200px] max-w-full flex-col items-center">
          <header className="text-center">
          <div className="flex justify-center mb-4">
          <span className="px-3 py-1 bg-green-50 text-green-500 rounded-full text-sm font-medium flex items-center">
          <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_41_201)">
        <mask
          id="mask0_41_201"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="17"
          height="16"
        >
          <path d="M16.61 0H0.609985V16H16.61V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_41_201)">
          <path
            d="M9.32428 2V6.66667H13.61L7.8957 14V9.33333H3.60999L9.32428 2Z"
            stroke="#2D6E16"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_41_201">
          <rect width="16" height="16" fill="white" transform="translate(0.609985)" />
        </clipPath>
      </defs>
    </svg>
            Features
          </span>
        </div>
            <h1 className="text-[rgba(2,10,15,1)] text-5xl font-semibold leading-[1.2] mt-[33px] max-md:max-w-full max-md:text-[40px]">
              Features designed to <br />
              empower your workflow
            </h1>
            <p className="text-[rgba(80,86,93,1)] text-[17px] font-normal leading-[1.4] mt-[30px] max-md:max-w-full">
              Stay ahead with tools that prioritize your needs, integrating
              insights and <br />
              efficiency into one powerful platform.
            </p>
          </header>

          {/* First row - 2 cards */}
          <div className="self-stretch mt-[100px] max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[68%] max-md:w-full max-md:ml-0">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-[34px]">
                  <img
                    src="/placeholder-image.png"
                    className="object-contain w-full aspect-[3.12]"
                    alt="Data insights visualization"
                  />
                  <div className="flex flex-col items-stretch mt-7 px-8 max-md:px-5">
                    <h3 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
                      Data insights
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] text-[15px] font-normal leading-[21px] mt-3.5">
                      Make smarter, more informed decisions with powerful and actionable data insights, designed to 
                      empower your business with the tools needed to drive growth, efficiency, and success.
                    </p>
                  </div>
                </article>
              </div>
              <div className="w-[32%] ml-5 max-md:w-full max-md:ml-0">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-[34px]">
                  <img
                    src="/placeholder-image.png"
                    className="object-contain w-full aspect-[1.5]"
                    alt="Collaboration illustration"
                  />
                  <div className="flex flex-col items-stretch mt-7 px-8 max-md:px-5">
                    <h3 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
                      Collaborate together
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] text-[15px] font-normal leading-[21px] mt-3.5">
                      Collaborate with your team, share updates 
                      instantly, and achieve your goals faster.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Second row - 3 cards */}
          <div className="self-stretch mt-8 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[33%] max-md:w-full max-md:ml-0">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-[34px]">
                  <div className="flex flex-col relative aspect-[1.498] w-full overflow-hidden items-center text-[rgba(2,10,15,1)] pt-[108px] pb-8 px-[76px] max-md:pt-[100px] max-md:px-5">
                    <img
                      className="absolute h-full w-full object-cover inset-0"
                      alt="Command menu background"
                    />
                    <div className="relative w-[141px] max-w-full">
                      <div className="flex items-stretch gap-3 text-lg font-medium whitespace-nowrap leading-[1.4] max-md:ml-2 max-md:mr-[9px]">
                        <div className="bg-white flex flex-col items-center w-14 h-14 rounded-lg">
                          <div className="border-neutral-50 border flex flex-col items-stretch justify-center p-px rounded-lg border-solid">
                            <div className="bg-white shadow-[0px_2px_4px_rgba(103,103,103,0.08)] w-[54px] h-[54px] px-[18px] rounded-lg max-md:pr-5">
                              ⌘
                            </div>
                          </div>
                        </div>
                        <div className="bg-white flex flex-col items-center w-14 h-14 rounded-lg">
                          <div className="border-neutral-50 border flex flex-col items-stretch justify-center p-px rounded-lg border-solid">
                            <div className="bg-white shadow-[0px_2px_4px_rgba(103,103,103,0.08)] w-[54px] h-[54px] px-[21px] rounded-lg max-md:px-5">
                              K
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white shadow-[0px_2px_4px_rgba(103,103,103,0.08)] overflow-hidden text-sm font-normal mt-6 rounded-[64px]">
                        <div className="border px-4 py-[11px] rounded-[64px] border-[rgba(230,230,235,1)] border-solid">
                          Command menu
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch text-[15px] mt-7 px-8 max-md:px-5">
                    <h3 className="text-[rgba(2,10,15,1)] font-medium leading-[1.4]">
                      App shortcuts
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] font-normal leading-[21px] mt-3.5">
                      Save time, boost efficiency, and focus on 
                      what truly matters for you.
                    </p>
                  </div>
                </article>
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-[34px]">
                  <img
                    src="/placeholder-image.png"
                    className="object-contain w-full aspect-[1.49]"
                    alt="Integrations illustration"
                  />
                  <div className="flex flex-col items-stretch mt-7 px-8 max-md:px-5">
                    <h3 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
                      Seamless integrations
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] text-[15px] font-normal leading-[21px] mt-3.5">
                      Seamlessly connect your favorite apps and 
                      platforms with our powerful integrations.
                    </p>
                  </div>
                </article>
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-[34px]">
                  <div className="bg-white pt-[45px] pb-1 px-[60px] max-md:px-5">
                    <img
                      // src=""
                      className="aspect-[1.27] object-contain w-full"
                      alt="Smart widgets illustration"
                    />
                  </div>
                  <div className="flex flex-col items-stretch text-[15px] mt-7 px-8 max-md:px-5">
                    <h3 className="text-[rgba(2,10,15,1)] font-medium leading-[1.4]">
                      Smart widgets
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] font-normal leading-[21px] mt-3.5">
                      Provides real-time data, actionable insights, 
                      and key metrics at a glance.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;

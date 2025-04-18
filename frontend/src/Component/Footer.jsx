import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pl-10 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src="data:image/png;base64,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"
                    alt="logo"
                    className="max-w-full "
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="logo"
                    className="max-w-full hidden "
                  />
                </a>
                <p className="mb-7 text-base text-body-color ">
                  Join Us and Create a impact in your life 
                </p>
                <p className="flex items-center text-sm font-medium text-dark ">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>+91 766XXXXXXX</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="WHO website" />
              <NavLink link="/#" label="Diet" />
              <NavLink link="/#" label="Workout" />
              <NavLink link="/#" label="Sel- Care" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About US" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="" />
              <NavLink link="/#" label="" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Use Bot" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark ">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-blue-400 sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-blue-400 sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-blue-400  sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-blue-400 sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-base text-body-color ">
                  &copy; 2025 FITWITHUS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark ">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary "
      >
        {label}
      </a>
    </li>
  );
};

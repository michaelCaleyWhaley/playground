import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="14"
        viewBox="0 0 20 14"
        className="header__burger"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="#1A1A1A" transform="translate(-32 -45)">
            <g transform="translate(0 28)">
              <g transform="translate(32 14)">
                <g>
                  <path d="M20 16v1H0v-1h20zm0-6.5v1H0v-1h20zM20 3v1H0V3h20z"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div className="header__group header__group--left header__group--desktop-only">
        <img
          src="https://www.endclothing.com/static/images/flags/GB.svg"
          alt=""
          className="header__flag"
        />

        <p className="header__region">GBP</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 18"
          className="header__account"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="currentColor" transform="translate(-197 -47)">
              <g transform="translate(0 28)">
                <g transform="translate(196 19)">
                  <g>
                    <g transform="translate(1)">
                      <path d="M14.5 17l-13 .004v-1c0-1.945 0-3.264 2.003-3.795 1.005-.266 3.348-.203 4.497-.203s3.522-.08 4.503.203c2.066.595 1.997 1.85 1.997 3.795V17zM8 11.01c-1.191 0-3.973-.106-5.04.305-2.49.96-2.396 2.92-2.46 4.688V18h15v-1.996c-.064-1.768.03-3.728-2.46-4.688-1.067-.41-3.849-.305-5.04-.305z"></path>
                      <path
                        fillRule="nonzero"
                        d="M8 0a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <svg
        width="123"
        height="45"
        viewBox="0 0 123 45"
        xmlns="http://www.w3.org/2000/svg"
        className="header__logo"
      >
        <defs>
          <path d="M0 44.83h123.537V0H0z"></path>
        </defs>
        <path
          fill="currentColor"
          d="M0 0v44.83h24.167v-7.575H8.595V25.458h11.398v-7.576H8.595V7.575h14.948V0zM57.488 0v26.575h-.124L45.405 0H36v44.83h7.848V15.896h.123l13.143 28.936h8.222V0zM80 0h11.958c9.842 0 15.323 4.222 15.696 15.523v13.784c-.373 11.3-5.854 15.523-15.696 15.523H80V0zm8.595 37.255h2.99c4.734 0 7.474-2.235 7.474-8.94V16.516c0-6.334-2.118-8.942-7.474-8.942h-2.99v29.68zM114 44.817h8.844V36H114z"
          fillRule="evenodd"
        ></path>
      </svg>

      <div className="header__group header__group--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          className="header__search"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#1A1A1A" transform="translate(-1404 -47)">
              <g transform="translate(0 28)">
                <g transform="translate(1402 19)">
                  <g>
                    <path
                      fillRule="nonzero"
                      d="M9 0a7 7 0 014.038 12.719l-.198.135L15.809 18h-1.154l-2.69-4.657A7 7 0 119 0zm0 1a6 6 0 100 12A6 6 0 009 1z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          className="header__search"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g
              fill="#1A1A1A"
              fillRule="nonzero"
              transform="translate(-1436 -48)"
            >
              <g transform="translate(0 28)">
                <g transform="translate(1436 19)">
                  <path d="M16.668 2.381c1.776 1.842 1.776 4.828 0 6.67L9 17 1.332 9.05c-1.776-1.841-1.776-4.827 0-6.669a4.434 4.434 0 016.431 0L9 3.663l1.237-1.282a4.434 4.434 0 016.431 0zm-.516.827l-.137-.15a3.531 3.531 0 00-4.98-.141l-.145.142L9 5.017 7.11 3.058a3.533 3.533 0 00-5.125 0C.617 4.478.571 6.748 1.848 8.223l.137.15L9 15.647l7.015-7.274c1.368-1.419 1.414-3.69.137-5.165z"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="header__search"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#1A1A1A" fillRule="nonzero">
              <g>
                <path d="M17 4v14H1V4h16zm-1 1H2v12h14V5zM9 0a5.002 5.002 0 014.9 4h-1.026a4.002 4.002 0 00-7.748 0H4.1A5.002 5.002 0 019 0z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;

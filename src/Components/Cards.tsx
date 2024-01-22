const Cards = () => {
  return (
    <div className="flex justify-center flex-wrap mt-5   gap-10">
      {/* twitter card */}
      {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96 w-full box-border">
        <div className="flex flex-row justify-center p-6">
          <div className="inline-flex p-[11.03px] items-center gap-[11.03px] rounded-sm">
            <div className="w-[36.697px] h-[37.503px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className=" flex items-center w-[170.847px] p-4 text-black font-Outfit text-base font-medium">
            AI X(Twitter) Bio Generator
          </div>
        </div>
        <div className="p-4">
          <p className="w-[268.475px] px-6 h-30.734 flex-shrink-0 text-black font-Outfit text-sm font-normal">
            Get a standout X (Twitter) bio that's all you, all unique in seconds
          </p>
        </div>
        <div className="flex items-start justify-center  p-6 pt-0 gap-5">
          <button className="flex w-full p-2.26 md:p-9.04 justify-center  gap-2.26 rounded-full bg-gray-900 p-1 text-white font-Outfit text-base font-medium px-10 mx-auto">
            Generate
          </button>
          <button className="flex w-40.678 h-38.87 p-2.26  gap-2.26 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>

      </div> */}
      <div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            className="m-3"
          >
            <path
              d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
              fill="black"
            />
          </svg>

          <div className=" flex items-center text-xl text-black font-Outfit  font-semibold">
            AI X(Twitter) Bio Generator
          </div>
        </div>
        <div className="w-full text-base  font-normal">
          Get a standout X (Twitter) bio that's all you, all unique in seconds
        </div>
        <div className="flex items-start justify-center  pt-0 gap-5">
          <button className="flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-Outfit text-base font-medium px-10 mx-auto">
            Generate
          </button>
          <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            className="m-3"
          >
            <path
              d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
              fill="black"
            />
          </svg>

          <div className=" flex items-center text-xl text-black font-Outfit  font-semibold">
            AI X(Twitter) Bio Generator
          </div>
        </div>
        <div className="w-full text-base  font-normal">
          Get a standout X (Twitter) bio that's all you, all unique in seconds
        </div>
        <div className="flex items-start justify-center  pt-0 gap-5">
          <button className="flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-Outfit text-base font-medium px-10 mx-auto">
            Generate
          </button>
          <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            className="m-3"
          >
            <path
              d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
              fill="black"
            />
          </svg>

          <div className=" flex items-center text-xl text-black font-Outfit  font-semibold">
            AI X(Twitter) Bio Generator
          </div>
        </div>
        <div className="w-full text-base  font-normal">
          Get a standout X (Twitter) bio that's all you, all unique in seconds
        </div>
        <div className="flex items-start justify-center  pt-0 gap-5">
          <button className="flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-Outfit text-base font-medium px-10 mx-auto">
            Generate
          </button>
          <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            className="m-3"
          >
            <path
              d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
              fill="black"
            />
          </svg>

          <div className=" flex items-center text-xl text-black font-Outfit  font-semibold">
            AI X(Twitter) Bio Generator
          </div>
        </div>
        <div className="w-full text-base  font-normal">
          Get a standout X (Twitter) bio that's all you, all unique in seconds
        </div>
        <div className="flex items-start justify-center  pt-0 gap-5">
          <button className="flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-Outfit text-base font-medium px-10 mx-auto">
            Generate
          </button>
          <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80 max-h-[227px] bg-white  w-full">
        <div className="flex flex-row gap-8  justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            className="m-3"
          >
            <path
              d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
              fill="black"
            />
          </svg>

          <div className=" flex items-center text-xl text-black font-Outfit  font-semibold">
            AI X(Twitter) Bio Generator
          </div>
        </div>
        <div className="w-full text-base  font-normal">
          Get a standout X (Twitter) bio that's all you, all unique in seconds
        </div>
        <div className="flex items-start justify-center  pt-0 gap-5">
          <button className="flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-Outfit text-base font-medium px-10 mx-auto">
            Generate
          </button>
          <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/* <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96 w-full box-border">
        <div className="flex flex-row justify-center p-3">
          <div className="inline-flex p-4 items-center gap-2.756 rounded-md">
            <span className="w-52.2 h-52.2 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <g clip-path="url(#clip0_86_231)">
                  <path
                    d="M52.4 26.4999C52.4 12.0854 40.7145 0.399902 26.3 0.399902C11.8854 0.399902 0.199951 12.0854 0.199951 26.4999C0.199951 39.5271 9.7444 50.3249 22.2218 52.2828V34.0444H15.5949V26.4999H22.2218V20.7497C22.2218 14.2084 26.1185 10.5952 32.0803 10.5952C34.9358 10.5952 37.9226 11.105 37.9226 11.105V17.528H34.6316C31.3892 17.528 30.3781 19.54 30.3781 21.6041V26.4999H37.6167L36.4596 34.0444H30.3781V52.2828C42.8555 50.3249 52.4 39.5273 52.4 26.4999Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M36.4596 34.0444L37.6168 26.4999H30.3781V21.6041C30.3781 19.5398 31.3893 17.528 34.6316 17.528H37.9226V11.105C37.9226 11.105 34.9358 10.5952 32.0801 10.5952C26.1185 10.5952 22.2218 14.2084 22.2218 20.7497V26.4999H15.5949V34.0444H22.2218V52.2828C23.5709 52.4943 24.9344 52.6003 26.3 52.5999C27.6655 52.6003 29.029 52.4943 30.3781 52.2828V34.0444H36.4596Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_231">
                    <rect
                      width="52.2"
                      height="52.2"
                      fill="white"
                      transform="translate(0.199951 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="flex items-center w-170.847 p-4 text-black font-Outfit text-base font-medium">
            AI Facebook Bio Generator
          </div>
        </div>
        <div className="p-4">
          <p className="w-268.475 px-6 h-30.734 flex-shrink-0 text-black font-Outfit text-sm font-normal">
            Upgrade your Facebook bio with AI's creative touch for a standout
            profile!{" "}
          </p>
        </div>
        <div className="flex items-start justify-center  p-6 pt-0 gap-5">
          <button className="flex w-full p-2.26 md:p-9.04 justify-center  gap-2.26 rounded-full bg-gray-900 p-1 text-white font-Outfit text-base font-medium mx-auto px-10">
            Generate
          </button>
          <button className="flex w-40.678 h-38.87 p-2.26  gap-2.26 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>

      </div>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96 w-full box-border">
        <div className="flex flex-row justify-center p-3">
          <div className="inline-flex p-4 items-center gap-2.756 rounded-md">
            <span className="w-52.2 h-52.2 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <g clip-path="url(#clip0_86_245)">
                  <path
                    d="M40.7657 0.399902H13.0344C6.27757 0.399902 0.800049 5.87742 0.800049 12.6343V40.3655C0.800049 47.1224 6.27757 52.5999 13.0344 52.5999H40.7657C47.5225 52.5999 53 47.1224 53 40.3655V12.6343C53 5.87742 47.5225 0.399902 40.7657 0.399902Z"
                    fill="url(#paint0_radial_86_245)"
                  />
                  <path
                    d="M40.7657 0.399902H13.0344C6.27757 0.399902 0.800049 5.87742 0.800049 12.6343V40.3655C0.800049 47.1224 6.27757 52.5999 13.0344 52.5999H40.7657C47.5225 52.5999 53 47.1224 53 40.3655V12.6343C53 5.87742 47.5225 0.399902 40.7657 0.399902Z"
                    fill="url(#paint1_radial_86_245)"
                  />
                  <path
                    d="M26.9018 6.10938C21.3641 6.10938 20.669 6.13364 18.4941 6.23253C16.3233 6.33204 14.8416 6.67562 13.5451 7.17988C12.2038 7.70066 11.0662 8.39741 9.93292 9.53113C8.79859 10.6646 8.10185 11.8022 7.57944 13.1429C7.07375 14.4398 6.72976 15.9222 6.63209 18.0919C6.53483 20.267 6.50934 20.9623 6.50934 26.5002C6.50934 32.0381 6.53381 32.731 6.6325 34.9058C6.73241 37.0766 7.07599 38.5584 7.57985 39.8548C8.10103 41.1961 8.79778 42.3337 9.9315 43.467C11.0646 44.6014 12.2022 45.2997 13.5425 45.8205C14.8399 46.3248 16.3219 46.6684 18.4923 46.7679C20.6674 46.8668 21.3619 46.891 26.8994 46.891C32.4377 46.891 33.1305 46.8668 35.3054 46.7679C37.4762 46.6684 38.9596 46.3248 40.257 45.8205C41.5977 45.2997 42.7337 44.6014 43.8666 43.467C45.0009 42.3337 45.6975 41.1961 46.2201 39.8555C46.7213 38.5584 47.0655 37.0762 47.1674 34.9062C47.2651 32.7314 47.2906 32.0381 47.2906 26.5002C47.2906 20.9623 47.2651 20.2674 47.1674 18.0923C47.0655 15.9215 46.7213 14.44 46.2201 13.1435C45.6975 11.8022 45.0009 10.6646 43.8666 9.53113C42.7325 8.397 41.5981 7.70025 40.2558 7.18009C38.9559 6.67562 37.4733 6.33184 35.3025 6.23253C33.1275 6.13364 32.435 6.10938 26.8955 6.10938H26.9018ZM25.0726 9.78397C25.6156 9.78315 26.2214 9.78397 26.9018 9.78397C32.3463 9.78397 32.9915 9.80354 35.1414 9.90122C37.1295 9.99216 38.2086 10.3243 38.9274 10.6035C39.879 10.9729 40.5574 11.4148 41.2707 12.1287C41.9843 12.8424 42.426 13.522 42.7965 14.4736C43.0756 15.1914 43.4082 16.2704 43.4987 18.2585C43.5964 20.4081 43.6176 21.0537 43.6176 26.4955C43.6176 31.9374 43.5964 32.5831 43.4987 34.7325C43.4078 36.7206 43.0756 37.7997 42.7965 38.5176C42.427 39.4693 41.9843 40.1468 41.2707 40.8601C40.557 41.5738 39.8794 42.0154 38.9274 42.3851C38.2094 42.6655 37.1295 42.9968 35.1414 43.0878C32.9919 43.1854 32.3463 43.2066 26.9018 43.2066C21.4571 43.2066 20.8117 43.1854 18.6624 43.0878C16.6743 42.996 15.5952 42.6639 14.8758 42.3847C13.9244 42.015 13.2446 41.5734 12.5309 40.8597C11.8172 40.146 11.3756 39.468 11.0051 38.516C10.7259 37.798 10.3933 36.719 10.3028 34.7309C10.2051 32.5813 10.1856 31.9357 10.1856 26.4904C10.1856 21.0453 10.2051 20.403 10.3028 18.2534C10.3938 16.2653 10.7259 15.1863 11.0051 14.4675C11.3747 13.5159 11.8172 12.8362 12.5311 12.1226C13.2448 11.4089 13.9244 10.967 14.876 10.5967C15.5948 10.3164 16.6743 9.98502 18.6624 9.89367C20.5434 9.80864 21.2724 9.78315 25.0726 9.77887V9.78397ZM37.7863 13.1696C36.4354 13.1696 35.3394 14.2646 35.3394 15.6157C35.3394 16.9666 36.4354 18.0626 37.7863 18.0626C39.1372 18.0626 40.2332 16.9666 40.2332 15.6157C40.2332 14.2648 39.1372 13.1688 37.7863 13.1688V13.1696ZM26.9018 16.0286C21.119 16.0286 16.4304 20.7172 16.4304 26.5002C16.4304 32.2832 21.119 36.9696 26.9018 36.9696C32.6848 36.9696 37.3718 32.2832 37.3718 26.5002C37.3718 20.7174 32.6844 16.0286 26.9014 16.0286H26.9018ZM26.9018 19.7032C30.6555 19.7032 33.6988 22.7461 33.6988 26.5002C33.6988 30.2539 30.6555 33.2972 26.9018 33.2972C23.1479 33.2972 20.105 30.2539 20.105 26.5002C20.105 22.7461 23.1479 19.7032 26.9018 19.7032Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_86_245"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.6657 56.6203) rotate(-90) scale(51.7341 48.1168)"
                  >
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.1" stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_86_245"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-7.94366 4.16014) rotate(78.681) scale(23.1254 95.3237)"
                  >
                    <stop stop-color="#3771C8" />
                    <stop offset="0.128" stop-color="#3771C8" />
                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_86_245">
                    <rect
                      width="52.2"
                      height="52.2"
                      fill="white"
                      transform="translate(0.800049 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="flex w-170.847 p-4 text-black font-Outfit font-medium items-center">
            AI Instagram Bio Generator
          </div>
        </div>
        <div className="p-4">
          <p className="w-268.475 px-6 h-30.734 flex-shrink-0 text-black font-Outfit text-sm font-normal ">
            Elevate your Instagram bio with the artistic flair of AI to make
            your profile stand out.{" "}
          </p>
        </div>

        <div className="flex items-start p-6 pt-0 gap-5 ">
          <button className="flex w-full mx-auto p-2.26 md:p-9.04 justify-center gap-2.26 rounded-full bg-gray-900 p-1 px-10 text-white font-Outfit text-base font-medium">
            Generate
          </button>
          <button className="flex w-40.678 h-38.87 p-2.26  gap-2.26 rounded-full border-2 border-gray-800 p-1 justify-end">
            <span className="w-22.599 h-22.599 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;

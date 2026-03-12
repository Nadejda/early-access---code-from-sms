import { useEffect, useRef, useState } from "react";

export const CodeFromSms = (): JSX.Element => {
  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState<number>(32);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleDigitChange = (index: number, value: string) => {
    const sanitized = value.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[index] = sanitized;
    setDigits(newDigits);
    if (sanitized && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const branchLocations = [
    "23, Awolowo Road Ikoyi",
    "Kings Plaza, 80, Adeniran Ogunsanya Street, Surulere",
    "Pentagon Plaza, 23 Opebi Road, Ikeja",
  ];

  const contactItems = [
    {
      icon: "https://c.animaapp.com/mpEMriJv/img/phone.svg",
      alt: "Phone",
      text: "0700 5000 500",
    },
    {
      icon: "https://c.animaapp.com/mpEMriJv/img/at.svg",
      alt: "At",
      text: "hello@renmoney.com",
    },
  ];

  return (
    <div
      className="relative w-[1280px] h-[778px] bg-deepblue-100"
      data-model-id="417:10029"
    >
      <header className="flex w-[calc(100%_-_100px)] h-16 items-center justify-between px-0 py-3 absolute top-0 left-[50px] bg-transparent">
        <div className="relative w-32 h-8 aspect-[4]">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/mpEMriJv/img/group@2x.png"
          />
          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/mpEMriJv/img/group-1@2x.png"
          />
          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/mpEMriJv/img/group-2@2x.png"
          />
        </div>

        <div className="inline-flex h-10 items-center justify-center gap-1 pt-[var(--collection-1-x)] pb-[var(--collection-1-x)] px-4 relative flex-[0_0_auto] rounded-xl backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
          <div className="inline-flex items-center justify-center gap-2.5 pt-0 pb-0.5 px-0 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Log in
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col w-[540px] items-start justify-center pt-6 pb-8 px-8 absolute top-[76px] left-[370px] bg-deepblue-140 rounded-3xl">
        <div className="flex flex-col items-start pt-2 pb-9 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-white text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
            Code from SMS
          </div>

          <div className="h-0.5 relative self-stretch w-full" />

          <p className="relative self-stretch [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-gray-70 text-base tracking-[0] leading-[22px]">
            We sent it to +234 ··· 000
          </p>

          <div className="relative self-stretch w-full h-5" />

          <div className="flex flex-col items-start gap-2.5 pl-0 pr-[238px] py-0 relative self-stretch w-full flex-[0_0_auto] bg-deepcloudyblue-100 rounded-[30px]">
            <div className="relative self-stretch w-full h-1 bg-white rounded-[30px]" />
          </div>
        </div>

        <div className="flex-col items-start gap-1 px-0 py-2 inline-flex relative flex-[0_0_auto]">
          <div className="inline-flex gap-2 h-[52px] items-center relative rounded-[14px]">
            <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="flex flex-col w-10 items-start gap-1 relative"
                >
                  <div
                    className={`flex justify-center px-4 py-0 self-stretch w-full h-[52px] items-center relative rounded-[14px] ${index === 0 ? "bg-deepcloudyblue-80" : "bg-deepcloudyblue-100"}`}
                  >
                    {index === 0 ? (
                      <input
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digits[index]}
                        onChange={(e) =>
                          handleDigitChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-full h-full bg-transparent text-white text-center text-base font-medium outline-none caret-white"
                        aria-label={`Digit ${index + 1}`}
                      />
                    ) : (
                      <input
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digits[index]}
                        onChange={(e) =>
                          handleDigitChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-full h-full bg-transparent text-white text-center text-base font-medium outline-none caret-white"
                        aria-label={`Digit ${index + 1}`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-fit [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
              –
            </div>

            <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
              {[3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="flex flex-col w-10 items-start gap-1 relative"
                >
                  <div className="flex justify-center px-4 py-0 self-stretch w-full h-[52px] items-center relative rounded-[14px] bg-deepcloudyblue-100">
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digits[index]}
                      onChange={(e) => handleDigitChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-full h-full bg-transparent text-white text-center text-base font-medium outline-none caret-white"
                      aria-label={`Digit ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-full h-5" />

        <div className="flex flex-col items-start pl-0.5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
            {countdown > 0
              ? `Get a new code in ${countdown} sec`
              : "Get a new code"}
          </p>

          <div className="h-2 relative self-stretch w-full" />

          <button
            className="relative self-stretch font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline [font-style:var(--body-medium-link-font-style)] text-left"
            onClick={() => {}}
          >
            Edit phone number
          </button>
        </div>
      </div>

      <div className="absolute left-[calc(50.00%_-_270px)] bottom-0 w-[540px] h-[378px]">
        <div className="flex flex-col w-[238px] items-start absolute top-[236px] left-0.5">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
                Contact us
              </div>
            </div>
          </div>

          <div className="h-2 relative self-stretch w-full" />

          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-6 aspect-[1]"
                alt={item.alt}
                src={item.icon}
              />
              <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-link-font-style)]">
                    {item.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[296px] items-start absolute top-8 left-0.5">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
                Visit a branch
              </div>
            </div>
          </div>

          <div className="h-2 relative self-stretch w-full" />

          {branchLocations.map((location, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-6 aspect-[1]"
                alt="Map pin"
                src="https://c.animaapp.com/mpEMriJv/img/mappin-2.svg"
              />
              <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline [font-style:var(--body-medium-link-font-style)]">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <img
          className="absolute top-8 right-0 w-[189px] h-[52px] aspect-[3.63]"
          alt="Logos"
          src="https://c.animaapp.com/mpEMriJv/img/logos.svg"
        />
      </div>
    </div>
  );
};

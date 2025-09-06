import { useState } from "react";
import useFetchTechIcon from "../hooks/FetchTechIcon";

const CircularButton = (props) => {
  const { icon, label, link } = props.data;
  return (
    <div
      className="flex flex-col justify-center items-center rounded-full border-[1px] bg-white p-3 shadow-sm w-15 h-15 cursor-pointer hover:border-[1px] hover:border-black"
      onClick={() => window.open(link)}
    >
      <div className="flex flex-col items-center text-xs">
        <div>{icon}</div>
        {label && <span>{label}</span>}
      </div>
    </div>
  );
};

export const ProjectShowbox = (props) => {
  const { imgsrc, sourceLink, liveLink, demoLink, width, height } = props.data;

  const [circularButtonVisible, setCircularButtonVisible] = useState("hidden");

  const { getIcon } = useFetchTechIcon();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setCircularButtonVisible("visible");
      }}
      onMouseLeave={() => {
        setCircularButtonVisible("hidden");
      }}
    >
      <img
        src={imgsrc}
        className="w-full h-[200px] lg:h-[300px]"
        style={{
          height: height,
        }}
      />

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-row gap-4 z-10"
        style={{
          visibility: circularButtonVisible,
        }}
      >
        <CircularButton
          data={{
            icon: getIcon("github"),
            link: sourceLink,
          }}
        />
        <CircularButton
          data={{
            icon: getIcon("internet"),
            link: liveLink,
          }}
        />
        <CircularButton
          data={{
            icon: getIcon("youtube"),
            link: demoLink,
          }}
        />
      </div>
    </div>
  );
};

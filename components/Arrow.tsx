import { Level } from "@/types";

const Arrow = ({ level }: Level) => {
  return (
    <div>
      <div>
        <p className="text-center">Level: {level}+ </p>
        <p className="downArrow text-6xl text-center">&#8595;</p>
        <p className="leftArrow text-6xl text-center">&#8594;</p>
      </div>
    </div>
  );
};

export default Arrow;

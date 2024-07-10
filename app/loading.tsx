import Image from "next/image";

const Loading = () => {
  return (
    <Image
      src={"/tube-spinner.svg"}
      height={50}
      width={50}
      alt="Loading"
      className="m-auto"
    />
  );
};

export default Loading;

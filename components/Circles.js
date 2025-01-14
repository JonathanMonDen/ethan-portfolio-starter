import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[300px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles.png"}
        width={300}
        height={300}
        className="w-full h-full"
        alt="circles"
      />
    </div>
  );
};

export default Circles;

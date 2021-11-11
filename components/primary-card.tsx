import Image from "next/image";




const PrimaryCard = ()=>{
  return (
    <div className=" bg-brand-2 rounded-3xl mx-4 max-w-xl">
      <div className="">
        <Image src={"/images/sectorproject.png"} width={400} height={500} alt="The Sector Project Logo" />
      </div>
    </div>
  );
}

export default PrimaryCard
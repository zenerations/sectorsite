import Image from "next/image";




const PrimaryCard = ()=>{
  return (
    <div className=" bg-brand-2 rounded-3xl mx-4 max-w-xl">
      <div className="flex flex-col flex-nowrap m-4 ">
        <Image src={"/images/sectorproject.png"} width={108} height={135} alt="The Sector Project Logo" />
        <b>
          <p className="mx-16">
            How does Generation Z envision our world in twenty years? As an
            emerging age group that is not only purpose-driven and empathetic,
            but maintains the hope to see young people grow up towards a safer,
            more inclusive, and equitable future, we prioritize ACTION, WORK,
            and IMPACT. From here on out, we seek to make that shift.
            Zenerations is launching a new 4-part initiative to add a fully
            action-based component to our organization in tandem with content
            creation.
          </p>
        </b>
      </div>
    </div>
  );
}

export default PrimaryCard
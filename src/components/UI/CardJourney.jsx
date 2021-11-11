const CardJourney = ({ date, position, description }) => (
  <div className="flex">
    <div className="flex justify-center">
      <div className="bg-light-blue w-1" />
      <div className="bg-light-blue w-4 h-4 rounded-lg absolute" />
    </div>
    <div className="flex flex-col ml-5 pb-5">
      <h5 className="text-base md:tex-lg lg:text-2xl text-light-grey font-bold">
        {date}
      </h5>
      <>
        <h5 className="text-sm md:tex-lg lg:text-2xl text-light-grey font-semibold">
          {position}
        </h5>
        <p className="text-sm md:text-base lg:text-xl text-light-grey">
          {description}
        </p>
      </>
    </div>
  </div>
);

export default CardJourney;

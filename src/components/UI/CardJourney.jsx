const CardJourney = ({ date, position, description }) => (
  <div className="flex">
    <div className="flex justify-center">
      <div className="bg-light-blue w-1" />
      <div className="bg-light-blue w-4 h-4 rounded-lg absolute" />
    </div>
    <div className="flex flex-col ml-5 pb-5">
      <h5 className="text-light-grey font-semibold pb-2">{date}</h5>
      <>
        <h5 className="text-light-grey font-semibold">{position}</h5>
        <p className="text-light-grey text-sm font-medium">{description}</p>
      </>
    </div>
  </div>
);

export default CardJourney;

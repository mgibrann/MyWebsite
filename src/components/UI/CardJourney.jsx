export default function CardJourney(props) {
  const { date, position, description } = props.journey;
  return (
    <div className="flex">
      <div className="flex justify-center">
        <div className="bg-light-blue w-2px" />
        <div className="bg-light-blue w-3 h-3 rounded-lg absolute" />
      </div>
      <div className="flex flex-col md:flex-row ml-5 pb-5 md:items-center">
        <div className="md:w-5/12 flex flex-col">
          <span className="text-base md:tex-lg lg:text-xl text-light-grey font-bold">
            {date}
          </span>
          <span className="text-sm md:tex-lg lg:text-xl text-light-grey font-medium">
            {position}
          </span>
        </div>
        <div className="md:w-7/12 md:px-2">
          <span className="text-sm md:text-base lg:text-lg text-light-grey">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

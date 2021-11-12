export default function CardSkill({ id, img }) {
  return (
    <figure className="flex flex-col pb-2 md:pb-0 items-center transform duration-500 hover:-translate-y-7">
      <img className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9" src={img} alt={id} />
      <figcaption className="text-sm md:text-base lg:text-lg text-light-grey font-medium">
        {id}
      </figcaption>
    </figure>
  );
}

import { Photo } from "../assets";
import {
  CardJourney,
  CardSkill,
  CardContact,
  CardCertificate,
  SectionAbout,
} from "../components";
import { CERTIFICATES, CONTACTS, JOURNEYS, SKILLS } from "../utils/data";

export default function About() {
  return (
    <main className="flex-grow padding">
      <SectionAbout type="section" title="About Me" ml={-200} delay={100}>
        <div className="flex flex-col md:flex-row items-center pt-2 md:pt-0">
          <div className="flex flex-col justify-end items-center md:w-5/12 md:py-2">
            <img
              src={Photo}
              alt="gibran"
              className="w-16 h-auto md:w-20 lg:w-20 bg-light-blue rounded-full shadow-sm transform duration-700 hover:scale-150 hover:shadow-2xl cursor-pointer hover:z-40"
            />
            <p className="text-base md:text-lg lg:text-2xl text-light-grey font-medium">
              Muhamad Taopik Gibran
            </p>
            <div className="flex lg:space-x-4 pb-2 md:pb-0">
              {CONTACTS.map((item) => (
                <CardContact
                  key={item.id}
                  contact={item}
                  className="h-7 md:h-8 lg:h-9"
                />
              ))}
            </div>
          </div>
          <p className="md:w-7/12 text-sm md:text-base lg:text-xl text-justify text-light-grey">
            A software developer who has a high interest in website and mobile
            development. Usually use JavaScript language and experience using
            Reactjs, React Native, Next js, and Tailwindcss. Has a dream to
            become a great developer. Likes to learn new stuff.
          </p>
        </div>
      </SectionAbout>
      <SectionAbout type="section" title="Skills" mr={-200} delay={300}>
        <div className="flex pt-5 space-x-2 justify-evenly flex-wrap">
          {SKILLS.map((skill) => (
            <CardSkill key={skill.id} id={skill.id} img={skill.img} />
          ))}
        </div>
      </SectionAbout>
      <SectionAbout type="section" title="Journey" ml={-200} delay={600}>
        <div className="pt-2">
          {JOURNEYS.map((journey, index) => (
            <CardJourney key={index} journey={journey} />
          ))}
        </div>
      </SectionAbout>
      <SectionAbout type="section" title="Certificates" ml={-200} delay={900}>
        <div className="pt-2">
          {CERTIFICATES.map((certif) => (
            <CardCertificate key={certif.title} certif={certif} />
          ))}
        </div>
      </SectionAbout>
    </main>
  );
}

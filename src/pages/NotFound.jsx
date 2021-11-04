import Lottie from "react-lottie";
import { PageNotFound } from "../assets";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="m-auto padding pb-5 md:pb-0 md:h-9/12 md:w-10/12">
      <Lottie options={defaultOptions} />
    </main>
  );
};

export default NotFound;

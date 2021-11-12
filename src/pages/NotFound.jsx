import { AnimationLottie } from "../components";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function NotFound() {
  const { width } = useWindowDimensions();
  return (
    <main className="flex flex-grow padding justify-center items-center pb-5 md:pb-0 ">
      <div className="">
        <AnimationLottie
          type="404"
          width={width >= 768 ? "75%" : "100%"}
          height={width >= 768 ? "75%" : "100%"}
        />
      </div>
    </main>
  );
}

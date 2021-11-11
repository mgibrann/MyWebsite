import useDimension from "../../hooks/useWindowDimensions";
import AnimationLottie from "./AnimationLottie";

const Loading = () => {
  const { width } = useDimension();
  const size = width <= 768 ? "25%" : "15%";
  return (
    <div className="flex flex-grow items-center justify-center">
      <AnimationLottie type="loading" height={size} width={size} />
    </div>
  );
};

export default Loading;

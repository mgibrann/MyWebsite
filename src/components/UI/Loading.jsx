import useDimension from "../../hooks/useWindowDimensions";
import AnimationLottie from "./AnimationLottie";

export default function Loading() {
  const { width } = useDimension();
  const size = width <= 768 ? "25%" : "15%";
  return (
    <main className="flex flex-grow items-center justify-center">
      <AnimationLottie type="loading" height={size} width={size} />
    </main>
  );
}

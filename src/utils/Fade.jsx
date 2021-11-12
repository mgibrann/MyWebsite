import { useSpring, config, animated } from "react-spring";

export default function Fade({
  type,
  mt,
  mr,
  mb,
  ml,
  children,
  delay,
  className,
  reverse,
}) {
  const Fade = useSpring({
    from: {
      opacity: 0,
      marginTop: mt || 0,
      marginRight: mr || 0,
      marginBottom: mb || 0,
      marginLeft: ml || 0,
    },
    to: {
      opacity: 1,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },
    delay: 300 + delay && delay,
    config: config.gentle,
    reverse: reverse || false,
  });
  console.log(delay);
  if (type === "header")
    return (
      <animated.header className={className} style={Fade}>
        {children}
      </animated.header>
    );
  if (type === "footer")
    return (
      <animated.footer className={className} style={Fade}>
        {children}
      </animated.footer>
    );
  if (type === "section")
    return (
      <animated.section className={className} style={Fade}>
        {children}
      </animated.section>
    );
  return (
    <animated.div className={className} style={Fade}>
      {children}
    </animated.div>
  );
}

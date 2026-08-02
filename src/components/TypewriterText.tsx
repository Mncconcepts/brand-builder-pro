import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character
  startDelay?: number;
  className?: string;
  caretClassName?: string;
}

const TypewriterText = ({
  text,
  speed = 55,
  startDelay = 200,
  className = "font-bold",
  caretClassName = "",
}: TypewriterTextProps) => {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setShown("");
    setDone(false);
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      {!done && (
        <span
          aria-hidden="true"
          className={`inline-block w-[0.08em] -mb-[0.05em] ml-[0.05em] h-[0.9em] align-middle bg-current animate-caret-blink ${caretClassName}`}
        />
      )}
    </span>
  );
};

export default TypewriterText;

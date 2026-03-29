import { useState, useEffect } from "react";

export function MouseFollower() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    console.log("Effect : ", enabled);

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
      console.log("Move : ", clientX, clientY);
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
      setPosition({ x: -20, y: -20 });
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={handleClick}>
        {enabled ? "Disable" : "Enable"} Mouse Follower
      </button>
    </>
  );
}

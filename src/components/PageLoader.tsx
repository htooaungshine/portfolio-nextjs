import { useMantineTheme } from "@mantine/core";
import { useEffect, useRef } from "react";

type PageLoaderProps = {
  loading: boolean;
};

export default function PageLoader({ loading }: PageLoaderProps) {
  const theme = useMantineTheme();
  const spinnerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (spinnerRef.current && loading) {
      const animation = spinnerRef.current.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
        {
          duration: 1000,
          iterations: Infinity,
          easing: "linear",
        }
      );
      animation.play();
    }
  }, [loading]);

  return (
    <div
      style={{
        display: loading ? "flex" : "none",
        position: "absolute",
        top: "0rem",
        right: "0rem",
        left: "0rem",
        bottom: "0rem",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: theme.colorScheme === "dark" ? "#1A1B1E" : "white",
        zIndex: "50",
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#228be6"
        ref={spinnerRef}
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18" />
          </g>
        </g>
      </svg>
    </div>
  );
}

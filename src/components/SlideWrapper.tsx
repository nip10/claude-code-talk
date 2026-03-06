import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function SlideWrapper({
  children,
  className = "",
  innerClassName = "",
}: SlideWrapperProps) {
  return (
    <div
      className={`slide-wrapper flex h-screen w-screen flex-col items-center justify-center px-16 py-12 ${className}`}
    >
      <div
        className={`flex h-full w-full max-w-5xl flex-col items-center justify-center ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

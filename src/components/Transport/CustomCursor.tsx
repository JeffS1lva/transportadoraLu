"use client";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export function CustomCursor({ mousePosition }: CustomCursorProps) {
  return (
    <div
      className="hidden lg:block fixed w-8 h-8 rounded-full border-2 border-cyan-500 pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
      }}
    />
  );
}

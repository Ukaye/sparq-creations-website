"use client";

interface PlaceholderImageProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

export default function PlaceholderImage({
  text = "Image",
  bgColor = "#3A3A3A",
  textColor = "#666666",
}: PlaceholderImageProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <span style={{ color: textColor }} className="text-sm font-medium">
        {text}
      </span>
    </div>
  );
}


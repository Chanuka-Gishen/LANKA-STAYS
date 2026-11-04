import Image from "next/image";

interface FlaticonProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
}

export default function Flaticon({
  name,
  size = 24,
  className = "",
  alt = "",
}: FlaticonProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt}
      width={size}
      height={size}
      className={className}
      aria-hidden={alt ? undefined : true}
    />
  );
}

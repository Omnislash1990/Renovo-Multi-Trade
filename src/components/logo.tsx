import Image from "next/image";
import logo from "@/assets/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-11 w-auto sm:h-12", priority = false }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Renovo Multi Trades"
      priority={priority}
      className={className}
      style={{ width: "auto" }}
    />
  );
}

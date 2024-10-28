import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="h-10 w-full border-t-2 border-bot border-black text-black  flex justify-center gap-6 mt-10 px-4">
      <div className="flex items-center">
        <p>Copyright 2024. all right reserved</p>
      </div>
      <div className="flex gap-3 items-center">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  );
}

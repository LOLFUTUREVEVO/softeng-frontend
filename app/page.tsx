import Image from "next/image";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect('/login');
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-black">
      
    </div>
  );
}

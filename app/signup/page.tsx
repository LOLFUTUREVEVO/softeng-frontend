import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-slate-900 gap-10">
        <p className="text-7xl font-bold text-white">Choose Application Type</p>
        <div className="flex flex-row gap-5">
            <button className="bg-blue-400 p-5 rounded-lg text-white font-bold text-xl hover:bg-blue-500 transition-colors duration-150">Student</button>
            <button className="bg-green-500 p-5 rounded-lg text-white font-bold text-xl hover:bg-green-600 transition-colors duration-150">Instructor</button>
        </div>
    </div>
  );
}

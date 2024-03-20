export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="flex items-center gap-3 font-bold text-5xl text-diego before:w-0.5 before:h-8 before:bg-sky-500">
        Hello Tailwind
      </h1>
      <h2>Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button
        disabled
        className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 hover:bg-sky-600 disabled:opacity-60"
      >
        Sign in
      </button>
    </div>
  )
}
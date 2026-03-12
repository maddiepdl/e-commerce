export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-10 bg-sky-200 w-full">
      <h1 className="text-3xl font-bold text-slate-800">Welcome to the Plant Shop!</h1>
      <p className="text-lg mt-3 text-slate-700">
        Leafy, lively, and easy to love. Find plants that fit your vibe.
      </p>
      <img
        src="https://t4.ftcdn.net/jpg/08/09/06/47/360_F_809064763_vtmSFmD2MXjOdGx9oDHTH24CjOUCEAUJ.jpg"
        alt="plants"
        className="mx-auto mt-6 max-w-full h-auto rounded-md"
      />
    </main>
  )
}

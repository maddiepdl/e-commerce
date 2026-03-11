export default function NavBar() {
  return (
    <nav className="w-full bg-slate-600 p-4">
      <div className="flex justify-center space-x-6">
        <button className="text-white px-3 py-2 rounded hover:underline hover:bg-slate-400 cursor-pointer">Home</button>
        <button className="text-white px-3 py-2 rounded hover:underline hover:bg-slate-400 cursor-pointer">Products</button>
        <button className="text-white px-3 py-2 rounded hover:underline hover:bg-slate-400 cursor-pointer">Checkout</button>
      </div>
    </nav>
  )
}

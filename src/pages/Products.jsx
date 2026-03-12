export default function Products() {
  // array of my product objects
  const products = [    
    {
      title: 'Brasil Pothos',
      price: '$14.99',
      desc: 'A trailing vine with heart-shaped leaves. Great for shelves to create a lush cascading effect.',
      img: 'https://cdn.shopify.com/s/files/1/0513/8032/2473/files/PhilodendronBrazilEra_army_green_without_stand.jpg?v=1754991120',
    },
    {
      title: 'Ficus Ruby',
      price: '$19.99',
      desc: 'A striking indoor plant with pink glossy leaves. Perfect for adding a pop of color to your space.',
      img: 'https://promisesupply.ca/cdn/shop/files/6__ficus-ruby.jpg?v=1758580483&width=1946',
    },
    {
      title: 'White Snake',
      price: '$24.99',
      desc: 'A sleek plant with tall leaves and minimalist look. Easy to care for and perfect for beginners.',
      img: 'https://cdn.shopify.com/s/files/1/0513/8032/2473/files/GoldenSansevieriaAmber_small_white-2copy.jpg?v=1754396872',
    },
  ]

  return (
    <main className="p-6 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Plants designed to elevate your space.</h2>
        {/* responsive: mobile-first rule grid-cols-1, md: on medium screen, lg: on large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          {products.map((p) => (           // .map loops over products array
            <div key={p.title} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
              <p className="text-lg font-bold text-slate-800 mt-3">{p.price}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded shadow">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

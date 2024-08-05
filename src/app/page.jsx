

export default function page(props) {
 
  return (
    <>

  <section className="container mx-auto px-4 pb-12">
    <div className="flex flex-row justify-between h-[550px] w-full mt-8 rounded-2xl pb-8 bg-neutral-700">
      <div className="flex flex-col">
        
      <div className="text-5xl h-[200px] w-[700px] text-center text-white mt-28">EXPLORE FASHION WITH PERSONA </div>
      <a href="/login" className=" bg-white text-black mx-[200px] text-3xl p-[30px] font-serif text-center rounded-xl hover:underline hover:text-white hover:bg-neutral-900">GET STARTED ➟</a>
      </div>
      <div className="mt-20 mr-28">
      <img className="rounded-2xl" src="https://media.istockphoto.com/id/1555595435/photo/portrait-of-beautiful-girl-dressed-in-a-traditional-indian-national-suit-jewelry-set-blouse.webp?b=1&s=170667a&w=0&k=20&c=6E0r3yRLUmc-0nccTxiYbPJohNZhhUh-ILKVhN4JBxw=" alt="" />
      </div>
     
    </div>
    {/* Text Above Banner */}
    <div className="banner-text">
      <h1 className="text-5xl  my-4">FIND YOUR FASHION</h1>
      <p className="text-lg mb-8">
        Elevate Your Style with Latest Trends, <b>Shop Now!!!</b>
      </p>
    </div>
    {/* Banner Slides */}
    <div className="hero-banner">
      <div className="banner-slides">
        <div className="slide">
          <img
            src="https://i.postimg.cc/FFZZ5n1D/Whats-App-Image-2024-08-04-at-4-54-19-PM.jpg"
            alt="Fashion Image 1"
          />
        </div>
        <div className="slide">
          <img
            src="https://i.postimg.cc/FFZZ5n1D/Whats-App-Image-2024-08-04-at-4-54-19-PM.jpg"
            alt="Fashion Image 2"
          />
        </div>
        {/* Add more slides as needed */}
      </div>
    </div>
  </section>
  {/* Product Section */}
  <div className="banner-text">
      <h1 className="text-5xl  mb-4">OUR PRODUCTS</h1>
      
    </div>
  <section className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://rukminim2.flixcart.com/image/640/768/xif0q/shopsy-t-shirt/6/4/d/xl-shts-black-dressbiz-original-imagzehuuhgdhrpz.jpeg?q=60&crop=false"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://rukminim2.flixcart.com/image/440/284/xif0q/shopsy-track-pant/c/g/x/30-tiger-style-tigerstyle-original-imah2b4tczqre6qg.jpeg?q=60"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://rukminim2.flixcart.com/image/640/768/xif0q/shopsy-t-shirt/6/4/d/xl-shts-black-dressbiz-original-imagzehuuhgdhrpz.jpeg?q=60&crop=false"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20240610/6WXH/6666823005ac7d77bbb2aef4/-473Wx593H-700067419-wine-MODEL.jpg"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://rukminim2.flixcart.com/image/640/768/xif0q/shopsy-t-shirt/6/4/d/xl-shts-black-dressbiz-original-imagzehuuhgdhrpz.jpeg?q=60&crop=false"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://rukminim2.flixcart.com/image/640/768/xif0q/shopsy-t-shirt/6/4/d/xl-shts-black-dressbiz-original-imagzehuuhgdhrpz.jpeg?q=60&crop=false"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-2xl bg-zinc-50 text-center w-80">
        <img
          src="https://rukminim2.flixcart.com/image/640/768/xif0q/shopsy-t-shirt/6/4/d/xl-shts-black-dressbiz-original-imagzehuuhgdhrpz.jpeg?q=60&crop=false"
          alt="cloth1"
          className="object-scale-down w-72 h-80 object-cover mb-4 rounded-md"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-2">T-Shirts</h3>
        <p className="text-gray-600 mb-4">Cotton</p>
        <p className="text-gray-900 font-bold">$39.00</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  </section>
  {/* Promotion Section */}
  <section className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-2">20% OFF ON FURNITURE TOPS</h3>
        <p className="text-lg">Explore our collection</p>
      </div>
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Funix</h3>
        <p className="text-lg">20 Years Shopping Experience</p>
      </div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Raining Offers For Summer!</h3>
        <p className="text-lg">New looks and modern ideas</p>
      </div>
    </div>
  </section>
</>

  )
}

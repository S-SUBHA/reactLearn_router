const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-red-300 via-teal-300 via-red-100 to-blue-700 text-white p-12">
      <header className="text-center w-full max-w-6xl mx-auto">
        <img
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mountain"
          className="w-full rounded-lg shadow-xl"
        />
        <h1 className="text-5xl font-extrabold my-8">
          Welcome to Mountain Travel Agency
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Discover the breathtaking beauty of the mountains with our exclusive
          travel packages. Whether you're looking for an adventurous trek or a
          peaceful retreat, we have something for everyone. Explore stunning
          landscapes, enjoy exhilarating activities, and create unforgettable
          memories. Your mountain adventure starts here!
        </p>
        <button className="mt-8 px-8 py-4 text-xl font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors">
          Join us in the <i>Adventure...</i>
        </button>
      </header>
    </div>
  );
};

export default Home;

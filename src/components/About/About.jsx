const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-red-300 via-teal-400 to-blue-500 text-gray-800 p-12">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            At Mountain Travel Agency, we are passionate about exploring the majestic beauty of mountains. Our team of experienced travel experts is dedicated to providing you with unforgettable experiences in some of the most stunning mountain destinations around the world. Whether you are looking for adventure or tranquility, we tailor our packages to meet your needs and exceed your expectations.
          </p>
        </header>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="/team-member1.jpg" alt="Team Member 1" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Alice Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="/team-member2.jpg" alt="Team Member 2" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Bob Smith</h3>
              <p className="text-gray-600">Lead Guide</p>
            </div>
            <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6 text-center">
              <img src="/team-member3.jpg" alt="Team Member 3" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Charlie Brown</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center">
            Our mission is to connect people with the beauty and adventure of mountain travel. We strive to offer exceptional service, unforgettable experiences, and a deep connection with nature. Our team works tirelessly to ensure that every journey with us is both thrilling and safe, providing you with memories that will last a lifetime.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

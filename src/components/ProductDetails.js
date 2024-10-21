import React, { useState, useEffect } from 'react';
import petImageMain from '../images/Shiba Inu Sepia.jpg';
import petImage1 from '../images/Shiba Inu Sepia 02.jpg';
import petImage2 from '../images/Shiba Inu Sepia 03.jpg';
import petImage3 from '../images/Shiba Inu Sepia.jpg';
import { Link } from 'react-router-dom';
// Import additional images for customer
import customerImage1 from '../images/Pet.jpeg';
import customerImage2 from '../images/Pet.jpeg';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(petImageMain);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);
  const [relatedPets, setRelatedPets] = useState([]);

  // Fetch customer data from the API
  const fetchCustomers = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    }
  };

  // Fetch related pets from the API
  const fetchRelatedPets = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      const data = await response.json();
      setRelatedPets(data);
    } catch (err) {
      console.error('Failed to fetch related pets:', err);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchCustomers();
    fetchRelatedPets();
  }, []);

  const handleSubscribe = () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    // Handle subscription logic
    setError('');
    setEmail('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm); // Implement search logic as needed
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold text-blue-600">
            <a href="/" className="hover:text-blue-800 transition duration-200">One More Friend</a>
          </div>
          <div className="flex space-x-8 text-lg">
            <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-200">Home</a>
            <a href="/category" className="text-gray-700 hover:text-blue-500 transition duration-200">Category</a>
            <a href="/product" className="text-gray-700 hover:text-blue-500 transition duration-200">Product Details</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 transition duration-200">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 transition duration-200">Contact</a>
          </div>
          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search something here..."
                className="px-4 py-2 border border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Search
              </button>
            </form>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Join the Community
            </button>
          </div>
        </div>
      </nav>

      {/* Product Details Section */}
      <section className="container mx-auto my-10 p-4 bg-white rounded-md shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Main Image Section */}
          <div className="w-full md:w-1/2">
            <img src={selectedImage} alt="Selected Pet" className="w-full h-96 object-cover rounded-md" />
            <div className="flex mt-4 space-x-4">
              {[petImage1, petImage2, petImage3].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">Shiba Inu Sepia</h2>
            <p className="text-xl text-blue-500 mb-4">$3,000.00 USD</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 mb-4">
            <Link to="/contact" className="text-white">Contact Us</Link>
            </button>
            <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 ml-2">Chat with an Advisor</button>
            <div className="mt-6">
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="font-semibold">Age:</td>
                    <td>4 months</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Gender:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Color:</td>
                    <td>Sepia</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Breed:</td>
                    <td>Shiba Inu</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Size:</td>
                    <td>Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Lovely Customers Section */}
      <section className="container mx-auto my-10 p-4">
        <h3 className="text-2xl font-bold mb-6">Our Lovely Customers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customers.map((customer, index) => (
            <img 
              key={index}
              src={customer.image || customerImage1} // Fallback to a default image if customer image is not available
              alt={`Customer ${index + 1}`}
              className="w-full h-64 object-cover rounded-md"
            />
          ))}
        </div>
      </section>

      {/* Related Products Section */}
      <section className="container mx-auto my-10 p-4">
        <h3 className="text-2xl font-bold mb-6">See More Puppies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold">{pet.name}</h4>
              <p className="text-blue-500 font-bold mt-2">{pet.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Registration Section */}
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-lg">Register Now So You Don't Miss Our Programs</p>
            <div className="flex items-center mt-4 md:mt-0 md:ml-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="px-4 py-2 rounded-md text-gray-800"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 text-white px-6 py-2 rounded-md ml-2"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>

        {/* Navigation Links */}
        <div className="container mx-auto flex justify-center space-x-4 mt-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/category" className="hover:underline">Category</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>

          {/* Social Media Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../images/SocialMedia/Facebook LOGO.png" alt="Facebook" className="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/youtube-icon.svg" alt="YouTube" className="w-6 h-6 hover:opacity-75" />
          </a>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright Section */}
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 Monito. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;

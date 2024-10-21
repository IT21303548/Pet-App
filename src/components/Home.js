// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import petImage from '../images/HomePet.jpeg';
import { default as petImage1, default as petImage2, default as petImage3 } from '../images/Pet.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [petsResponse, productsResponse] = await Promise.all([
          axios.get('https://monitor-backend-rust.vercel.app/api/pets'),
          axios.get('https://monitor-backend-rust.vercel.app/api/products'),
        ]);
        setPets(petsResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email cannot be empty.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid.');
    } else {
      setEmailError('');
      console.log('Subscribing with email:', email);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Navbar 
        handleSearch={handleSearch} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto py-10 flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">One More Friend</h2>
          <h3 className="text-2xl text-blue-500 mb-4">Thousands More Fun!</h3>
          <p className="mb-6">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. 
            We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <Link to="/intro">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">
                View Intro
              </button>
            </Link>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={petImage} alt="Pet" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* What's New Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">What's new?</h2>
          <button className="text-blue-500 hover:underline">View more &gt;</button>
        </div>
        <h3 className="text-lg mb-4">Take A Look At Some Of Our Pets</h3>

        {/* Pet Slider Section with SwiperJS */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {loading ? (
            <SwiperSlide><p>Loading pets...</p></SwiperSlide>
          ) : (
            pets.map((pet) => (
              <SwiperSlide key={pet.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={pet.image} alt={`Pet ${pet.name}`} className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-lg font-semibold">{pet.name} - {pet.breed}</h4>
                <p>Gender: {pet.gender}</p>
                <p>Age: {pet.age}</p>
                <p className="text-blue-500 font-bold mt-2">${pet.price}</p>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </section>

      {/* Product Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Hard to choose the right products for your pets?</h2>
          <button className="text-blue-500 hover:underline">View more &gt;</button>
        </div>
        <h3 className="text-lg mb-4">Our Products</h3>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-500 font-bold mt-2">${product.price}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Useful Pet Knowledge Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Useful Pet Knowledge</h2>
          <button className="text-blue-500 hover:underline">View more &gt;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[petImage1, petImage2, petImage3].map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img src={image} alt={`Pet Knowledge ${index + 1}`} className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-bold">Pet Knowledge</h4>
              <p className="font-bold">What is a Pomeranian? How to identify Pomeranian Dogs</p>
              <p>The Pomeranian is always one of the cutest pets. They are small, lovely, smart, friendly, and skillful.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toggle Dark Mode Button */}
      <button 
        onClick={toggleDarkMode} 
        className={`fixed bottom-4 right-4 p-2 rounded-full shadow-md transition-colors ${darkMode ? 'bg-yellow-500' : 'bg-gray-800'} text-white`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Footer 
        email={email} 
        setEmail={setEmail} 
        emailError={emailError} 
        handleSubscribe={handleSubscribe} 
      />
    </div>
  );
};

export default Home;

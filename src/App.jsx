import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-800 font-serif scroll-smooth">

      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900 tracking-wide">FZL Driving School</h1>
          <div className="space-x-8 text-blue-900 font-medium">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#vehicles" className="hover:text-blue-600 transition">Vehicles</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/car-side.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-wide"
          >
            Professional Driving Lessons in Johannesburg
          </motion.h1>
          <p className="text-xl leading-relaxed mb-10">
            Excellence. Safety. Confidence. Preparing South African drivers for success on the road.
          </p>
          <a href="tel:0835326609" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition">
            Book Now
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
        <img src="/images/car-side.png.png" alt="FZL Training Truck" className="rounded-3xl shadow-2xl w-full" />
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Premium Driver Training</h2>
          <p className="text-lg leading-loose text-gray-700">
            FZL Driving School provides structured, professional instruction tailored for South African roads. Our certified instructors ensure every learner gains confidence, discipline and advanced defensive driving skills.
          </p>
        </div>
      </section>

      {/* VEHICLES */}
      <section id="vehicles" className="py-32 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-16">Our Training Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
   <img 
  src="/images/truck-front.png" 
  alt="Truck" 
  className="w-64 h-auto rounded-3xl shadow-2xl" 
/>

<img 
  src="/images/car-front.png.png" 
  alt="Car Front" 
  className="w-64 h-auto rounded-3xl shadow-2xl" 
/>

<img 
  src="/images/car-side.png" 
  alt="Car Side" 
  className="w-64 h-auto rounded-3xl shadow-2xl" 
/>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-blue-100 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-20">Our Pricing</h2>
          <div className="grid md:grid-cols-2 gap-16">

            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-blue-900 mb-8">CODE 08</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>LEARNERS TUITION — R200.00</li>
                <li>1 LESSON CODE 08 — R150.00</li>
                <li>5 LESSON CODE 08 — R750.00</li>
                <li>10 LESSON CODE 08 — R1500.00</li>
                <li>CAR HIRE (Around JHB Only) — R500.00</li>
                <li>FULL COURSE — R3200.00 (16+2 Free Lessons)</li>
                <li>BOOKING FEE — R228.00</li>
              </ul>
              <a href="tel:0835326609" className="inline-block mt-8 bg-blue-800 text-white px-8 py-3 rounded-xl hover:bg-blue-900 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-blue-900 mb-8">CODE 10</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>1 LESSON CODE 10 — R150.00</li>
                <li>5 LESSON CODE 10 — R750.00</li>
                <li>10 LESSON CODE 10 — R1500.00</li>
                <li>TRUCK HIRE (Around JHB Only) — R550.00</li>
                <li>BOOKING FEE — R240.00</li>
              </ul>
              <a href="tel:0835326609" className="inline-block mt-8 bg-blue-800 text-white px-8 py-3 rounded-xl hover:bg-blue-900 transition">
                Book Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-900 text-white py-32 text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
        <p className="text-xl mb-6">📞 <a href="tel:0835326609" className="underline">083 532 6609</a></p>
        <p className="text-xl mb-6">📱 <a href="tel:0100230977" className="underline">010 023 0977</a></p>
        <p className="text-xl mb-6">📍 Auckland Park, Johannesburg</p>
        <p className="text-lg">Open Monday - Saturday</p>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a href="https://wa.me/27835326609" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl text-2xl z-50 transition">
        💬
      </a>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-blue-200 text-center py-8">
        © {new Date().getFullYear()} FZL Driving School. All Rights Reserved.
      </footer>

    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';
import './PatientOpinions.css';

const PatientOpinions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample patient opinions data
  const opinions = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      treatment: "Cardiac Surgery",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836026-d5c8c5ab235e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      text: "The care I received was exceptional. The doctors took time to explain everything and the hospital facilities were world-class. My recovery has been smooth thanks to their post-treatment support."
    },
    {
      id: 2,
      name: "Robert Chen",
      location: "Sydney, Australia",
      treatment: "Orthopedic Surgery",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      text: "From consultation to post-surgery care, the team was professional and compassionate. The results exceeded my expectations and I'm back to my active lifestyle."
    },
    {
      id: 3,
      name: "Aisha Patel",
      location: "London, UK",
      treatment: "Cancer Treatment",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      text: "The oncology department provided excellent care during my treatment. The staff was supportive throughout my journey and the facilities were top-notch."
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      location: "Toronto, Canada",
      treatment: "Neurology Treatment",
      rating: 4,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      text: "The medical team was knowledgeable and caring. They explained all options clearly and helped me make informed decisions about my treatment."
    }
  ];

  const nextOpinion = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === opinions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevOpinion = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? opinions.length - 1 : prevIndex - 1
    );
  };

  const goToOpinion = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextOpinion();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    //  bg-gradient-to-br from-blue-50 to-indigo-50
    <section className="patient-opinions-section bg-sectiondiv py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-blue-100/30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-indigo-100/30"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-200/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Stories of <span className="text-blue-600">Healing</span> & <span className="text-blue-600">Hope</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what our patients have to say about their healthcare journey with us
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Arrows */}
          <motion.button 
            onClick={prevOpinion}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all duration-300 border border-blue-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-600 text-lg" />
          </motion.button>
          
          <motion.button 
            onClick={nextOpinion}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all duration-300 border border-blue-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-600 text-lg" />
          </motion.button>

          {/* Testimonial Carousel */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-blue-100/50"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Patient Image */}
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="relative">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={opinions[currentIndex].image} 
                          alt={opinions[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                        <FaQuoteLeft className="text-sm" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-6">
                      {/* Star Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                          >
                            <FaStar 
                              className={i < opinions[currentIndex].rating ? "text-yellow-400" : "text-gray-300"} 
                              size={20}
                            />
                          </motion.div>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 text-lg italic mb-6 relative">
                        <FaQuoteLeft className="text-blue-200 text-3xl absolute -left-8 -top-2" />
                        {opinions[currentIndex].text}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-xl text-gray-800 mb-2">
                        {opinions[currentIndex].name}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-600 text-sm">
                        <div className="flex items-center justify-center md:justify-start">
                          <FaMapMarkerAlt className="text-blue-400 mr-2" />
                          <span>{opinions[currentIndex].location}</span>
                        </div>
                        
                        <div className="flex items-center justify-center md:justify-start">
                          <FaStethoscope className="text-blue-400 mr-2" />
                          <span>{opinions[currentIndex].treatment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {opinions.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToOpinion(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                }`}
                whileHover={{ scale: 1.3 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative bottom element */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center text-sm text-gray-500">
            <div className="h-px w-16 bg-gray-300 mr-3"></div>
            <span>Trusted by patients worldwide</span>
            <div className="h-px w-16 bg-gray-300 ml-3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientOpinions;
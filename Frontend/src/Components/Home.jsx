import React, { useRef, useEffect } from "react";
import video from "../Assets/home1_video.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import businessVid from "../Assets/business-growth.webm";

function Home() {
  const heroRef = useRef(null); // Reference for hero section
  const aboutRef = useRef(null); // Reference for about section

  useGSAP(() => {
    // Function to animate elements when they come into view
    const animateOnScroll = (ref, animationClass, initialX, initialOpacity) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if(animationClass === 'main-heading')
              {
                gsap.to(`.${animationClass}`, {
                  duration: 1,
                  x: 0,
                  opacity: 1,
                  ease: "power2.out",
                });
              }
              else{
                gsap.to(`.${animationClass}`, {
                  duration: 1,
                  x: 0,
                  opacity: 1,
                  ease: "power2.out",
                });
              }
            } else {
              gsap.to(`.${animationClass}`, {
                duration: 0.5,
                x: initialX,
                opacity: initialOpacity,
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    };

    // Observe both hero and about sections
    animateOnScroll(heroRef, "main-heading", -5, 0);
    animateOnScroll(heroRef, "main-description", 50, 0);
    animateOnScroll(aboutRef, "about-section", -100, 0);
    animateOnScroll(aboutRef, "about-content", 100, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div id="home"
        ref={heroRef}
        className="relative bg-black h-screen flex justify-center items-center"
      >
        {/* Text Overlay */}
        <div className="absolute text-center text-white px-6 md:px-20" >
          <h1 className="main-heading text-3xl md:text-5xl font-bold opacity-0 -translate-x-20">
            Empowering Businesses with Smart Solutions <br /> Streamline,
            Manage, and Grow!
          </h1>
          <p className="main-description mt-4 text-sm md:text-lg max-w-3xl mx-auto opacity-0 translate-x-20">
            Our platform is designed to simplify business operations for
            shopkeepers and entrepreneurs. From managing inventory, generating
            QR codes, and tracking expenses to creating seamless billing
            systems, we provide powerful tools to enhance efficiency and drive
            growth. Elevate your business with our intuitive and feature-rich
            solution today!
          </p>
        </div>

        {/* Background Video */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* About Section */}
      <div id="about"
        ref={aboutRef}
        className="bg-black flex flex-col md:flex-row justify-center items-center py-20 bg-gray-900 text-white"
      >
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={businessVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-12">
          <h2 className="about-section text-2xl md:text-4xl font-bold mb-4 opacity-0 -translate-x-20">
            About Our Platform
          </h2>
          <p className="about-content text-lg md:text-xl opacity-0 translate-x-20">
            We help businesses streamline operations through bar code
            technology, automated billing, and inventory management. Our
            platform ensures efficiency and growth for modern shopkeepers. With
            our innovative tools, shop owners can effortlessly track stock
            levels and prevent shortages. Seamless QR code integration enables
            quick product scanning, reducing checkout times and improving
            customer satisfaction. Our automated billing system minimizes errors
            and accelerates transactions, making financial management
            hassle-free. Access real-time analytics and reports to make
            data-driven decisions that drive profitability. Whether you're a
            small retailer or a large enterprise, our solution adapts to your
            business needs, ensuring long-term success. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

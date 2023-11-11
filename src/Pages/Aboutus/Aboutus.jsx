import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
       <div className='mt-[80px]'>
       <center>
            <img src="/assets/logo.png" alt="" />

        </center>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-500 mb-8">About Us - CoffeeX</h1>
        <div className="prose max-w-2xl mx-auto p-[15px]">
          <p className="text-lg">
            Welcome to Your Coffee Shop, where your love for coffee meets convenience. We're more than just a coffee shop; we're your daily dose of energy and comfort. Our passion for coffee and commitment to quality set us apart.
          </p>
          <p className="text-lg">
            Founded in 1998, we've been serving the finest coffee, pastries, and more to the community. Our mission is to provide you with a memorable coffee experience, whether you're on the go or relaxing in our cozy cafe.
          </p>
          <p className="text-lg">
            What makes us special? Our focus on innovation. We've introduced a cutting-edge pre-ordering system that allows you to skip the wait and enjoy your favorite coffee and snacks at your convenience. Simply browse our menu, place your order online, and pick it up when it suits you. No more lines, no more waiting – just pure coffee joy.
          </p>
          <p className="text-lg">
            Our team of dedicated baristas crafts each cup with precision, ensuring every sip is a delight. We source our coffee beans from sustainable and ethical suppliers, supporting local communities and the environment.
          </p>
          <p className="text-lg">
            At Your Coffee Shop, we're not just a coffee destination; we're a community. Join us for events, live music, and workshops, or simply relax and catch up with friends in our welcoming space.
          </p>
          <p className="text-lg">
            Thank you for being a part of our journey. We look forward to serving you your perfect cup of coffee, exactly the way you like it.
          </p>
        </div>
      </div>
       </div>
    </section>
  );
};

export default AboutUs;

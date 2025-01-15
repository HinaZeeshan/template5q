import Image from "next/image";
import girl2 from "/public/images/unsplash_vjMgqUkS8q8.png";

const About2 = () => {
  return (
    <section className="relative w-full flex bg-[#2A7CC7] justify-center items-center mt-10 lg:mt-16">
      {/* Right Side Blue Section */}
      <div className="w-full lg:w-1/2 h-full px-4 md:px-8 lg:px-16 xl:px-[250px] py-12 lg:py-16 flex flex-col justify-center">
        <div className="max-w-lg flex flex-col gap-6">
          <h5 className="text-white text-base md:text-lg font-bold leading-6 tracking-[0.1px]">
            WORK WITH US
          </h5>
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-8 md:leading-[50px] tracking-[0.2px]">
            Now Let’s grow Yours
          </h2>
          <p className="text-white text-sm md:text-base leading-5 md:leading-6 tracking-[0.2px]">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
          </p>
          <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-5 mt-6">
            <span className="text-white text-sm font-bold">Button</span>
          </button>
        </div>
      </div>

      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 h-full relative flex justify-center items-center">
        <Image
          src={girl2}
          alt="Testimonial Background"
          className="w-[300px] md:w-[400px] lg:w-[570px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default About2;









// import Image from "next/image"
// import girl2 from "/public/images/unsplash_vjMgqUkS8q8.png" 
//  {/* groW */}
//  const About2 = () => {
//      return (
//  <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[60px]">
          
//   {/* Right Side Blue Section */}
//   <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
//     <div className="w-[438px] flex flex-col gap-[24px]">
//       <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
//       <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
//       Now Let’s grow Yours
//       </h2>
//       <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
//       The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
//       </p>
//       <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
//         <span className="text-white text-sm font-bold">Button</span>
//       </button>
//     </div>
//   </div>
//   {/* Left Side Image */}
//   <div className="w-[540px] md:w-1/2 h-full relative">
//     <Image
//       src={girl2}
//       alt="Testimonial Background"
//       className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
//     />
//   </div>

// </section>




//    )
//  }

// export default About2


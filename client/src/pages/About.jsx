import React from 'react';
import { im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, about } from '../assets/index.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '11px',
    customPaging: function (i) {
      return (
        <button
          className="slick-dot bg-black"
          style={{ backgroundColor: 'white', borderRadius: '100%', width: '20px', height: '20px' }}
        >
          {/* You can add additional styling to customize the dots */}
        </button>
      );
    },
  };

  return (
    <section className="bg-[#17191d] h-[1500px] min-h-full flex rounded-xl">
      <div className='absolute w-[95%] m-auto mt-3 ml-8'>
        <div className="mt-10 flex">
          <img src={about} alt="" className='h-[600px] w-[87%] max-w-full rounded-lg mb-8 blur-sm'/>

          <div className="absolute top-[17%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-[10] text-[#9c4040] text-6xl font-bold font font-poppins">
            WebFund 
          </div>
          <div className="absolute top-[23%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 text-[#602626] text-4xl font-semibold font-poppins text-center z-[10]">
            " Empowering Crowdfunding with<br />Blockchain and Web3. "
          </div>
          
        </div>
        <div className=' flex justify-between'>
          <div className='absolute top-[40%] left-[31%] text-[#e1e5f2] text-6xl font-bold font-poppins z-[10]'> 
            ABOUT US 
          </div>
        </div>

        <div className='flex mb-4 ml-4 mt-20'>
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[340px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectone">
            <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
              Web3 Framework:              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
              Decentralized internet enabling peer-to-peer interactions, empowering users with control over their data and transactions.              </p>
            </div>
          </div>
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[330px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectone">
            <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
              Blockchain Integration:
              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
              Revolutionize trust and security in your operations by leveraging our blockchain solution. Seamlessly record, verify, and trace every transaction, establishing an immutable, transparent, and tamper-resistant digital ledger for your business.              </p>
            </div>
          </div>
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[330px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectone">
            <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
              Modern day Crowdfunding:
              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
              Crowdfunding platforms leveraging technology to enable individuals to raise funds for projects or causes.                </p>
            </div>
          </div>
        </div>

        <div className=' flex justify-between mb-6 ml-10 mt-20'>
          <div className='absolute top-[70%] left-[34%] text-[#e1e5f2] text-6xl font-bold font-poppins z-[10]'> 
          PERKS 
          </div>
        </div>
        
        <Slider {...settings} className="w-full max-w-[1100px]">
          {data.map((d) => (
            <div key={d.name} className="bg-[#e5e5e5] h-[400px] text-black rounded-xl font-poppins">
              <div className='h-56 bg-[#faedcd] flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-[198px] w-[87%] rounded-[15px]"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const data = [
  {
    name: 'Immutable Provenance',
    img: im1,
    review: 'Geographical Identification Tagging on blockchain ensures an unchangeable record of product origins, fostering trust.',
  },
  {
    name: 'Anti-Fraud Arsenal',
    img: im2,
    review: 'Bolstering anti-counterfeiting measures, the fusion of Web3 and blockchain verifies funding authenticity.',
  },
  {
    name: 'Decentralized Fundraising',
    img: im3,
    review: 'Utilize blockchain to enable transparent and secure fundraising without intermediaries.',
  },
  {
    name: 'Data Privacy',
    img: im4,
    review: 'Enables user control over data, ensuring their privacy is protected while providing transparency.',
  },
  {
    name: 'Decentralized Ecosystem',
    img: im5,
    review: 'By collaborating Web3 with blockchains decentralized nature, a robust trust ecosystem is established.',
  },
  {
    name: 'Interoperability',
    img: im6,
    review: ' Facilitate seamless integration with various blockchain networks and interoperability with other decentralized applications (dApps)',
  },
  {
    name: 'Tokenization',
    img: im7,
    review: 'Issue tokens representing project ownership or rewards, fostering community engagement and incentivizing backers.',
  },
  {
    name: 'Real-time Monitoring',
    img: im8,
    review: 'Blockchain-powered Web3 enables real-time monitoring, providing stakeholders with up-to-the-minute campaign funding and status updates.',
  },
  {
    name: 'Automated Checks',
    img: im9,
    review: 'Automated compliance checks, made possible by blockchain and smart contracts, streamline regulatory processes.',
  },
  {
    name: 'Immutable Audits',
    img: im10,
    review: 'Blockchains immutability ensures that records related to crowdfunding are tamper-proof, providing a reliable source for audits.',
  },
];
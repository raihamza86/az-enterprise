import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id:1,
    name: "Sana Khan",
    title: "Web Developer",
    image: "/team/tm1.jpg",
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id:2,
    name: "Ali Raza",
    title: "UI/UX Designer",
    image: "/team/tm2.png",
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id:3,
    name: "Ayesha Malik",
    title: "Project Manager",
    image: "/team/tm3.jpg",
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id:4,
    name: "Usman Javed",
    title: "Frontend Engineer",
    image: "/team/tm4.png",
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id:5,
    name: "Kiran Shah",
    title: "Marketing Head",
    image: "/team/tm5.jpg",
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id:6,
    name: "Maria Ahmed",
    title: "QA Engineer",
    image: "/team/tm6.jpg",
    links: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
];

const TeamMember = () => {
  return (
    <>
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }

        .shine-wrapper img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .shine-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }

        .group:hover .shine-wrapper::after {
          animation: shine-move 1s ease-in-out;
        }

        @keyframes shine-move {
          100% {
            left: 125%;
          }
        }
      `}</style>

      <div className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Link to={`/teamdetails/${member.id}`}>
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl text-center shadow-md hover:bg-[#317EFE] transition-all"
            >
              <div className="shine-wrapper w-72 mx-auto mb-4">
                <img src={member.image} alt={member.name} />
              </div>

              {/* Social Icons with links */}
              <div className="flex justify-center gap-4 text-sm text-gray-700 group-hover:text-white mb-4 transition-all">
                <a
                  href={member.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white group-hover:bg-white/30 text-gray-700 group-hover:text-white p-2 rounded-full border border-gray-300 hover:border-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white group-hover:bg-white/30 text-gray-700 group-hover:text-white p-2 rounded-full border border-gray-300 hover:border-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white group-hover:bg-white/30 text-gray-700 group-hover:text-white p-2 rounded-full border border-gray-300 hover:border-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={member.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white group-hover:bg-white/30 text-gray-700 group-hover:text-white p-2 rounded-full border border-gray-300 hover:border-white transition"
                >
                  <FaInstagram />
                </a>
              </div>

              <h3 className="text-2xl font-medium text-gray-800 group-hover:text-white transition">
                {member.name}
              </h3>
              <p className="text-gray-500 text-lg group-hover:text-white transition">
                {member.title}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamMember;

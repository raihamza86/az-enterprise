import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { useParams } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Sana Khan",
    title: "Web Develope",
    image: "/team/tm1.jpg",
    bio: "Kiran is a dynamic marketing strategist with a decade of experience in brand management and digital campaigns.",
    social: {
      facebook: "https://facebook.com/kiranshah",
      twitter: "https://twitter.com/kiranshah",
      linkedin: "https://linkedin.com/in/kiranshah",
      instagram: "https://instagram.com/kiran_gram",
    },
    skills: [
      { name: "Brand Strategy", percentage: 90 },
      { name: "Digital Campaigns", percentage: 85 },
      { name: "Market Research", percentage: 75 },
      { name: "Leadership", percentage: 80 },
    ],
  },
  {
    id: 2,
    name: "Ali Raza",
    title: "UI/UX Designer",
    image: "/team/tm2.png",
    bio: "Ali creates intuitive and visually appealing designs that enhance user experience and accessibility.",
    social: {
      facebook: "https://facebook.com/aliraza",
      twitter: "https://twitter.com/aliraza_ui",
      linkedin: "https://linkedin.com/in/aliraza",
      instagram: "https://instagram.com/raza_designs",
    },
    skills: [
      { name: "UI Design", percentage: 95 },
      { name: "UX Research", percentage: 80 },
      { name: "Prototyping", percentage: 85 },
      { name: "Interaction Design", percentage: 75 },
    ],
  },
  {
    id: 3,
    name: "Ayesha Malik",
    title: "Project Manager",
    image: "/team/tm3.jpg",
    bio: "Sana is a full-stack developer skilled in modern frontend and backend technologies, with a focus on clean code.",
    social: {
      facebook: "https://facebook.com/sanakhan",
      twitter: "https://twitter.com/sana_codes",
      linkedin: "https://linkedin.com/in/sanakhan",
      instagram: "https://instagram.com/sana.dev",
    },
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "Node.js", percentage: 85 },
      { name: "MongoDB", percentage: 80 },
      { name: "REST APIs", percentage: 75 },
    ],
  },
  {
    id: 4,
    name: "Usman Javed",
    title: "Frontend Engineer",
    image: "/team/tm4.png",
    bio: "Maria ensures software quality and performance with deep expertise in automated testing tools and strategies.",
    social: {
      facebook: "https://facebook.com/mariaahmed",
      twitter: "https://twitter.com/maria_qa",
      linkedin: "https://linkedin.com/in/mariaahmed",
      instagram: "https://instagram.com/maria.codes",
    },
    skills: [
      { name: "Automated Testing", percentage: 90 },
      { name: "Bug Tracking", percentage: 80 },
      { name: "Regression Testing", percentage: 85 },
      { name: "Performance Testing", percentage: 75 },
    ],
  },
  {
    id: 5,
    name: "Kiran Shah",
    title: "Marketing Head",
    image: "/team/tm5.jpg",
    bio: "Maria ensures software quality and performance with deep expertise in automated testing tools and strategies.",
    social: {
      facebook: "https://facebook.com/mariaahmed",
      twitter: "https://twitter.com/maria_qa",
      linkedin: "https://linkedin.com/in/mariaahmed",
      instagram: "https://instagram.com/maria.codes",
    },
    skills: [
      { name: "Automated Testing", percentage: 80 },
      { name: "Bug Tracking", percentage: 86 },
      { name: "Regression Testing", percentage: 81 },
      { name: "Performance Testing", percentage: 70 },
    ],
  },
  {
    id: 6,
    name: "Maria Ahmed",
    title: "QA Engineer",
    image: "/team/tm6.jpg",
    bio: "Maria ensures software quality and performance with deep expertise in automated testing tools and strategies.",
    social: {
      facebook: "https://facebook.com/mariaahmed",
      twitter: "https://twitter.com/maria_qa",
      linkedin: "https://linkedin.com/in/mariaahmed",
      instagram: "https://instagram.com/maria.codes",
    },
    skills: [
      { name: "Automated Testing", percentage: 80 },
      { name: "Bug Tracking", percentage: 86 },
      { name: "Regression Testing", percentage: 81 },
      { name: "Performance Testing", percentage: 70 },
    ],
  },
];

const TeamDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="text-center text-red-600 mt-20 text-xl">
        Team member not found.
      </div>
    );
  }

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

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row mt-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 group">
            <div className="shine-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="w-[300px] h-[350px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl text-[#14203A] font-bold">{member.name}</h1>
            <h2 className="text-lg font-semibold text-gray-500 mt-4">{member.title}</h2>

            {/* Social links */}
            <div className="flex space-x-4 mt-6 text-[#317EFE] text-3xl">
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                <TiSocialFacebook className="hover:text-[#14203A]" />
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-[#14203A]" />
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-[#14203A]" />
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-[#14203A]" />
              </a>
            </div>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">{member.bio}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="w-full p-6 lg:p-10">
          <h2 className="text-3xl text-[#14203A] font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {member.skills.map((skill, index) => (
              <div key={index}>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <h3 className="text-xl font-medium">{skill.name}</h3>
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="mt-8">
            <h3 className="text-3xl text-[#14203A] font-bold">Honors & Awards</h3>
            <p className="text-gray-600 mt-2 text-xl">
              Recognized for outstanding contributions in their field, leadership in innovation,
              and consistent excellence in teamwork and project delivery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetail;

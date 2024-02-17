import React from 'react';

const About = (props) => {
  const appDetails = {
    title: "About Our News App",
    description: "Stay informed with the latest news from around the world.",
    features: [
      "Access top headlines from various news sources.",
      "Customize your news feed by selecting preferred categories.",
      "Read detailed articles with images and descriptions.",
      "Read news in dark mode"
    ],
    contact: {
      email: "masterpranavjain2@gmail.com",
      
      address: "123 News Street, City, Country",
    },
  };

  const myDetails = {
    name: "Pranav Jain",
    role: "Founder & Developer",
    bio: "",
    github: "https://github.com/PranavJAIN12",
    linkedin: "https://www.linkedin.com/in/pranav-jain-32179722a/",
    twitter: "https://twitter.com/PranavJain999",
  };

  return (
    <div className="container" style={{marginTop:'70px', color: props.mode==="dark"?"white":"black"}}>
      <h2>{appDetails.title}</h2>
      <p>{appDetails.description}</p>
      <h3>Features:</h3>
      <ul>
        {appDetails.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3>Contact:</h3>
      <p>Email: {appDetails.contact.email}</p>
      {/* <p>Phone: {appDetails.contact.phone}</p> */}
      <p>Address: {appDetails.contact.address}</p>

      <hr />

      <h2>About the Developer</h2>
      <p><strong>{myDetails.name}</strong> - {myDetails.role}</p>
      <p>{myDetails.bio}</p>
      <p>Find me on: 
        <a href={myDetails.github} target="_blank" rel="noopener noreferrer"> GitHub</a>, 
        <a href={myDetails.linkedin} target="_blank" rel="noopener noreferrer"> LinkedIn</a>, 
        <a href={myDetails.twitter} target="_blank" rel="noopener noreferrer"> Twitter</a>
      </p>
    </div>
  );
};

export default About;

import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
const Info = {
  name: "Miguel",
  lastName: "Alvarez",
  imageUrl: "https://avatars.githubusercontent.com/u/18540272?v=4",
  imageAlt: "miguel",
  jobs: "Full Stack Developer",
  description: "Desarrollando Aplicaciones de Alta Calidad",
  city: "Medellin, Antioquia.",
  networks : [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: FaFacebook(),
    },
    {
      name: "Twitter",
      url: "www.twitter.com",
      icon: FaTwitter(),
    },
    {
      name: "Linkedin",
      url: "https://www.likedin.com",
      icon: FaLinkedin(),
    },
    {
      name: "Github",
      url: "www.github.com",
      icon: FaGithub(),
    },
  ],
};
export { Info };

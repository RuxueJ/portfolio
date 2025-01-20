import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, path: "https://github.com/RuxueJ" },
  { icon: <FaGithub />, path: "https://github.com/RuxueJ" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

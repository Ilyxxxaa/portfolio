import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

interface IProps {
  divClassName: string;
  linkClassName: string;
}

export const Social = ({ divClassName, linkClassName }: IProps) => {
  return (
    <div className={divClassName}>
      <a
        className={linkClassName}
        href="https://www.instagram.com/ilya_kotsur/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram size={25} />
      </a>
      <a
        className={linkClassName}
        href="https://github.com/Ilyxxxaa"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub size={25} />
      </a>
      <a
        className={linkClassName}
        href="https://twitter.com/ilyxxxaa"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter size={25} />
      </a>
      <a
        className={linkClassName}
        href="https://www.linkedin.com/in/ilyxxxaa/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={25} />
      </a>
    </div>
  );
};

export default Social;

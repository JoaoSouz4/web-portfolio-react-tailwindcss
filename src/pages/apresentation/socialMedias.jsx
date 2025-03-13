import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function SocialMedias() {
  return (
    <div className="absolute bottom-5 flex justify-center">
      <div className="flex gap-4 border border-light rounded-full py-2 px-8">
        <div
          className="hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1"
          onClick={() => {
            window.open(
              'https://www.instagram.com/jhoonny.art/?next=%2F',
              '_blank'
            );
          }}
        >
          <AiFillInstagram className="text-3xl" />
        </div>

        <div
          className="hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1"
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/',
              '_blank'
            );
          }}
        >
          <AiFillLinkedin className="text-3xl" />
        </div>

        <div
          className="hover:bg-primary hover:ease-in-out hover:duration-500 rounded-full p-1"
          onClick={() => {
            window.open('https://github.com/JoaoSouz4', '_blank');
          }}
        >
          <AiFillGithub className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

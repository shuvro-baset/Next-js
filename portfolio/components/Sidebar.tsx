import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg"
        alt=""
        className="w-32 h-32 mx-auto rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>shuvro baset</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Engineer
      </p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* social icon  */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex justify-center space-x-2 align-center">
          <GoLocation className="w-8 h-8" />
          <span> Dhaka, Bangladesh</span>
        </div>
        <p className="my-2">shuvro.aps.75@gmail.com</p>
        <p className="my-2">+8801673841675</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Toogle Theme
      </button>
    </div>
  );
};

export default Sidebar;

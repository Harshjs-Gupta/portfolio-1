import { motion } from "framer-motion";
import profileImage from "../assets/profile-img.png";

export default function ProfileImg() {
  return (
    <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-b from-[#282548] via-[#00ffbb] to-[#6bff6b] overflow-hidden flex items-center justify-center">
      <motion.img
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[400px] md:w-[400px] object-cover rounded-full"
        src={profileImage}
        alt="ProfileImg"
      />
    </div>
  );
}

import { Link as ViewTransitionsLink } from "next-view-transitions";
import { motion, Variants } from 'framer-motion';
import { scale, slide } from "../animations/anim";

interface NavItemData {
  title: string;
  href: string;
  index: number;
}

interface NavLinkProps {
  data: NavItemData;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  closeMenu: () => void;
}

export default function NavLink({ data, isActive, setSelectedIndicator, closeMenu }: NavLinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide as Variants} 
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale as Variants} 
        animate={isActive ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-black rounded-full absolute -left-[20px] sm:-left-[30px]"
      />
      <ViewTransitionsLink href={href} onClick={closeMenu} className="text-black hover:text-gray-500 transition-colors w-full">
        {title}
      </ViewTransitionsLink>
    </motion.div>
  );
}
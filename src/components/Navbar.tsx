import { HStack, Image, keyframes } from "@chakra-ui/react";
import logo from "../assets/fire.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { motion } from "framer-motion";

// Define the keyframes for the rotation animation
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

interface Props {
  onSearch: (searchText: string) => void;
}

// Create a Motion component with the spin animation
const MotionImage = motion(Image);

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      {/* <Image src={logo} boxSize={'60px'}></Image> */}
      <MotionImage
        src={logo}
        boxSize="60px"
        animation={`${spin} infinite 20s linear`}
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

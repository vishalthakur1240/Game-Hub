import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/fire.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
        <Image src={logo} boxSize={'60px'}></Image>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
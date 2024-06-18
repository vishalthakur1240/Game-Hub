import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelecter = ({ onSelectedPlatform, selectedPlatform }: Props) => {

  const {datas, error} = usePlatforms();
  if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
        <MenuList>
          {datas.map((platform) => <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>

  )
}

export default PlatformSelecter
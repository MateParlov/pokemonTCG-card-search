import FireIcon from './../../../assets/icons/typeIcons/FireIcon.png';
import GrassIcon from './../../../assets/icons/typeIcons/GrassIcon.png';
import LightingIcon from './../../../assets/icons/typeIcons/LightingIcon.png';
import WaterIcon from './../../../assets/icons/typeIcons/WaterIcon.png';
import MetalIcon from './../../../assets/icons/typeIcons/MetalIcon.png';
import FightingIcon from './../../../assets/icons/typeIcons/FightingIcon.png';
import ColorlessIcon from './../../../assets/icons/typeIcons/ColorlessIcon.png';
import FairyIcon from './../../../assets/icons/typeIcons/FairyIcon.png';
import DragonIcon from './../../../assets/icons/typeIcons/DragonIcon.png';
import PsychicIcon from './../../../assets/icons/typeIcons/PsychicIcon.png';
import DarknessIcon from './../../../assets/icons/typeIcons/DarknessIcon.png';
const IconType = type => {
  switch (type) {
    case 'Fire':
      return FireIcon;
    case 'Grass':
      return GrassIcon;
    case 'Lightning':
      return LightingIcon;
    case 'Water':
      return WaterIcon;
    case 'Metal':
      return MetalIcon;
    case 'Fighting':
      return FightingIcon;
    case 'Colorless':
      return ColorlessIcon;
    case 'Fairy':
      return FairyIcon;
    case 'Dragon':
      return DragonIcon;
    case 'Psychic':
      return PsychicIcon;
    case 'Darkness':
      return DarknessIcon;

    default:
      return null;
  }
};

export default IconType;

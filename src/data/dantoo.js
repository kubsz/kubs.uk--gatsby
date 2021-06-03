import minecraftitemids from '../assets/websites/minecraftitemids.png';
import robloxden from '../assets/websites/robloxden.jpg';
import dantoo from '../assets/websites/dantoo.jpg';
import arkcolorcodes from '../assets/websites/arkcolorcodes.png';
import totalcsgoBindsGenerator from '../assets/websites/totalcsgo-binds-generator.jpg';

let websites = [
  {
    name: 'Roblox Den',
    url: 'https://robloxden.com/',
    image: robloxden,
    description:
      'Developed the front-end of RobloxDen, an informative website detailing information about Roblox.',
    showOnIndex: true,
  },
  {
    name: 'Dantoo Corporate Site',
    url: 'https://dantoo.net/',
    image: dantoo,
    description:
      'A company website for Dantoo LTD, outlining the websites ran with a contact section.',
    showOnIndex: true,
  },
  {
    name: 'TotalCSGO Binds Generator',
    url: 'https://totalcsgo.com/binds/generator',
    image: totalcsgoBindsGenerator,
    description:
      'Developed a functional binds generator for the game CS:GO, along with a front-end keyboard.',
  },
  {
    name: 'Minecraft Color Codes',
    url: 'https://minecraftitemids.com/color-codes',
    image: minecraftitemids,
    description:
      'Worked on a component for MCItemIds to allow users to template Minecraft signs through a front-end application.',
  },
  {
    name: 'Ark Color IDs',
    url: 'https://arkids.net/color-ids',
    image: arkcolorcodes,
    description:
      'Worked on a section of ArkIDs showcasing various Ark color IDs with an ability to generate a command.',
  },
];

export default websites;

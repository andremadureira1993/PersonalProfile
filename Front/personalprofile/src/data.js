import { FaLinkedin, FaBook, FaGithub } from 'react-icons/fa';
import { MdWork, MdPersonPin } from 'react-icons/md';
import { GiTechnoHeart, GiStairsGoal } from 'react-icons/gi';
import { ImStackoverflow } from 'react-icons/im';
import React from 'react';
const sublinks = [
  {
    page: 'professional',
    links: [
      { label: 'Work experience', icon: <MdWork />, url: '/professional' },
      { label: 'Stacks', icon: <GiTechnoHeart />, url: '/professional' },
      { label: 'Looking Forward', icon: <GiStairsGoal />, url: '/professional' },
    ],
  },
  {
    page: 'personal',
    links: [
      { label: 'who am I', icon: <MdPersonPin />, url: '/personal' },
      { label: 'study', icon: <FaBook />, url: '/personal' }
    ],
  },
  {
    page: 'social',
    links: [
      { label: 'linkdin', icon: <FaLinkedin />, url: '/social' },
      { label: 'stackoverflow', icon: <ImStackoverflow />, url: '/social' },
      { label: 'github', icon: <FaGithub />, url: '/social' },
    ],
  },
];

export default sublinks;

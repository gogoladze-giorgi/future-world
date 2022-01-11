import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FaLevelUpAlt} from 'react-icons/fa';
import {GrMoney} from 'react-icons/gr';


export const SidebarData = [
    {
        title: "home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
        aName: 'list-item',
        id: 'side-bar-home'
    },
    {
        title: 'about_us',
        path: '/about-us',
        icon: <HiOutlineUserGroup/>,
        cName: 'nav-text',
        aName: 'list-item',
        id: 'side-bar-about-us'
    },
    {
        title: 'team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text',
        aName: 'list-item',
        id: 'side-bar-team'
    },
    {
        title: 'course_fees',
        path: '/fees',
        icon: <GrMoney/>,
        cName: 'nav-text',
        aName: 'list-item',
        id: 'side-bar-course-fees'
    },
    {
        title: 'levels',
        path: '/levels',
        icon: <FaLevelUpAlt/>,
        cName: 'nav-text',
        aName: 'list-item',
        id: 'side-bar-levels'
    },

];
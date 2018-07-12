/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 13:51:03 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-11 17:18:44
 */
import React from 'react';

import { DrawerNavigator, createDrawerNavigator } from 'react-navigation';

// --- All Pages
import HomePage from '../pages/HomePage';
import FixturePage from '../pages/FixturePage';
import UpdatesPage from '../pages/UpdatesPage';
import PhotosPage from '../pages/PhotosPage';
import VideosPage from '../pages/VideosPage';
import AboutUsPage from '../pages/AboutUsPage';
import StandingPage from '../pages/StandingPage';
import GitPage from '../pages/GitPage';


import Home from './Home';

const RootNav = createDrawerNavigator({
    Home: {
        screen: HomePage,
        navigationOption: {
            title: 'Home'
        }
    },

    Fixture: {
        screen: FixturePage,
        navigationOption: {
            title: 'Fixture Page'
        }
    },

    'Latest Updates': {
        screen: UpdatesPage,
        navigationOption: {
            title: 'Update Page'
        }
    },
    
    Photos: {
        screen: PhotosPage,
        navigationOption: {
            title: 'Photos Page'
        }
    },
    
    Videos: {
        screen: VideosPage,
        navigationOption: {
            title: 'Videos Page'
        }
    },

    AboutUs: {
        screen: AboutUsPage,
        navigationOption: {
            title: 'About Us Page'
        }
    },

    Standings: {
        screen: StandingPage,
        navigationOption: {
            title: 'Standing Page'
        }
    },

    GitPage: {
        screen: GitPage,
        navigationOption: {
            title: 'GitHub'
        }
    }
}, { 
    initialRouteName: 'GitPage'
});

export default RootNav;

import React from 'react';
import './About.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import Paper from '@material-ui/core/Paper';

const About =( ) => (
    <React.Fragment>
      <CssBaseline />
        <MyHeader />
          <Container >          
            <h1>
              About Johnathan Arroyo
            </h1>
            <Paper elevation={4} >
              <div className="contentInfo">
                <p>Age 14 I started learning  C++, computer fundamentals, systems design, and database architecture in school. I graduated from Elementary ahead of my peers at age 16 and entered University.</p>
                <p>I completed a System Engineering degree in 3 years and started working at age 19. I found a role in a large agency as a Junior Software Developer working on a Wix-like application being sold to small companies.</p>
                <p>After 1 year of work, I became a Senior Software Developer and spent evenings and weekends building my own PHP framework to solve some of the problems I was experiencing with existing CMS solutions and frameworks.</p>
                <p>At 22 I entered university again and completed a 4-year full-time degree in 3 years part-time all while working full-time with an American company as the only Engineer managing Magento, Joomla, Wordpress and much more. I custom-built many websites and plugins, and also managed all of the Infrastructure on-prem and in the cloud. </p>
                <p>At 25 I completed my third degree, a specialization in Information Security, while continuing to work full-time.</p>
                <p>After graduating I decided to become an Entrepreneur and sold my PHP framework to clients across Colombia in Bogota, Bucaramanga, and Cali. I also obtained clients in Spain and Costa Rica.</p>
                <p>I´m in Canada today thanks to my business, which is still running with my business partners in Colombia. </p>
                <p>Over the past 20 years, I have learned a great deal about computing, security, entrepreneurship, sales, marketing and much more. </p>
                <p>I´m highly skilled with programming languages, frameworks, database, security and much more including Wordpress, Joomla, Magento; databases like Oracle, PostgreSQL, Mysql/MariaDB; Using tools like JQuery, NodeJs, Bootstrap and knowledge in server administration alike Amazon AWS, Google Cloud, DigitalOcean.</p>
                <p>Currently, I´m learning Google Tensorflow, AI/ML, and working as a Technical co-founder at dietician.ai with a local Entrepreneur that I have had the good fortune to meet. </p>
              </div>            
            </Paper>
          </Container>
        <MyFooter />
  </React.Fragment>
);

export default About;

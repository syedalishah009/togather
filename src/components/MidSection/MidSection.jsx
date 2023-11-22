import React, { useEffect, useState } from 'react'
import './midsect.css'
import { Academic } from './components/Academic/Academic';
import Createive from './components/Creative/Createive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar/Sidebar';
import SideBarContents from './components/SideBarContents/SidebarContents'

const MidSection = () => {
    const [activeTab, setActiveTab] = useState('academic')
    const [activeSidebar, setSidebar] = useState(null);
   
    const handleClick = (item) => {
        setSidebar(item);
    };
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleSidebar = () => {
          setIsVisible(!isVisible);
        
      };

    // const handleResize = () => {
    //     setIsVisible(window.innerWidth > 600);
    // };
    // const closeMenu = () => {
    //     setIsVisible(false);
    //   };
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

      console.log(isVisible);
    const renderContent = () => {
        switch (activeTab) {
            case 'academic':
                return <Academic />;
            case 'creative':
                return <Createive />;
            //   case 'review':
            //     return <Review />;
            default:
                return null;
        }
    };
    return (
        <div className='midSect'>
            <div className="topContents">
                <h3>Follow Our Paper Writing Service On Social Media</h3>
                <p>Join the big family of our writing service on Instagram to get lots of handy tips and tricks and be the first to learn about our discounts!</p>
            </div>
            <div className="main">
                <FontAwesomeIcon className='icon-burger' icon={faBars} onClick={handleToggleSidebar} />

                <nav className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
                    <ul>
                        <li><a onClick={() => { setActiveTab('academic'); if(window.innerWidth<600){setIsVisible(false)} }} href="#academic">Academic</a></li>
                        <li><a onClick={() => { setActiveTab('creative'); if(window.innerWidth<600){setIsVisible(false)} }} href="#creative">Creative Writing</a></li>
                        <li><a onClick={() => { setActiveTab('review'); if(window.innerWidth<600){setIsVisible(false)} }} href="#reviews">Reviews</a></li>
                        <li><a onClick={() => { setActiveTab('academic'); if(window.innerWidth<600){setIsVisible(false)} }} href="#representation">Business Writing</a></li>
                        <li><a onClick={() => { setActiveTab('academic'); if(window.innerWidth<600){setIsVisible(false)} }} href="#representation">Presentation</a></li>
                    </ul>
                </nav>
                <div className="navContents">
                    {/* <Sidebar /> */}
                    <div className="sidebar">
            <ul>
                <li onClick={() => handleClick('Research Paper')}>Research Paper</li>
                <li onClick={() => handleClick('Term Paper')}>Term Paper</li>
                <li onClick={() => handleClick('Admission Essay')}>Admission Essay</li>
                <li onClick={() => handleClick('Annotated ')}>Annotated Bibliography</li>
                <li onClick={() => handleClick('Case Study')}>Case Study</li>
                <li onClick={() => handleClick('Literature Review')}>Literature Review</li>
                <li onClick={() => handleClick('Critical Thinking')}>Critical Thinking</li>
                <li onClick={() => handleClick('Thesis')}>Thesis/Dissertation</li>
            </ul>
        </div>
                    <div className="sideContents">
                        <SideBarContents activeBar={activeSidebar}/>
                    </div>
                </div>

                {renderContent()}
            </div>

        </div>
    )
}

export default MidSection
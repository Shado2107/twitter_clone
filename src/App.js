import React from 'react';
import './App.css';
import {AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
import {BiHomeCircle, BiHash, BiBell} from 'react-icons/bi';
import {MdMailOutline, MdBookmarkBorder} from 'react-icons/md';
import {FaUserCircle, FaEllipsisH} from 'react-icons/fa';
import {BsCardText} from 'react-icons/bs';

function App() {
  return (
    <div className="App">
        <div className="Main">
            <div className="Sidebar_Area">
               <div className="Twitter">
                    <AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem"/>
               </div>
               <div className="Icons">
                    <BiHomeCircle color="#1DA1F2" fontSize="2rem" />
                    <div>Home</div>
               </div>
               <div className="Icons">
                    <BiHash color="#1DA1F2" fontSize="2rem" />
                    <div>Explore</div>
               </div>
               <div className="Icons">
                    <BiBell color="#1DA1F2" fontSize="2rem" />
                    <div>Notification</div>
               </div>
               <div className="Icons">
                    <MdMailOutline color="#1DA1F2" fontSize="2rem" />
                    <div>Messages</div>
               </div>
               <div className="Icons">
                    <MdBookmarkBorder color="#1DA1F2" fontSize="2rem" />
                    <div>Bookmarks</div>
               </div>
               <div className="Icons">
                    <BsCardText color="#1DA1F2" fontSize="2rem" />
                    <div>Lists</div>
               </div>
               <div className="Icons">
                    <FaUserCircle color="#1DA1F2" fontSize="2rem" />
                    <div>Profiles</div>
               </div><div className="Icons">
                    <FaEllipsisH color="#1DA1F2" fontSize="2rem" />
                    <div>More</div>
               </div>
               <div className="Icons">
                    <button className="btn">
                        Tweet
                    </button>
               </div>
            </div>

            <div className="Main_Area">
               <div className="Home">
                    <div className="home">
                        Home
                    </div>
                    <div className="Star_icon">
                        <AiTwotoneStar color="#1DA1F2" fontSize="2rem"/>
                    </div>
               </div>
               <br></br>
               <div className="Create_post">
                    <div className="Add_text ">
                        <div className="Profile">

                        </div>
                    </div>
               </div>
            </div>

            <div className="Left_Sidebar_Area">
                Left_Sidebar_Area
            </div>
        </div>
    </div>
  );
}

export default App;

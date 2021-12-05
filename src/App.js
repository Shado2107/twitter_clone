import React from 'react';
import './App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineGif, AiOutlineGold, AiOutlinePicture, AiOutlineSmile, AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
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
                               <img src="/images/2.jpg" alt="images" style={{height:"37px", width:"37px", borderRadius:"50%"}}/>
                        </div>
                        <input type="Post" placeholder="what's happening"/>
                    </div>
                    <div className="Btns">
                    <div className="Icon">
                         <div className="Btns_icon">
                             <AiOutlinePicture fontSize="1.5rem" color="#1DAAF2"/> 
                         </div>
                         <div className="Btns_icon">
                             <AiOutlinePicture fontSize="1.5rem" color="#1DAAF2"/> 
                         </div>
                         <div className="Btns_icon">
                             <AiOutlineGif fontSize="1.5rem" color="#1DAAF2"/> 
                         </div>
                         <div className="Btns_icon">
                             <AiOutlineAlignLeft fontSize="1.5rem" color="#1DAAF2"/> 
                         </div>
                         <div className="Btns_icon">
                             <AiOutlineSmile fontSize="1.5rem" color="#1DAAF2"/> 
                         </div>
                         <div className="Tweets">
                              <button className="btns-tweet">
                                   Tweet
                              </button>
                         </div>
                    </div>
                    
               </div>
               </div>
               <div className="posted_Area">
                    <div className="Profile">
                         <div className="User_Detail">
                              <img src="/images/1.jpg" alt="logo" style={{ height:"30px", width:"30px", borderRadius:"50%" }}/>
                              <div className="User_Name">Pavel Romano</div>
                              <div className="User_id">@PavelRo</div>
                         </div>
                         <div className="Drop_down">
                              <AiOutlineDown fontSize="1rem" />
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

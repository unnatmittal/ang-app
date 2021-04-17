<div className="from_about">
            <div className="about_me">
                <h3>About Me</h3><br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className="skill">
              <h3>Skills</h3><br></br>
              <div className="skill_inner">
              <Skill
                name="C++"
              />
              <Skill 
                name="JAVA"
              />
              <Skill 
                name="Python"
              />
              <Skill 
                name="Web Development"
              />
              </div>
            </div>
            
            <div className="e">
              <h3>Experince</h3>
              <br></br>
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
            </div>

            <div className="e">
              <h3>Education</h3><br></br>
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />

            </div>

      </div>



import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Skill from "./Skill.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";

import "./Profile.css";
import "./fromAbout.css";
import "./android.png";

function Profile() {
  return (
    <div className="profile">
      {/* first landing section: main Cover section  */}
      <div className="cover__section">
        <div className="cover__top">
          <img
            src="https://lh3.googleusercontent.com/proxy/tBRtTu5hNnu0WOpPSSx_wEjvqTvlFF-6qr7tkygmxHbEP7fmthppx3610WndU8qrvd-_G8bpFlaEGtu73JxbqZcEKUfXQ2gqXWaOXHDfmU1-O_FFfcXqttz-iSPssrL8KDyuItFdaw"
            alt="Bg"
            className="cover__pic"
          />
          <img
            src="https://instagram.fdel27-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123934973_3555758287841855_8338139693644771979_n.jpg?_nc_ht=instagram.fdel27-2.fna.fbcdn.net&_nc_ohc=ckO91u4ruQAAX_6VgD_&tp=1&oh=052ce79f8baa3180035b85228e852c60&oe=604106B9"
            alt="dp "
            className="dp__avatar"
          />
        </div>

        <div className="cover__mid">
          <div className="description">
            <h1>Satyam Sharma</h1>
            <h2>Profession</h2>
            <p className="cover__details">Designation/Works At</p>
            <p className="cover__details">Location</p>
            <p className="cover__bio">
              Bio: dbn zvhdvmzcn jhavjbc jhzgjhvd bvafv hgafdv abcvuycv hgfvdjva
              ghdfuy ahjahvgvahgvghv chvajvuygma.sbadghujbs jsagg dasdjghiu
              ugaiugb ahjvuyav jhavyuv ah gwauivbdw hjgai
            </p>
          </div>

          <div className="socialmedia__handles">
            <Avatar
              src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
              alt="facebook__avatar "
              className="media__avatar"
            />
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
              alt="instagram__avatar "
              className="media__avatar"
            />
            <Avatar
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png"
              alt="youtube__avatar "
              className="media__avatar"
            />
            <Avatar
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
              alt="twitter__avatar "
              className="media__avatar"
            />
          </div>
        </div>

        <div className="cover__end">
          <nav>
            <ul>
              <li>
                <Avatar
                  src="https://instagram.fdel27-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123934973_3555758287841855_8338139693644771979_n.jpg?_nc_ht=instagram.fdel27-2.fna.fbcdn.net&_nc_ohc=ckO91u4ruQAAX_6VgD_&tp=1&oh=052ce79f8baa3180035b85228e852c60&oe=604106B9"
                  alt="dp "
                />
              </li>
              <li>About</li>
              <li>Posts</li>
              <li>Writings</li>
              <li>Videos</li>
              <li>More</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="from_about">
            <div className="about_me">
                <h3>About Me</h3><br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className="skill">
              <h3>Skills</h3><br></br>
              <div className="skill_inner">
              <Skill
                name="C++"
              />
              <Skill 
                name="JAVA"
              />
              <Skill 
                name="Python"
              />
              <Skill 
                name="Web Development"
              />
              </div>
            </div>
            
            <div className="e">
              <h3>Experince</h3>
              <br></br>
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
              <Experience 
                img="./android.png"
                post="Member"
                society="DEBSOC"
                timeline="Feb 2020 - Present"
              />
            </div>

            <div className="e">
              <h3>Education</h3><br></br>
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />
              <Education
                img="./android.png"
                organization="Netaji Subhas University of Technology"
                stream="Instrumentation and Control"
                timeline="Aug 2019 - Present"
              />

            </div>

        </div>

    </div>
  );
}

export default Profile;

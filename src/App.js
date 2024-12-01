import React from "react";
import "./App.css";
import { FaWindows, FaLinux, FaApple } from "react-icons/fa";
import logo from "./assets/logo.png"
import istep1 from "./assets/istep1.jpg"
import istep2 from "./assets/istep2.png"
import istep3 from "./assets/istep3.png"
import istep4 from "./assets/istep4.png"
import istep5 from "./assets/istep5.png"
import hstep1 from "./assets/hstep1.png"
import hstep2 from "./assets/hstep2.png"



  // Define the download links for each OS
  const downloadLinks = {
    windows: "https://t.me/organizeIt_inc_channel",  // Replace with your actual link
    linux: "https://t.me/organizeIt_inc_channel",   // Replace with your actual link
    macos: "https://t.me/organizeIt_inc_channel",     // Replace with your actual link
  };

  // Handle the button click and initiate the download
  const handleDownload = (os) => {
    const link = downloadLinks[os];
    if (link) {
      // Create an invisible anchor element to trigger the download
      const a = document.createElement("a");
      a.href = link;
      a.download = true; // Set download attribute to trigger download
      document.body.appendChild(a);
      a.click(); // Simulate click to start the download
      document.body.removeChild(a); // Clean up the element
    } else {
      console.error("Download link for this OS is not available.");
    }
  };


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="title">OrganizeIt</div>
        <div className="logo">
          <img src={logo} alt="OrganizeIt Logo" />
        </div>
        
      </header>
      <div className="description">
          <p>OrganizeIt is a desktop utility application designed to simplify file organization within folders by automatically categorizing files based on their type. The tool enhances productivity by reducing the time and effort needed to manually sort through files, making it ideal for individuals who frequently manage large numbers of files and folders.</p>
      </div>
      <section className="download-section">
        <h2>Download App For:</h2>
        <div className="buttons">
          <button className="download-btn" onClick={() => handleDownload('windows')}>
            <FaWindows className="icon" /> Windows
          </button>
          <button className="download-btn" onClick={() => handleDownload('linux')}>
            <FaLinux className="icon" /> Linux
          </button>
          <button className="download-btn" onClick={() => handleDownload('macos')}>
            <FaApple className="icon" /> MacOS
          </button>
        </div>

        {/* Version Tracking Table */}
        <div className="version-table">
         
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Release Date</th>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.0.2</td>
                <td>November 28, 2024</td>
                <td>Initial release with core features.</td>
                
              </tr>
             
            </tbody>
          </table>
        </div>
      </section>

      <section className="info-section">
        <div className="installation-steps">
          <h1>Installation Steps</h1>
          <ol>
            <li>Download the application for your operating system.</li>
            <li>Run the installer and follow the instructions.</li>
            <li>Click on "Yes" and give the permission. Don't worry application is won't access your personal files. <img src={istep1} alt="istep1" /></li>
            <li>Click on "Next" or choose your own installation path   <img src={istep2} alt="istep2" /></li>
            <li>Click on "Next" or give a name to the folder  <img src={istep3} alt="istep3" /></li>
            <li>Click on "Install", application installation will begin <img src={istep4} alt="istep4" /></li>
            <li>Click on "Finish" and you are done installing🎉. Happy Tasking! 😇<img src={istep5} alt="istep5" /></li>
          </ol>
        </div>
        <div className="how-to-use">
          <h1>How to Use</h1>
          <p>
            <ul>
              <li>After Installing application, a "Organize It" shortcut will be created on your desktop. Double Click to open it  <img src={hstep1} alt="hstep1" /></li>
              <li>Select a folder to organize by clicking "Select Folder" button <img src={hstep2} alt="hstep2" /> </li>
           
            </ul>
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} OrganizeIt. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

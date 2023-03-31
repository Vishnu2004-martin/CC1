import React from 'react';
import './day2.css';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Reach Us</h4>
        <p>No 3,Raja Street</p>
        <p>Gandhipuram,coimbatore-641005</p>
        
        <p>Email: Trader@company.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <a href="#">Facebook</a><br></br>
          <a href="#">Twitter</a><br></br>
          <a href="https://instagram.com/vish_arthan1?igshid=ZDdkNTZiNTM=">Instagram</a><br></br>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
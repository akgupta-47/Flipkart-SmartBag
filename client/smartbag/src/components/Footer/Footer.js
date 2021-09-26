import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col s7">
          <p className="p-lowerf">
            Policies:{' '}
            <a href="#returnpolicy" className="alowerf">
              Return Policy
            </a>{' '}
            |{' '}
            <a href="#terms" className="alowerf">
              Terms of use
            </a>{' '}
            |{' '}
            <a href="#security" className="alowerf">
              Security
            </a>{' '}
            |{' '}
            <a href="#privacy" className="alowerf">
              Privacy
            </a>{' '}
            |{' '}
            <a href="#infringement" className="alowerf">
              Infringement
            </a>{' '}
            |<span> © 2007-2021 Flipkart.com</span>
          </p>
        </div>
        <div className="col s5">
          <p className="p-lowerf">
            Need Help? Visit the{' '}
            <a href="#help" className="blue-text alowerf1">
              Help Center
            </a>{' '}
            or{' '}
            <a href="#contactus" className="blue-text alowerf1">
              Contact Us
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

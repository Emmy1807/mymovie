import React from 'react';
import './footer.css';
import FooterNavItem from '@/component/FooterNavItem';

const Footer = () => {
    const useLinks = [
        "Home",
        "Movies",
        "My list",
        "Terms of service",
        "Privacy Policy"
    ];
    const locations = [
        'Nigeria',
        'River State',
        'Port Harcourt',
        
    ]

  return (
    <footer id="footer" className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>FILMFINITY</span>
                        </a>
                        <p>
                            wertyui
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="twitter">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="#" className="facebook">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#" className="instagram">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#" className="youtube">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {useLinks.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Cinema</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Street name <br />
                            City name, State 12345
                            <br />
                            Nigeria <br />
                            <br />
                            <strong>Phone:</strong> +2349161728677
                            <br />
                            <strong>Email:</strong> emmyyong@gmail.com
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>E-Tech</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="#">E-Tech</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

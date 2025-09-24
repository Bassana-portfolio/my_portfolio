import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Lets talk about</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p><Link href="#" className="btn btn-primary">Learn more</Link></p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Home</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>About</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Services</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Projects</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Web Design</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Web Development</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Business Strategy</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Data Analysis</Link></li>
                <li><Link href="#"><span className="fa fa-chevron-right mr-2"></span>Graphic Design</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon fa fa-map marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><Link href="#"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
                  <li><Link href="#"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">info@yourdomain.com</span></Link></li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate"><Link href="#"><span className="fa fa-twitter"></span></Link></li>
                <li className="ftco-animate"><Link href="#"><span className="fa fa-facebook"></span></Link></li>
                <li className="ftco-animate"><Link href="#"><span className="fa fa-instagram"></span></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank">Colorlib</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
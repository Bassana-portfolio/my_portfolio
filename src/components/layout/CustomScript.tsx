import Script from 'next/script';

export default function CustomScripts() {
  return (
    <>
      <Script src="/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery-migrate-3.0.1.min.js" strategy="afterInteractive" />
      <Script src="/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.easing.1.3.js" strategy="afterInteractive" />
      <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.stellar.min.js" strategy="afterInteractive" />
      <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.animateNumber.min.js" strategy="afterInteractive" />
      <Script src="/js/scrollax.min.js" strategy="afterInteractive" />
      <Script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false" 
        strategy="afterInteractive" 
      />
      <Script src="/js/google-map.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
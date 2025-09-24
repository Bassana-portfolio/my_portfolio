import CustomScripts from "@/components/layout/CustomScript";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <html lang="en">
        <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
          <Navbar/>
          {children}
          <Footer/>
          <Loader/>
          <CustomScripts/>
        </body>
      </html>
    </>
  );
}
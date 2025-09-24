// components/layout/Header.tsx
import Head from 'next/head';
import '../../../public/css/animate.css';
import '../../../public/css/owl.carousel.min.css';
import '../../../public/css/owl.theme.default.min.css';
import '../../../public/css/magnific-popup.css';
import '../../../public/css/flaticon.css';
import '../../../public/css/style.css';

export default function Header() {
    return (
        <Head>
            <title>Clyde - Free Bootstrap 4 Template by Colorlib</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
    );
}
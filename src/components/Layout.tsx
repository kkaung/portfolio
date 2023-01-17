import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <main
                className="container mx-auto"
                style={{
                    minHeight: `calc(100vh - 190px)`,
                }}
            >
                {children}
            </main>
            <Footer />
        </>
    );
}

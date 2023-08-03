import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar/navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar2 />
            <main>{children}</main>
            <Footer />
        </>
    )
}
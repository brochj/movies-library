import Footer from '../components/footer'
import Navbar from '../components/navbar/navbar'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

import Navbar from "./Header";
import Footer from "./Footer";

const BlogLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
    <Navbar isBlogPage={true} />
    <main className="pt-20">{children}</main>
    <Footer />
  </div>
);

export default BlogLayout;

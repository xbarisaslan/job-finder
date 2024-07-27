import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen">
      <Navbar />
      <Header />
      <Footer />
    </main>
  );
}

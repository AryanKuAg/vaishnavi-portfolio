import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Certificates from "@/components/HomePage/Certificates";
import ContactMe from "@/components/HomePage/Contact";
import Experience from "@/components/HomePage/Experience";
// import Activities from "@/components/HomePage/Activities";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <h1 className="text-4xl text-center py-28">🚧 Iskcon Ramgarh Work Under Construction</h1> */}
      {/* <Activities/> */}
      {/* <p className="text-center text-4xl my-24">🚧 Vaishnavi&apos;s Classes | Under Construction</p> */}
      <Experience/>
      <Certificates/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

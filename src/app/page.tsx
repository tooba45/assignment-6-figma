import Image from "next/image";
import Hero from "./components/hero";
import ExploreCourses from "./components/explorecourses";
import Header from "./components/header";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Team from "./components/team";
import Courses from "./components/courses";
import Achievement from "./components/achievement";

export default function Home() {
  return (
   <div>
     <Header/>
    <Hero/>
<ExploreCourses/>
<Achievement/>
<Courses/>
<Team/>
    <Testimonials/>
    <Footer/>
    
   </div>
  );
}

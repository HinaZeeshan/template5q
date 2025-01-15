import Bestselling from "@/Components/Home/Bestselling";
import Classic from "@/Components/Home/Classic";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Home/Hero";
import Post from "@/Components/Home/Post";
import Universe from "@/Components/Home/Universe";
import Editor from "@/Components/Home/editor";

export default function Home() {
  return (
    <div>
       <Hero />
      <Editor />
      <Bestselling />
      <Classic />
      <Universe />
      <Post />
       <Footer /> 
    </div>
  );
}

import Bestselling from "@/components/Home/Bestselling";
import Classic from "@/components/Home/Classic";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import Post from "@/components/Home/Post";
import Universe from "@/components/Home/Universe";
import Editor from "@/components/Home/editor";

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

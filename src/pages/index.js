import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Podcast from "@/components/Podcast";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";

export default function Home() {
    return (
        <Layout title="One Byte Social Community">
            <Hero />
            <Features />
            <Founder />
            <Podcast />
            <Testimonials />
            <Footer />
        </Layout>
    );
}

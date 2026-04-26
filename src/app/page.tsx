import Navbar from "../components/homePage/Navbar";
import Hero from "../components/homePage/Hero";
import Features from "../components/homePage/Features";
import ProductPreview from "../components/homePage/ProductPreview";
import Benefits from "../components/homePage/Benefits";
import Testimonials from "../components/homePage/Testimonials";
import Pricing from "../components/homePage/Pricing";
import FadeIn from "../components/FadeIn";
import Cta from "../components/homePage/Cta";

export default function HomePage() {
    return (
        <main className="bg-white text-gray-900">
            <Navbar />

            {/* HERO */}
            <FadeIn>
               <Hero />
            </FadeIn>

            {/* FEATURES */}
           <FadeIn>
                <Features />
           </FadeIn>

            {/* PRODUCT PREVIEW */}
           <FadeIn>
                <ProductPreview />
           </FadeIn>

            {/* BENEFITS */}
           <FadeIn>
                <Benefits />
           </FadeIn>

            <FadeIn>
                <Testimonials />
            </FadeIn>

            <FadeIn>
                <Pricing />
            </FadeIn>

            {/* CTA -> call to action */}
            <FadeIn>
                <Cta />
            </FadeIn>

            {/* FOOTER */}
            <footer className="py-10 text-center text-gray-500 border-t">
                © {new Date().getFullYear()} HR SaaS. All rights reserved.
            </footer>
        </main>
    );
}
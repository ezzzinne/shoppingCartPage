import Cards from "../components/CardSection/Cards";
import Posts from "../components/FeaturedPosts/Posts";
import Header from "../components/Header/Header"
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonials/Testimonials";

const ShoppingPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Cards />
            <Products />
            <Services />
            <Posts />
            <Testimonial />
            <Hero />
        </>
    )
}

export default ShoppingPage;
import Cards from "../components/CardSection/Cards";
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";

const ShoppingPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Cards />
            <Products />
            <Services />
        </>
    )
}

export default ShoppingPage;
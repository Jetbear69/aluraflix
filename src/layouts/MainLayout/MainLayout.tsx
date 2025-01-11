import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function MainLayout() {
    return (
        <div>
            <NavBar />
            <Header />
            <Category  />
            <Footer />
        </div>
    );
}

export default MainLayout;
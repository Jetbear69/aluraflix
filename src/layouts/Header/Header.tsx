import Card from "../../components/Card/Card";
import TitleCategory from "../../components/TitleCategory/TitleCategory";
import Banner from "../../sections/Banner/Banner";

function Header() {
    return (
        <header className="hide-header-mobile">
            <Banner>
                <div className="mt-52 md:mt-0 flex flex-col md:flex-row items-center justify-center mx-10 gap-6 md:gap-56 z-0">
                    <section className="w-full md:w-1/2">
                        <div className="flex flex-col gap-3 md:gap-10">
                            <TitleCategory title="FRONT END" bgColor="#6BD1FF"/>
                            <h1 className="text-4xl lg:text-6xl font-normal font-Roboto">Challenge React</h1>
                            <p className="text-xs md:text-base lg:text-2xl font-Roboto font-light text-justify">
                                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                            </p>
                        </div>
                    </section>
                    <section className="header-card flex justify-center w-full md:w-1/2 mt-10 md:mt-0">
                        <Card 
                            id={"1"}
                            image="/img-card.jpeg"
                            color="#6BD1FF"
                            width="500px"
                            height="280px"
                            modify={false}
                            className="header-card"
                            videoUrl="https://www.youtube.com/watch?v=ov7vA5HFe6w"
                        />
                    </section>
                </div>
            </Banner>
        </header>
    );
}

export default Header;
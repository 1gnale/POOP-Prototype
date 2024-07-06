import Header from "../header/Header";
import Footer from "../footer/Footer";
import Prototype from "../prototype/prototype";
import Card from "../card/Card";
import useGetPoems from "../customeHooks/usePoem";

const Layout = () => {
    const poems = useGetPoems();
    console.log(poems);

    return (
        <div>
            <Header />
            {poems.map((poem, index) => (
                <Card key={index}>
                    {console.log(index)}
                    <Prototype text={poem} />
                </Card>
            ))}
            <Footer />
        </div>
    );
}

export default Layout;
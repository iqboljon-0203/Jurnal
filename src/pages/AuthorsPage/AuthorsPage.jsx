import AuthorsMain from "../../components/AuthorsMain/Main.jsx";
import AuthorsInfo from "../../components/AuthorsInfo/App.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function ArticlePage() {
    return (
        <div>
            <AuthorsMain/>
            <AuthorsInfo />
            <Footer />
        </div>
    );
}
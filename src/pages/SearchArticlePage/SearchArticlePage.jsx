import MainSearch from "../../components/MainSearch/Main.jsx";
import SearchListArticle from "../../components/SearchListArticle/SearchListArticle.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function ArticlePage() {
    return (
        <div>
            <MainSearch />
            <SearchListArticle />
            <Footer />
        </div>
    );
}
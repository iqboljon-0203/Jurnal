import ArticleDetailMain from "../../components/ArticleDetailMain/Main.jsx";
import ArticleDetailInfo from "../../components/ArticleDetailInfo/App.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function ArticlePage() {
    return (
        <div>
            <ArticleDetailMain/>
            <ArticleDetailInfo></ArticleDetailInfo>
            <Footer />
        </div>
    );
}
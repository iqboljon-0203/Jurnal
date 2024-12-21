import ArticleDetailMain from "../../components/ArticleDetailMain/Main.jsx";
import ArticleDetailInfo from "../../components/ArticleDetailInfo/App.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from 'react-router-dom';
import { slugToTitle } from "../../components/ListArticle/utils/slugUtils.js";
export default function ArticlePage() {
    const { slug } = useParams();
    const title = slugToTitle(slug);
    return (
        <div>
            <ArticleDetailMain  slug={title}/>
            <ArticleDetailInfo></ArticleDetailInfo>
            <Footer />
        </div>
    );
}
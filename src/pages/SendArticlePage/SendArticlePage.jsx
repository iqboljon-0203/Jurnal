import SendArticle from "../../components/SendArticleMain/Main.jsx";    
import ArticleSubmissionForm from "../../components/ArticleSubmission/ArticleSubmissionForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function ArticlePage() {
    return (
        <div>
            <SendArticle />
            <ArticleSubmissionForm />
            <Footer />
        </div>
    );
}
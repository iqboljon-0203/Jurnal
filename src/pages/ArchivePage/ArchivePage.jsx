import ArchiveMain from "../../components/ArchiveMain/Main.jsx";
import ArchiveInfo from "../../components/ArchiveInfo/App.jsx";
import Footer from "../../components/Footer/Footer.jsx";
export default function ArticlePage() {
    return (
        <div>
            <ArchiveMain></ArchiveMain>
            <ArchiveInfo />
            <Footer />
        </div>
    );
}
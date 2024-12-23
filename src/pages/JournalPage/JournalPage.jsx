import JurnalMain from "../../components/JournalMain/Main.jsx";
import JournalLayout from "../../components/JournalLayout/JournalLayout.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJournalIssueDetail } from '../../features/journalIssueDetailSlice.js';
import { useEffect } from 'react';
export default function ArticlePage() {
    const { id } = useParams();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.journalIssueDetail);

  useEffect(() => {
    if (id) {
      dispatch(fetchJournalIssueDetail(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') {
    return <div className="p-4">Yuklanmoqda...</div>;
  }

  if (status === 'failed') {
    return <div className="p-4 text-red-500">Xatolik: {error}</div>;
  }
    return (
        <div>
            <JurnalMain />
            <JournalLayout/>
            <Footer />
        </div>
    );
}
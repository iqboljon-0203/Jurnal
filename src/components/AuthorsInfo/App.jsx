import { fetchAuthors } from '../../features/authorsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function ResearchCategories() {
  const dispatch = useDispatch();
  const { authors, status, error } = useSelector((state) => state.authors);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAuthors());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Yuklanmoqda...</div>;
  } 

  if (status === 'failed') {
    return <div>Xatolik: {error}</div>;
  }
  

  return (
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      <div className="space-y-8">
          <div  className="flex">
            {/* Category Title */}
            <div className="w-1/2 pr-4">
              <h2 className="text-3xl font-bold leading-[1.80rem] text-left text-[#21466D]">
               Mualliflar ro'yxati
              </h2>
            </div>
            
            {/* Members List */}
            <div className="w-1/2">
              <ol className="list-decimal list-outside pl-12 space-y-2">
                {authors.map((author) => (
                  <li key={author.id} className="text-xl font-normal leading-[1.88rem] text-left text-[#21466D]">
                    {author.first_name} {author.last_name}
                  </li>
                ))}
              </ol>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ResearchCategories;


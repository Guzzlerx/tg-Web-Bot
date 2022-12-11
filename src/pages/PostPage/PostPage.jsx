import Header from '../../components/Header/Header';
import CustomBackButton from '../../components/UI/CustomBackButton/CustomBackButton';

const PostPage = ({ children }) => {
  return (
    <>
      <Header />
      <div className="btn-container">
        <CustomBackButton />
      </div>
      {children}
    </>
  );
};

export default PostPage;

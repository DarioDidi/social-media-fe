import CreatePostForm from '@/components/common/CreatePostForm';
import Layout from '@/components/layout/Layout';
import { Seo } from '@/components/layout/Seo';

const createPostPage = () => {

  return (
    <Layout>
      <Seo title="Add Post" />
      <CreatePostForm asPage={true} />
    </Layout>
  );
};

export default createPostPage;

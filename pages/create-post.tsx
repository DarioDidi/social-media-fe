import { Layout } from '@/components/layout/Layout';
import { CreatePostForm } from '@/components/common/CreatePostForm';

const createPostPage = () => {

  return (
    <Layout>
      <CreatePostForm asPage={true} />
    </Layout>
  );
};

export default createPostPage;

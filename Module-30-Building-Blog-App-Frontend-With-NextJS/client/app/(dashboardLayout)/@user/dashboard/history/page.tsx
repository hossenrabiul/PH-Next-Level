import HistoryBlog from "@/components/modules/user/historyBlog/historyBlog";
import Pagenavigation from "@/components/ui/pagenavigation-controller";
import { blogService } from "@/services/blog.service";

const Historypage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data } = await blogService.getBlogPost({ page: page, limit: "4" });
  const meta = {
    currentPage: 1,
    limit: 5,
  };
  const pagination = data?.data?.pagination || meta;

  const posts = data?.data?.data || [];
  return (
    <div>
      <HistoryBlog posts={posts} />
      <Pagenavigation meta={pagination} />
    </div>
  );
};

export default Historypage;

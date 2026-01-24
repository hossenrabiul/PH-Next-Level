import { blogService, optionsType, paramsType } from "@/services/blog.service";
const searchParams: paramsType = {
  isFeatured: false,
  search: "",
};
const options : optionsType = {
  cache : "no-store",
  revalidate : 10,
}
export default async function Home() {
  const { data } = await blogService.getBlogPost(searchParams, options);
  console.log(data);
  return (
    <div>
      <h1>This is main page</h1>
    </div>
  );
}

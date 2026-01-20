import { userService } from "@/services/user.service";

export default async function Home() {
  const { data, error } = await userService.getSesstion();
  console.log(data, "error", error);
  return (
    <div>
      <h1>This is main page</h1>
    </div>
  );
}

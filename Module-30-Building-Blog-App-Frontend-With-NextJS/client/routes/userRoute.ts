import { routeType } from "@/types/routeType";

export const userRoute: routeType = {
  navItem: [
    {
      title: "User Route",
      items: [
        { name: "Create Blog", url: "/dashboard/create-blog" },
        {
          name: "History",
          url: "/dashboard/history",
        },
      ],
    },
  ],
};

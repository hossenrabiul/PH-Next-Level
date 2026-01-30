"use client";
import { blogAction } from "@/app/actions/blog.action";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const data = await blogAction();
      setData(data.data);
    })();
  }, []);
  console.log(data);
  return <div>AboutPage</div>;
};

export default AboutPage;

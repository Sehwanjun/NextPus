import React from "react";
// import Card from "antd";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/[careerfield]" as="/itfield">
            {/* <a><Card>g</Card></a> */}
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default index;

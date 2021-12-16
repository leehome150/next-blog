import React from "react";
import Link from "next/link";

export default function X() {
  return (
    <div>
      第一篇文章
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </div>
  );
}

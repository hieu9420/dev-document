import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const authorList = [
    { name: "Lê Thành Hiếu", total: 5, tag: "Lê Thành Hiếu" },
    { name: "Nguyễn Văn Phần", total: 1, tag: "Nguyễn Văn Phần" },
    { name: "Nguyễn Việt Minh Anh", total: 1, tag: "Nguyễn Việt Minh Anh" },
    { name: "Nguyễn Thị Thi Vũ", total: 1, tag: "Nguyễn Thị Thi Vũ" },
    { name: "Nguyễn Hoàng Lâm", total: 1, tag: "Nguyễn Hoàng Lâm" },
  ];
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
        <h2>Đội ngũ đóng góp</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {authorList.map((item, index) => (
            <li
              key={index}
              style={{
                textAlign: "left",
                width: "fit-content",
                marginRight: 15,
              }}
            >
              {/* <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              > */}
              {item.name}
              {/* </Link> */}
            </li>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Tài liệu chung cho dev`}
      description="Cập nhật các tài liệu dành cho phát triển ứng dụng team"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

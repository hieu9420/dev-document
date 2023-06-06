import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { authorList } from "../mocks/author";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
        <h2>Đội ngũ đóng góp nội dung</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          {authorList
            .sort((a, b) => b.total - a.total)
            .map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "left",
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "500",
                }}
                className="button button--secondary"
              >
                {item.name}
                <div
                  style={{
                    background: "#78C6E720",
                    padding: "0 5px",
                    marginLeft: 10,
                    borderRadius: 2,
                  }}
                >
                  {item.total}
                </div>
              </div>
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

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Dễ dàng tìm hiểu",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Nội dung truyền tải theo chủ đề, sắp xếp theo cấp bậc giúp dễ tiếp thu
      </>
    ),
  },
  {
    title: "Cập nhật liên tục",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Nội dung được liên tục cập nhật từ cộng đồng, nhân sự <code>Oryza</code>{" "}
        giúp đa dạng phong phú các chủ đề kiến thức
      </>
    ),
  },
  {
    title: "Linh động",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Phù hợp với mọi đối tượng muốn trau dồi thêm kiến thức, sản phẩm. Ứng
        dụng có thể truy cập từ nhiều thiết bị khác nhau
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

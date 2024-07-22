import type React from "react";
import ContentLoader from "react-content-loader";

const SceletonProduct: React.FC = () => (
  <ContentLoader
    speed={2}
    width={290}
    height={433}
    viewBox="0 0 290 433"
    backgroundColor="#dad7d7"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="280" height="433" />
  </ContentLoader>
);

export default SceletonProduct;

import type React from "react";
import ContentLoader from "react-content-loader";

const SceletonProduct: React.FC = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={433}
    viewBox="0 0 300 434"
    backgroundColor="#dad7d7"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="300" height="434" />
  </ContentLoader>
);

export default SceletonProduct;

import dynamic from "next/dynamic";
import { Suspense } from "react";
import config from "../cms/config";

interface cms {
  init: () => void;
}

const CMS = dynamic(
  // @ts-ignore: Checks for a promise bbut gets am module not a promise
  () => import("netlify-cms-app").then((cms) => cms.init({ config })),
  { ssr: false, suspense: true }
);

const AdminPage: React.FC = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <CMS />
    </Suspense>
  );
};

export default AdminPage;

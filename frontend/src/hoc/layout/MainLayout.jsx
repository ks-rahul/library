import { Fragment } from "react";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
        <main id="tg-main" className="tg-main tg-haslayout">
          {children}
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;

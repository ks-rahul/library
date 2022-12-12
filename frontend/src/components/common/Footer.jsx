function Footer() {
  return (
    <footer id="tg-footer" className="tg-footer tg-haslayout">
      <div className="tg-footerbar">
        <button type="button" id="tg-btnbacktotop" className="btn tg-btnbacktotop">
          <i className="icon-chevron-up"></i>
        </button>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span className="tg-copyright pull-right">
                Powered By <a href="https://www.iffort.com/">Iffort</a>
              </span>
              <span className="tg-copyright">
                2022 All Rights Reserved By &copy; Lending Library
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

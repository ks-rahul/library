import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.css";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError(error) {
    if (error.name === "ChunkLoadError") {
      return window.location.reload();
    }
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  redirectToHome = () => {
    return (window.location.href = "/");
  };

  render() {
    if (this.state.redirect) {
      return this.redirectToHome();
    } else if (this.state.hasError) {
      return (
        <>
          <div className={styles.errorPageContentWrap}>
            <div className={styles.errorPageImg}>
              <img
                src={"/images/error-boundary-img.png"}
                alt=""
                width={487}
                height={552}
              />
            </div>
            <div className={styles.errorPageContent}>
              <h2>Oops!</h2>
              <h3>Something went wrong</h3>
              <p>
                <Link to="/">
                  <a>Click here</a>
                </Link>{" "}
                to go back to the home page or wait five seconds.
              </p>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

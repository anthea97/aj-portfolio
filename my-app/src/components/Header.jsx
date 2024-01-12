import { NavLink } from "react-router-dom";
import { EnvelopeAtFill, Linkedin } from "react-bootstrap-icons";
import $ from "jquery";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  async function writeClipboardText() {
    const text = "amritha.jestine@sjsu.edu";
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Email copied to clipboard!");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/aj-portfolio">
            <img
              src="https://github.com/anthea97/aj-portfolio/blob/main/my-app/public/navicon.png?raw=true"
              alt="icon"
              width="30"
              height="30"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/aj-portfolio"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aj-portfolio/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aj-portfolio/experience">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://raw.githubusercontent.com/anthea97/aj-portfolio/main/my-app/public/Amritha_Jestine_Resume_Site.pdf"
                  download
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          title="Copy email to clipboard"
          style={{
            margin: "1%",
            background: "none",
            border: " none",
            outline: "none",
            boxShadow: "none",
          }}
          class="copy-email"
          onClick={writeClipboardText}
        >
          <EnvelopeAtFill class="text-light h3"></EnvelopeAtFill>
        </button>
        <a
          href="https://www.linkedin.com/in/amritha-jestine-3b1957147/"
          style={{ margin: "1%" }}
          target="_blank"
        >
          <Linkedin class="h3"></Linkedin>
        </a>
      </nav>
      <ToastContainer autoClose="500" hideProgressBar="true" theme="dark" />
    </>
  );
};

export default Header;

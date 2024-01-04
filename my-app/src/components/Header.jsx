import Link from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          AJ{" "}
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
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/aj-portfolio/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

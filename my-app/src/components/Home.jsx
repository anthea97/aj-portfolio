const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        margin: "5%",
        padding: "5%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {" "}
      <div class="jumbotron" style={{ width: "50vw" }}>
        <h1 class="display-4" style={{ fontFamily: "Roboto" }}>
          Amritha Jestine
        </h1>
        <p class="lead">
          Welcome to my page! I'm a graduate student at San Jose State
          University, with over 3 years of demonstrated experience in Product,
          Strategy, and Project Planning.
        </p>
        <hr class="my-4"></hr>
        <p class="lead">
          <a
            class="btn btn-dark btn-lg"
            href="/aj-portfolio/contact"
            role="button"
          >
            Contact
          </a>
        </p>
      </div>
      <img
        src="https://github.com/anthea97/aj-portfolio/blob/main/my-app/public/profile.jpeg?raw=true"
        alt="..."
        style={{ width: "30%", height: "50%" }}
        class="rounded"
      ></img>
    </div>
  );
};

export default Home;

import { EnvelopeAtFill, Linkedin } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundColor: "#f7f7f7",
          margin: "0% 5% 5% 5%",
          padding: "2%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div class="jumbotron" style={{ width: "50vw" }}>
          <h1 class="display-4" style={{ fontFamily: "Roboto" }}>
            Let's Connect!
          </h1>
          <hr class="my-4"></hr>{" "}
          <div>
            <EnvelopeAtFill />
            <p style={{ display: "inline", margin: "2% 2% 2% 1%" }}>
              amritha.jestine@sjsu.edu{" "}
            </p>
          </div>
          <a
            href="linkedin.com/in/amritha-jestine-3b1957147/ "
            style={{ display: "inline" }}
          >
            <Linkedin />
            <p style={{ display: "inline", margin: "2% 2% 2% 1%" }}>
              Amritha Jestine
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

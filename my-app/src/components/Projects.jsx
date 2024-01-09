import { projectData } from "../experience";

const Projects = () => {
  return (
    <div>
      <h1
        class="display-4"
        style={{
          fontFamily: "Roboto",
          margin: "2% 2% 1% 2%",
        }}
      >
        Projects
      </h1>
      <div
        style={{
          backgroundColor: "#f7f7f7",
          margin: "0% 5% 5% 5%",
          padding: "2%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {projectData.map((info) => (
          <div class="card" style={{ maxWidth: "25vw" }}>
            <img
              src={info.image}
              class="card-img-top"
              alt="..."
              style={{ maxHeight: "30vh", maxWidth: "25vw" }}
            ></img>
            <div class="card-body">
              <h5 class="card-title">{info.name}</h5>
              <ul class="card-text">
                {info.details.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>

              <a href="#" class="btn btn-dark">
                See more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

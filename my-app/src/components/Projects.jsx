import { projectData } from "../experience";

const Projects = () => {
  return (
    <div>
      <h1
        className="display-4"
        style={{
          fontFamily: "Roboto",
          margin: "2% 2% 1% 2%",
        }}
      >
        Projects
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          margin: "0% 5% 5% 5%",
          padding: "2%",
        }}
      >
        {projectData.map((info) => (
          <div
            className="card"
            style={{ maxWidth: "45%", marginBottom: "20px", display: "flex" }}
          >
            <img
              src={info.image}
              className="card-img-top"
              alt="..."
              style={{ maxHeight: "30vh", flex: "1", marginRight: "20px" }}
            ></img>
            <div className="card-body" style={{ flex: "2" }}>
              <h5 className="card-title">{info.name}</h5>
              <ul className="card-text">
                {info.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

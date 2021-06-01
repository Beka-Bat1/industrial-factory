import React, { useEffect } from "react";

function CreditsPage() {
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  return (
    <div className="container area-padding">
      <div className="row">
        <div className="col-6">
          <h1>Credits to</h1>

          <ul className="list-group">
            <li className="list-group-item">
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/anatoly"
                  title="Anatoly"
                >
                  Anatoly
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/smashicons"
                  title="Smashicons"
                >
                  Smashicons
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/nikita-golubev"
                  title="Nikita Golubev"
                >
                  Nikita Golubev
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/eucalyp"
                  title="Eucalyp"
                >
                  Eucalyp
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/dinosoftlabs"
                  title="DinosoftLabs"
                >
                  DinosoftLabs
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </li>
            <li className="list-group-item">
              <p>images from</p>{" "}
              <span>
                <a href="https://pixabay.com/fi/photos/louhos-kone-sora-hiekka-tausta-4430879/">
                  pixabay
                </a>
              </span>
            </li>
            <li className="list-group-item">
              <p>Template from</p>{" "}
              <span>
                <a href="https://www.templateshub.net/">templatehub</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreditsPage;

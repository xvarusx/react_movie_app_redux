import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="movie-card-list">
        <div className="movie-card">
          <div className="color-overlay">
            <div className="movie-share">
              <a className="movie-share__icon" href="#">
                <i className="material-icons">&#xe87d</i>
              </a>
              <a className="movie-share__icon" href="#">
                <i className="material-icons">&#xe253</i>
              </a>
              <a className="movie-share__icon" href="#">
                <i className="material-icons">&#xe80d</i>
              </a>
            </div>
            <div className="movie-content">
              <div className="movie-header">
                <h1 className="movie-title">Blade Runner</h1>
                <h4 className="movie-info">(1982) Sci-Fi, Thriller</h4>
              </div>
              <p className="movie-desc">
                A blade runner must pursue and try to terminate four replicants
                who stole a ship in space and have returned to Earth to find
                their creator.
              </p>
              <a className="btn btn-outline" href="#">
                Watch Trailer
              </a>
            </div>
          </div>
        </div>

        <div className="movie-card">
          <div className="color-overlay">
            <div className="movie-share">
              <a className="movie-share__icon" href="#">
                <i className="material-icons">&#xe87d</i>
              </a>
              <a className="movie-share__icon" href="#">
                <i className="material-icons">&#xe253</i>
              </a>
              <a className="movie-share__icon" href="#">
                <i className="material-icons">&#xe80d</i>
              </a>
            </div>
            <div className="movie-content">
              <div className="movie-header">
                <h1 className="movie-title">Back to the Future</h1>
                <h4 className="movie-info">(1985) Adventure, Comedy, Sci-Fi</h4>
              </div>
              <p className="movie-desc">
                Marty McFly, a 17-year-old high school student, is accidentally
                sent 30 years into the past in a time-traveling DeLorean
                invented by his close friend, the maverick scientist Doc Brown.{" "}
              </p>
              <a className="btn btn-outline" href="#">
                Watch Trailer
              </a>
            </div>
          </div>
        </div>

        <div class="movie-card">
          <div class="color-overlay">
            <div class="movie-share">
              <a class="movie-share__icon" href="#">
                <i class="material-icons">&#xe87d</i>
              </a>
              <a class="movie-share__icon" href="#">
                <i class="material-icons">&#xe253</i>
              </a>
              <a class="movie-share__icon" href="#">
                <i class="material-icons">&#xe80d</i>
              </a>
            </div>
            <div class="movie-content">
              <div class="movie-header">
                <h1 class="movie-title">Akira</h1>
                <h4 class="movie-info">(1988) Animation, Action, Drama </h4>
              </div>
              <p class="movie-desc">
                A secret military project endangers Neo-Tokyo when it turns a
                biker gang member into a rampaging psychic psychopath that only
                two teenagers and a group of psychics can stop.{" "}
              </p>
              <a class="btn btn-outline" href="#">
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

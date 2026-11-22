/** Two-button switch between the academic CV (/) and the artist CV (/artist/). */
const ViewSwitch: React.FC<{ current: "academic" | "artist" }> = ({ current }) => (
  <nav className="view-switch" dir="ltr" aria-label="CV version">
    <a href="/" className="view-switch__btn" aria-current={current === "academic" ? "page" : undefined}>
      <span lang="ar">أكاديمي</span> / Academic
    </a>
    <a href="/artist/" className="view-switch__btn" aria-current={current === "artist" ? "page" : undefined}>
      <span lang="ar">فنان</span> / Artist
    </a>
  </nav>
);

export default ViewSwitch;

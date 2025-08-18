function PlayGround() {
  return (
    <div>
      <div className="bg-amber-400 sm:bg-red-400 text-neutral-800 px-l py-m">
        layGround
      </div>
      <a href="#">links</a>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3 className="highlight">h3</h3>

      <div className="card">
        <h2>title</h2>
        <button>CTA</button>
      </div>

      <hr className="m-5" />

      <button
        type="button"
        className="bg-sky-500 hover:bg-sky-800 px-4 py-2 rounded-full text-white hover:text-amber-400 cursor-pointer"
      >
        save changes
      </button>
    </div>
  );
}
export default PlayGround;

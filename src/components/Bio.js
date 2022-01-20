function Bio() {
  return (
    <div>
      <h1>My Biography</h1>
      <div className="bio-form-wrapper">
        <form className="bio-form">
          <label>My full name:</label>
          <input type="text" className="input-bioname" />
          <label>About me:</label>
          <textarea name="" className="input-biotext"></textarea>
          <button type="submit" className="btn-bio">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Bio;

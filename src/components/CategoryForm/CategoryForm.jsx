const CategoryForm = () => {
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col col-md-8 form-container">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src="https://placehold.co/48x48" alt="" width={48}></img>
                </label>
                <input
                  className="form-control"
                  type="file"
                  name="image"
                  id="image"
                  hidden
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Category Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="5"
                  placeholder="Write content here..."
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="bgcolor" className="form-label">
                  Background Color
                </label>
                <br />
                <input
                  type="color"
                  id="bgcolor"
                  name="bgcolor"
                  value="#ffffff"
                ></input>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;

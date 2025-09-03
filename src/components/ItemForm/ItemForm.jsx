const ItemForm = () => {
  return (
    <div
      className="item-form-container"
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      <div className="mx-2 mt-2">
        <div className="row">
          <div className="card col col-md-8 form-container">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    <img
                      src="https://placehold.co/48x48"
                      alt=""
                      width={48}
                    ></img>
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
                    placeholder="Item Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="form-control"
                  >
                    <option value="">-SELECT CATEGORY-</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="price"
                    id="price"
                    placeholder="$200"
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
                <button type="submit" className="btn btn-warning w-100">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;

const UserForm = () => {
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col col-md-8 form-container">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourname@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                />
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

export default UserForm;

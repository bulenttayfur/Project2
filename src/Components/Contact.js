const Contact = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        position: "relative",
        bottom: "-65px",
      }}
    >
      <div
        className="d-grid align-items-center gap-5 rounded"
        style={{
          gridTemplateColumns: "1fr 300px",
          padding: "20px 50px",
          backgroundColor: "#333697",
          color: "#ffffff",
          maxWidth: "910px",
        }}
      >
        <div className="d-grid gap-2">
          <h3>Contact Us!</h3>
          <p>
            There are many variations of passages of Lorem Ipsum but the
            majority have suffered alteration.
          </p>
        </div>
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              style={{
                height: "50px",
                borderRadius: "30px",
                padding: "10px 95px 10px 25px",
              }}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              style={{
                position: "absolute",
                background: "#333697",
                height: "30px",
                padding: "0",
                width: "80px",
                borderRadius: "30px",
                top: "10px",
                right: "10px",
                color: "#fff",
                border: "none",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

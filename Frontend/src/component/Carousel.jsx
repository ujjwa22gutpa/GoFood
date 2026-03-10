import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ height: "500px" }}
      >
        <div className="carousel-inner h-100">
          <div 
            className="carousel-caption d-flex justify-content-center align-items-center" 
            style={{ 
              zIndex: "10",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "15px",
              padding: "30px",
              backdropFilter: "blur(5px)"
            }}
          >
            <form className="w-100 d-flex" style={{ maxWidth: "500px" }}>
              <div className="input-group input-group-lg">
                <input
                  className="form-control border-0"
                  type="search"
                  placeholder="🔍 Search your favorite food..."
                  aria-label="Search"
                  style={{
                    borderRadius: "25px 0 0 25px",
                    fontSize: "16px",
                    padding: "12px 20px"
                  }}
                />
                <button 
                  className="btn btn-danger px-4" 
                  type="submit"
                  style={{
                    borderRadius: "0 25px 25px 0",
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%)"
                  }}
                >
                  <i className="bi bi-search"></i> Search
                </button>
              </div>
            </form>
          </div>
          <div className="carousel-item active h-100">
            <img
              src="https://www.ourmodernkitchen.com/wp-content/uploads/2020/06/IMG_6018-2-1024x683.jpg"
              className="d-block w-100 h-100"
              alt="Kitchen"
              style={{ objectFit: "cover", filter: "brightness(50%)" }}
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://media.gettyimages.com/id/85637014/photo/potato-chips.jpg?s=612x612&w=0&k=20&c=rqw_MiM-TEbZ7bGk3_Ot9fBDZ7UFYxo0hsBiPQPP60c="
              className="d-block w-100 h-100"
              alt="Chips"
              style={{ objectFit: "cover", filter: "brightness(50%)" }}
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://media.istockphoto.com/id/1652499216/photo/traditional-italian-pizza-with-salami-cheese-tomatoes-and-basil.jpg?s=612x612&w=0&k=20&c=BHcrLlN0ZFQPQVbRQFRl03uEw9t7M8FU8NHEfPkxzR0="
              className="d-block w-100 h-100"
              alt="Pizza"
              style={{ objectFit: "cover", filter: "brightness(50%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev ps-0"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          style={{ width: "80px" }}
        >
          <span
            className="carousel-control-prev-icon bg-danger rounded-circle p-3"
            aria-hidden="true"
            style={{ backgroundColor: "rgba(255, 107, 107, 0.8) !important" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next pe-0"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          style={{ width: "80px" }}
        >
          <span
            className="carousel-control-next-icon bg-danger rounded-circle p-3"
            aria-hidden="true"
            style={{ backgroundColor: "rgba(255, 107, 107, 0.8) !important" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

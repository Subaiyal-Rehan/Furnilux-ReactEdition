import { FaArrowRightLong } from "react-icons/fa6";
import GreenBtn from "../Buttons/GreenBtn";
import "./Slider.css";
import { FaStar } from "react-icons/fa";

export default function Slider(props: any) {
  return (
    <>
      <div
        id={
          props.arr[0].isReview == true
            ? "carouselExampleIndicators1"
            : "carouselExampleIndicators"
        }
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="CarouselIndicators carousel-indicators">
          {props.arr.map((_:any, index: any) => (
            <button
              key={index}
              type="button"
              data-bs-target={
                props.arr[0].isReview == true
                  ? "#carouselExampleIndicators1"
                  : "#carouselExampleIndicators"
              }
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="CarouselInner carousel-inner">
          {props.arr.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`carousel-item CarouselItem ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="row container m-auto">
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center gap-2">
                    {item.isReview == false ? (
                      <>
                        <h2 className="fw-bold text-green">{item.heading}</h2>
                        <p className="text-green text-center text-md-start w-75 opacity-75">
                          {item.para}
                        </p>
                        <span className="fs-3 text-green fw-bold">
                          {item.price}
                        </span>
                        <div className="carouselSpans">
                          <span className="rounded-circle d-inline-block me-4 my-3 bg-warning"></span>
                          <span className="rounded-circle d-inline-block me-4 my-3 bg-success"></span>
                          <span className="rounded-circle d-inline-block me-4 my-3 bg-danger"></span>
                        </div>
                        <div className="CarouselBtn">
                          <GreenBtn
                            value="Buy Now"
                            icon={<FaArrowRightLong />}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="fw-bold fs-4">"{item.para}"</p>
                        <p className="fs-4">{item.name}</p>

                        <div className="Card row bg-white p-2 rounded">
                          <div className="col-4 gap-2 d-flex align-items-center">
                            <img src={item.image} width={80} alt={item.cardName} />
                          </div>
                          <div className="col-7">
                            <h3 className="fs-5">{item.cardName}</h3>
                            <span className="text-green opacity-75">{item.cardPrice}</span>
                            <div className="starContainer text-warning">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="col-md-6 CarouselImg d-flex justify-content-end">
                    {item.isReview == false ? (
                      <img
                        src={item.src}
                        className="d-block img-fluid"
                        alt={item.heading}
                      />
                    ) : (
                      <img
                        src={item.image}
                        className="d-block img-fluid"
                        alt={item.cardName}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

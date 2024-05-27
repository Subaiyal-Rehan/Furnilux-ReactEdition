import "./Cards.css";
import { BsCart3 } from "react-icons/bs";

export default function Cards(props: any) {
  return (
    <div className="LivingCardContainer mt-4 row container m-auto gap-">
      {props.arr.map((item: any, index: any) => {
        return (
          <div key={index} className="CardOut p-2 col-md-4 rounded">
            <div key={index} className="p-0 LivingCard rounded">
              <div className="LivingCardImage">
                <img src={item.image} />
              </div>
              <div className="LivingCardText bg-white">
                <div className="LivingCardColors p-2 d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <span className="d-inline-block rounded-circle bg-warning"></span>
                    <span className="d-inline-block rounded-circle bg-success"></span>
                    <span className="d-inline-block rounded-circle bg-danger"></span>
                    <span className="d-inline-block rounded-circle bg-primary"></span>
                  </div>
                  <div>
                    <span>
                      <BsCart3 className="fs-5" />
                    </span>
                  </div>
                </div>
                <div className="LivingCardName px-2">
                  <h3 className="fs-5 text-green">{item.name}</h3>
                </div>
                <div className="LivingCardPrice px-2">
                  <h3 className="fs-5 text-green opacity-75">{item.price}</h3>
                </div>
              </div>
            </div>
           </div>
        );
      })}
    </div>
  );
}

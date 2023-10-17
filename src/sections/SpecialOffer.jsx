import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nike Air Max Collection: Score up to 30% off on the iconic Nike Air
          Max series. Experience ultimate comfort and style with these classic
          sneakers.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nike React Running Shoes: Elevate your running experience with Nike
          React running shoes. Save 25% and feel the difference with every
          stride.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop npw" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backGroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;

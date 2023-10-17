import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red ">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with out sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;

// return (
//   <section id="products" className="flex flex-col gap-8">
//     <h2 className="text-2xl">
//       Our <span className="text-coral-red font-bold">Popular</span> Products
//     </h2>
//     <p>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
//       sapiente nulla ipsam numquam mollitia voluptas eveniet nemo a, doloribus
//       vero.
//     </p>
//     <div className="flex justify-between ">
//       {shoes.map((shoe, index) => (
//         <div key={index}>
//           <ShoeCard imgURL={shoe} bigShoeImg={shoe?.imgURL?.bigShoe} />
//         </div>
//       ))}
//     </div>
//   </section>
// );

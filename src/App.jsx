import Nav from "./components/Nav";
import * as Sec from "./sections";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Sec.Hero />
      </section>
      <section className="padding">
        <Sec.PopularProducts />
      </section>
      <section className="padding">
        <Sec.SuperQuality />
      </section>
      <section className="padding padding-x py-10">
        <Sec.Services />
      </section>
      <section className="padding">
        <Sec.SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <Sec.CustomerReview />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Sec.Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Sec.Footer />
      </section>
    </main>
  );
}

export default App;

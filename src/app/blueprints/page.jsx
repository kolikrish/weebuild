import Nav from "@/components/Nav";
import Gallery from "@/components/Gallery";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page blueprints">
        <Gallery />
      </div>
    </>
  );
};

export default page;

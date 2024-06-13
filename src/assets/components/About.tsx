import "./About.css";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div className='bg-container'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="leading-relaxed text-lg bold-large-text">
              Craftspeople, also known as artisans or craftsmen, are individuals who possess 
              specialized skills in creating handmade objects using various techniques and materials.
              They often work meticulously with their hands, employing traditional methods passed down through generations
              or innovative approaches that blend contemporary practices with traditional craftsmanship.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Craft Bunch</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

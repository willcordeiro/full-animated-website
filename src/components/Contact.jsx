import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="Contato" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://images.pexels.com/photos/13025682/pexels-photo-13025682.jpeg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="https://images.pexels.com/photos/22204003/pexels-photo-22204003.jpeg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="https://images.pexels.com/photos/22204003/pexels-photo-22204003.jpeg"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="https://images.pexels.com/photos/20888055/pexels-photo-20888055.jpeg "
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Trabalhe comigo
          </p>

          <AnimatedTitle
           title="trabalhe c<b>o</b>nmig<b>o</b> <br /> na pr<b>ó</b>xima era."

            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Saiba mais" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

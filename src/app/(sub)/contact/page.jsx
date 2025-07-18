import Image from "next/image";
// import bg  from '../../../../public/background/rr.jpeg'
import bg from '../../../../public/background/R.jpeg'

// import bg from "../../../../public/background/contact-background.png";
import Form from "../../components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover 
        object-center opacity-100"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          {/* Say hi whenever! */}
         Looking forward to connecting!
          </h1>
          <p className="text-center font-light text-sm xs:text-base text-gray-200">
           I would love to hear from you! Whether you have questions, feedback, or collaboration opportunities, feel free to reach out.
           If you are interested in discussing a project or want to explore potential collaborations, please include any relevant details in your message.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
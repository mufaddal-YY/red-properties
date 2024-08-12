import React from "react";
import EnquiryForm from "./EnquiryForm";

const CTA = () => {
  return (
    <main className="bg-primary">
      <section className="container py-[80px] items-center">
        <article className="flex flex-col justify-center">
          <div className="text-center py-4">
            <h2 className="text-white font-semibold text-2xl lg:text-4xl">
              Unlock Your Dream Home <br /> Where Possibilities Become Reality!
            </h2>
          </div>
          <div className="flex justify-center py-4">
            <EnquiryForm />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CTA;

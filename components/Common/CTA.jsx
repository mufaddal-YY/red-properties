import React from "react";
import EnquiryForm from "./EnquiryForm";

const CTA = () => {
  return (
    <main className="bg-primary" id="cta">
      <section className="container py-[80px] items-center">
        <article className="flex flex-col mx-auto">
          <div className="text-center py-4">
            <h2 className="text-white font-semibold text-2xl lg:text-4xl">
              Unlock Your Dream Home <br className="hidden lg:block" /> Where Possibilities Become Reality!
            </h2>
          </div>
          <div className="mx-auto w-full lg:w-3/4 py-4">
            <EnquiryForm />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CTA;

import React from "react";
import Container from "./Container";

function FAQ() {
  return (
    <Container>
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center py-4">FAQS </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4  ">
          {[1, 2, 3, 4].map((elem) => {
            return (
              <div key={elem} className="p-6 shadow-lg border-2 dark:border-gray-600 ">
                <h4 className="text-xl text-darknight dark:text-gray-400 font-bold mb-2">
                  Why FAQ Pages Are a Priority
                </h4>
                <p>
                  In no small part, the importance of FAQ pages has been driven
                  in recent years by the growth in voice search, mobile search,
                  and personal/home assistants and speakers. These predominantly
                  rely on the pre-results (Google Answers and Featured Snippets)
                  and can be targeted specifically with FAQ pages.
                </p>
                <button className="bg-darknight text-white px-3 py-2 mt-4">
                  Know More
                </button>
              </div>
            );
          })}
        </section>
      </section>
    </Container>
  );
}

export default FAQ;

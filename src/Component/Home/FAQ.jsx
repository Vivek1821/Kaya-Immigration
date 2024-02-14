import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 mt-5">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Does your immigration firm offer a money-back guarantee ?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                If you would like to request a refund of the fee you paid to the
                Company for use of the Service, your refund request must be made
                within 90 days of the original payment date and prior to your
                application being completed.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What can I expect from my immigration consultant?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                During the complete process from beginning to end, all
                correspondence with Citizenship and Immigration will be
                processed through our office so that you have the peace of mine
                in knowing that your case is being handled by professionals.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                How long will it take process my application ?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                We process applications as soon as we can. Processing times
                depend on whether you have provided all the documents we need
                and the type of visa you apply for. Applications may take longer
                to process if we need to check your information.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

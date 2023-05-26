
import ExamplePdf from "/blog.pdf";
import { Link } from "react-router-dom";

const Blogs = () => {
	return (
		<div className="text-center">
      <Link
        to="/blog.pdf"
        href={ExamplePdf}
        download="ExamplePdf.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <button className="mt-8 bg-green-500 p-4 rounded-lg">
          Download Pdf
        </button>
      </Link>
      <div className="text-left px-3">
        <h2 className="lg:text-5xl text-3xl font-bold mt-12 text-center">
          Our Blogs
        </h2>
        <div className="container lg:max-w-4xl mx-3 lg:mx-auto">
          <h4 className="text-gray-700 font-bold mb-3 lg:text-xl text-lg mt-8">
            1.Tell us the differences between uncontrolled and controlled
            components.
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5">
            <span className="font-semibold underline">
              Controlled components
            </span>{" "}
            refer to components that are directly controlled by the application,
            meaning the application manages the state and behavior of the
            component. These components are typically custom-built for the
            specific application and have a clear interface with the
            application. Examples of controlled components include buttons, text
            inputs, and custom UI elements.
            <br />
            <span className="font-semibold underline">
              Uncontrolled components
            </span>
            , on the other hand, are components that manage their own state
            internally and do not have a clear interface with the application.
            These components are often pre-built and provided by third-party
            libraries or frameworks. Examples of uncontrolled components include
            HTML form elements such as checkboxes and radio buttons.
          </p>
          <h4 className="text-gray-700 font-bold mb-3 text-lg lg:text-xl pt-5">
            2. How to validate React props using PropTypes?
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5">
            React, PropTypes is a library that is used to validate the props of
            a component. PropTypes is a built-in feature of React, which
            provides a way to specify the type and structure of props that a
            component expects to receive. By using PropTypes, developers can
            ensure that the components are being used correctly and avoid bugs
            caused by incorrect usage of props.
            <br />
            Here are some common PropTypes validation:
            <ul>
              <li>PropTypes.string</li>
              <li>PropTypes.number</li>
              <li>PropTypes.bool</li>
              <li>PropTypes.func</li>
              <li>PropTypes.array</li>
              <li>PropTypes.object</li>
            </ul>
          </p>
          <h4 className="text-gray-700 font-bold mb-3 text-lg lg:text-xl pt-5">
            3.Tell us the difference between nodejs and express js.
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5">
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
            engine. It allows developers to write server-side JavaScript code
            that can be executed on the server. Node.js provides a non-blocking
            I/O model that allows for fast and scalable server-side
            applications. With Node.js, developers can build back-end services,
            APIs, and other server-side applications.
            <br />
            Express.js, on the other hand, is a web framework built on top of
            Node.js. It provides a simple and flexible API for building web
            applications and APIs. Express.js provides features like routing,
            middleware, and templating that make it easier to build web
            applications. With Express.js, developers can build web applications
            and APIs quickly and easily.
          </p>
          <h4 className="text-gray-700 font-bold mb-3 text-lg lg:text-xl pt-5">
            4. What is a custom hook, and why will you create a custom hook?
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5 pb-16">
            In React, a custom hook is a JavaScript function that uses one or
            more built-in React hooks to encapsulate a certain piece of logic
            and make it reusable across different components. Custom hooks allow
            developers to extract and reuse stateful logic from components,
            making the code more organized, readable, and maintainable. Custom
            hooks allow developers to abstract away complex logic and
            functionality from components, reducing the amount of code
            duplication and making it easier to maintain the codebase. By
            encapsulating common logic in a custom hook, developers can avoid
            code duplication and improve the overall code quality. Custom hooks
            are prefixed with the word "use" to indicate that they are built on
            top of the built-in React hooks. A custom hook can use any of the
            built-in React hooks, including useState, useEffect, useContext, and
            useRef.
          </p>
        </div>
      </div>
    </div>
	);
}

export default Blogs;

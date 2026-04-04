import Link from "next/link";

const heroImg = "https://picsum.photos/1920/1920/?random";
const bodyImg = "url('https://picsum.photos/1600/1600/?random')";

export default function TestPage() {
  return (
    <div>
      <div
        className={`bg-center bg-cover bg-no-repeat bg-fixed container bg-[url(${heroImg})] flex items-center justify-center h-screen mx-auto`}
      >
        <blockquote className="bg-gray-300 hover:bg-gray-400 transition duration-300 shadow-xl rounded-xl mx-4 p-4 text-center text-gray-800 md:p-8">
          <p className="font-bold italic text-3xl">
            &ldquo;Parallax effect adds depth by moving layers at different
            speeds during scrolling.&rdquo;
          </p>
        </blockquote>
      </div>

      <div className="leading-normal mx-auto py-12 px-4 max-w-xl">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Multiple Layers:
        </h2>
        <ul className="max-w-xl space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            The parallax effect involves dividing the page into different
            layers, with each layer containing different elements or content
            sections.
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Each layer moves at a different speed as the user scrolls, creating
            the illusion of depth and movement.
          </li>
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Implementation with CSS and JavaScript:
        </h2>
        <ul className="max-w-xl space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            CSS is used to set the position, size, and z-index properties of the
            layers.
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            JavaScript can be used to control the movement of the layers in
            response to user scrolling.
          </li>
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Images and Backgrounds:
        </h2>
        <ul className="max-w-xl space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Frequently, large background images are used for each layer,
            contributing to the parallax effect.
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            These images can be static or, in some cases, even videos or
            multimedia elements.
          </li>
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Scrolling Speeds:
        </h2>
        <ul className="max-w-xl space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            The key to the effect lies in assigning different scrolling speeds
            to each layer.
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Layers closer to the viewer (usually in the foreground) move faster,
            while farther layers move more slowly.
          </li>
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Responsive Design:
        </h2>
        <ul className="max-w-xl space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            When implementing the parallax effect, it&apos;s important to
            consider responsive design to ensure it works properly on a variety
            of devices and screen sizes.
          </li>
        </ul>

        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Frameworks and Libraries:
        </h2>
        <ul className="max-w-xl space-y-1 text-gray-500 list-inside">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Frameworks and libraries like Parallax.js, ScrollMagic, and AOS
            (Animate On Scroll) facilitate the implementation of the parallax
            effect without the need for extensive custom code.
          </li>
        </ul>
      </div>
      <footer className="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <Link
            href="https://joca.dev/en/me/?ref=parallax-codepen"
            target="_blank"
            className="hover:underline"
          >
            Joca.dev
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

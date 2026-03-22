import Image from "next/image";

export default function ResearchPaper() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Research Paper and <span className="text-red-600">Publication</span>
      </h2>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center">
          <Image
            src="/certificates/rtos.png"
            alt="Real Time Operating System Publication"
            width={320}
            height={220}
            className="rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-center">
            Real Time Operating System
          </h3>
          <p className="text-gray-600 text-center mb-4">
            Research paper published on Real Time Operating System.
          </p>
          <a
            href="/certificates/rtos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            View Research Paper
          </a>
        </div>
      </div>
    </section>
  );
}

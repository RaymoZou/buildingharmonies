import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9F0] border-t border-[#BAD6EB] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#3A4A93] mb-4">
              Building Harmonies
            </h3>
            <p className="text-[#4A58A3] text-sm">
              This website was built by{" "}
              <a
                className="hover:underline font-bold"
                href="https://www.raymondzou.xyz"
                target="_blank"
              >
                Raymond
              </a>{" "}
              (he's currently looking for work!) and{" "}
              <a
                className="hover:underline font-bold"
                href="https://www.linkedin.com/in/jordan-fun-23a605217/"
                target="_blank"
              >
                Jordan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

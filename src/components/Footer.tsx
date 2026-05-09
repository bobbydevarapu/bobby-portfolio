const Footer = () => {
  return (
    <footer
      className="
        section-divider

        relative

        py-6

        border-t border-white/[0.04]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-5 sm:px-6 lg:px-8

          flex
          flex-col
          sm:flex-row

          items-center
          justify-between

          gap-3
        "
      >

        {/* LEFT */}
        <p
          className="
            text-zinc-500

            text-sm

            text-center
            sm:text-left
          "
        >
          © 2026 Bobby Devarapu. All rights reserved.
        </p>

        {/* RIGHT */}
        <p
          className="
            text-zinc-600

            text-[13px]

            text-center
            sm:text-right
          "
        >
          Built with React, TypeScript & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;
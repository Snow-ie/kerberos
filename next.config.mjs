/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1️⃣  Tell Next.js to emit a static site in the /out folder
  output: "export",

  // 2️⃣  (Optional) Serve “/about” as “/about/index.html”
  //     Static hosts without Next’s custom routing prefer this.
  trailingSlash: true,

  // 3️⃣  (Optional) Disable Next-optimised images so <Image> just copies files
  //     Useful when you don’t have the standalone image optimizer running.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

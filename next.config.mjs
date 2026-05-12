/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // next img
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        // port: "",
        pathname: "/images/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        // port: "",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
  // redirects
  async redirects() {
    return [
      {
        source: "/food-details/:id",
        destination: "/foods/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

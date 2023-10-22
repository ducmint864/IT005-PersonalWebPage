/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
  images: {
    unoptimized: true,
    path: `/`,
}

}

module.exports = nextConfig

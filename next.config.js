/** @type {import("next").NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["tmdb.org", "themoviedb.org", "upload.wikimedia.org"],
    }
}

module.exports = nextConfig

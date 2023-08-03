/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://www.robuxtrex.co.uk/',
                permanent: true,
            }
        ]
    }
}

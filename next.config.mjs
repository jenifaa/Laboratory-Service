/** @type {import('next').NextConfig} */
const nextConfig = 
    {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i.ibb.co.com',
            
            },
          ],
        },
      
        // async redirects() {
        //   return [
        //     {
        //       source: "/api/auth/login",
        //       destination: "https://jenifaa.kinde.com/auth",
        //       permanent: false,
        //     },
        //     {
        //       source: "/api/auth/register",
        //       destination: "https://jenifaa.kinde.com/register",
        //       permanent: false,
        //     },
        //   ];
        // },
      
};

export default nextConfig;

import { Sometype_Mono } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Header from "./components/header";
import Stage from "./components/three/stage";
// const sometype = Sometype_Mono({ subsets: ["latin"] });
// const plex_sans = IBM_Plex_Sans({ subsets: ["latin"] });
import { Sometype, plex_sans } from "./fonts";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

// import OptimizedStage from "./components/three/OptimizedStage";
export const metadata = {
    title: "Manh Portfolio",
    description: "Maker of things",
    openGraph: {
        type: "website",
        url: "https://manhellis.com",
        title: "Manh Portfolio",
        description: "Front End Developer, Tech Enthusiast, Climber",
        images: [
            {
                url: "https://www.manhellis.com/og.jpg",
                width: 1200,
                height: 630,
                alt: "Manh Portfolio",
            },
        ],
    },
    
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${Sometype.variable} ${plex_sans.variable}`}
        >
            <body>
                <Header />
                {children}
                <Footer />
                <div className="bg-three">
                    <Stage />
                    {/* <OptimizedStage /> */}
                </div>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}

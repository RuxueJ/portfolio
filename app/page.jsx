import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className=" flex flex-row-reverse items-center justify-between xl:justify-start xl:flex-row">
            <div className="text-center xl:text-left">
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="ff5733 ">Ruxue Jin</span>
              </h1>

              <p className="text-l xl:text-3xl xl:mb-6 ">
                Master student of computer science
              </p>
              <div className="xl:mb-6">
                <a
                  href="https://www.sfsu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ff5733 underline text-l xl:text-3xl"
                >
                  SFSU
                </a>
              </div>

              <p className="text-l mb-6 xl:text-3xl">Software Developer</p>

              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent hover:bg-accent transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

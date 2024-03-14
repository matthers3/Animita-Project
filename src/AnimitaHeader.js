import animita from './assets/animation.gif';
import tumblrLogo from './assets/i_tumblr_desktop.svg';
import discordLogo from './assets/discord.svg';

export function AnimitaHeader()
{
    const discord = "https://discord.gg/usYM2S6d";
    const tumblr = "https://www.tumblr.com/animitaproject";

    return (
      <div className="flex flex-col justify-center items-center lg:h-3/4
        mt-12 lg:mt-0 xl:mt-0 2xl:mt-0">
        <img src={animita} className="App-logo w-1/2 lg:w-1/4 h-auto" alt="logo" style={{animationIterationCount: 1}} />

        <div className="flex mt-2">
          <a href={discord} target="_blank" rel="noopener noreferrer">
              <img src={discordLogo} alt="Twitter Logo" className="h-12 w-12 m-2" />
          </a>

          <a href={tumblr} target="_blank" rel="noopener noreferrer">
              <img src={tumblrLogo} alt="Twitter Logo" className="h-12 w-12 m-2" />
          </a>
        </div>

      </div>
    );
}
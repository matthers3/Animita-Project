
import lonely from './assets/lonely.png';
import fishbowl from './assets/fishbowl.png';
import voyager from './assets/voyager_dark.png';

import twitterLogo from './assets/i_twitter_desktop.svg';
import tumblrLogo from './assets/i_tumblr_desktop.svg';
import instagramLogo from './assets/i_instagram_desktop.svg';
import link from './assets/link.svg';

export function Collaborators()
{
    const spanColor = "#EB6E48";
    
    let collabs = [
        {
            name: "Lonely House",
            logo: lonely,
            media: {
                // twitter: "asdfasd",
                tumblr: "https://www.tumblr.com/lonely-house",
                // instagram: "adsf",
                // link: "asdf"
            },
            marginTop: "pt-0"
        },
        {
            name: "Fishbowl Team",
            logo: fishbowl,
            media: {
                twitter: "https://twitter.com/team_fishbowl",
                // tumblr: "adsf",
                // instagram: "adsf",
                link: "https://www.fishbowlteam.com/"
            },
            marginTop: "pt-16"
        },
        {
            name: "Studio Voyager",
            logo: voyager,
            media: {
                twitter: "https://twitter.com/StdoVoyager",
                // tumblr: "adsf",
                instagram: "https://www.instagram.com/stdovoyager/",
                link: "https://beacons.ai/studiovoyager"
            },
            marginTop: "pt-16"
        }
    ]

    return (
        <div className="flex flex-col mg:px-36 lg:px-36 mt-4 lg:mt-32 justify-center items-center pt-12">
            <h3 className=" pb-12 AboutUsTitle text-center text-3xl md:text-6xl font-bold">
            Who is  <span style={{color: "#EB6E48"}}><br className="block md:hidden"/>Animita</span>
            </h3>

            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center">
                {collabs.map((collab, index) => (
                    <Collaborator key={index} collab={collab}/>
                ))}
            </div>
            <div className="pt-32"></div>
        </div>
    )
}

function Collaborator(props) {
    return (
        <div className="lg:w-1/3 flex flex-col justify-center items-center lg:m-12 pb-2">
            <div className={`flex justify-center items-center max-w-64 h-64 ${props.collab.marginTop} lg:pt-0 lg:h-80 lg:w-full`}>
                <img src={props.collab.logo} alt="Collaborator Logo" className="max-h-full max-w-full" />
            </div>
            <h2 className="pt-8 text-2xl font-bold">{props.collab.name}</h2>
            <div className="flex mt-2">

                {props.collab.media.link && (
                    <a href={props.collab.media.link} target="_blank" rel="noopener noreferrer">
                        <img src={link} alt="Twitter Logo" className="h-12 w-12 m-2" />
                    </a>
                )}  

                {props.collab.media.twitter && (
                    <a href={props.collab.media.twitter} target="_blank" rel="noopener noreferrer">
                        <img src={twitterLogo} alt="Twitter Logo" className="h-12 w-12 m-2" />
                    </a>
                )}

                {props.collab.media.tumblr && (
                    <a href={props.collab.media.tumblr} target="_blank" rel="noopener noreferrer">
                        <img src={tumblrLogo} alt="Twitter Logo" className="h-12 w-12 m-2" />
                    </a>
                )}

                {props.collab.media.instagram && (
                    <a href={props.collab.media.instagram} target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Twitter Logo" className="h-12 w-12 m-2" />
                    </a>
                )}  

            </div>
        </div>
    );
}
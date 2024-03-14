import animita1 from "./assets/animita1.png";

export function AboutUs()
{
    const spanColor = "#EB6E48";
    const p1 = <>An art collective bound by a love of horror In its every way, shape and form. Helping eachother publish <span style={{color: spanColor}}>short and high-quality horror</span> experiences for your pleasure and enjoyment.</>;
    const p2 = <>An <span style={{color: spanColor}}>animita</span> is house for a wandering soul who died away from home. Handmade by the people who remember the dead and wish for them not to be alone.</>;
    const p3 = <>This is what our games are to us, a digital memento mori where we lay to rest our ideas, and mark them with a makeshift grave. For you, and everyone who passes by, to play and (with a bit of hope) remember.</>;

    return (
        <div className="flex flex-col px-12 mg:px-36 lg:px-36 mt-8 lg:mt-32 justify-center items-center pt-12">
            <h3 className=" pb-12 AboutUsTitle text-center text-3xl md:text-6xl font-bold">
                We are <span style={{color: "#EB6E48"}}><br className="block md:hidden"/>Animita Project</span>
            </h3>

            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center">
                <div className="w-4/5 sm:w-1/2 lg:w-1/4">
                    <img src={animita1}  alt="animita"/>
                </div>
                <div className="lg:pl-12 flex justify-center align-middle h-full pt-4 lg:pt-0">
                    <div className="flex flex-col w-full items-end">
                        <p className="aboutus-paragraph pt-10 text-sm md:text-xl lg:text-base 2xl:text-xl">{p1}</p>
                        <p className="aboutus-paragraph pt-10 text-sm md:text-xl lg:text-base 2xl:text-xl">{p2}</p>
                        <p className="aboutus-paragraph pt-10 text-sm md:text-xl lg:text-base 2xl:text-xl">{p3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
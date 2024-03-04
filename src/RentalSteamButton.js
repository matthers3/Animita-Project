
export function ShowCaseGameTitle()
{
  return (
    <div>
      <h6 className="text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bolder">new release!</h6>
      <h1 className="text-6xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bolder">RENTAL!</h1>
      <h2 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bolder">AVAILABLE NOW!</h2>
    </div>
  );
}

export function RentalButton()
{
    return (
      <a href="https://store.steampowered.com/app/2796550/Rental/" target="_blank" rel="noopener noreferrer">
        <div className="SteamButton mt-8 md:mt-12 p-6 lg:p-6 xl:p-6 2xl:p-6">
          <h5 className="text-xl xl:text-xl 2xl:text-xl font-bold">Play on Steam</h5>
        </div>
      </a>
    )
}

export function ShowCaseGameText(prop)
{
  return (
    <div className="flex justify-center lg:justify-normal xl:justify-normal 2xl:justify-normal">
      <p className="gameText 
      pt-8 font-extralight
      text-sm md:text-xl lg:text-xl xl:text-base 2xl:text-base">
        {prop.description}
      </p>
    </div>
  )
}


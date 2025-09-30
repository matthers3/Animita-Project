
export function ShowCaseGameTitle()
{
  return (
    <div>
      <h1 className="text-6xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bolder">RENTAL</h1>
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

export function PresskitButton()
{
    const link = "https://drive.google.com/drive/folders/1qUWfKLIFkmj6uyGn6CFqooWccUYA8Sl1";

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="SteamButton mt-6 p-6 lg:p-4">
          <h5 className="text-md font-bold">Presskit</h5>
        </div>
      </a>
    )
}

export function PlushieButton()
{
    const link = "https://www.makeship.com/petitions/umi-plush";

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="SteamButton mt-6 p-6 lg:p-4">
          <h5 className="text-md font-bold">Get the Plushie</h5>
        </div>
      </a>
    )
}

export function MonadButton()
{
    const link = "https://smarto-club.itch.io/the-monad";

    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="SteamButton mt-6 p-6 lg:p-4">
          <h5 className="text-md font-bold">Play for free</h5>
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
      text-sm md:text-xl lg:text-base xl:text-base 2xl:text-base">
        {prop.description}
      </p>
    </div>
  )
}


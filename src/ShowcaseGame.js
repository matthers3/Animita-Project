import { RentalButton, ShowCaseGameText, ShowCaseGameTitle } from './RentalSteamButton';
import rentalGif from './assets/rentalShowcase.gif';

export function ShowCaseGame()
{
    const description = "Rental is a short and spooky adventure game about the dangers of renting a house in an unknown place.";

    return (
      <div className="flex flex-col lg:flex-row xl:flex-row 
        col-span-6 justify-center lg:justify-center
        px-12 mg:px-36 lg:px-36 
        lg:h-3/5 xl:h-3/5 2xl:h-3/5
        mt-8 lg:mt-12 xl:mt-12 2xl:mt-12">

        <div className="rental">
          <div className="information font-bold text-center lg:text-left">
            <ShowCaseGameTitle />
            <div className='hidden lg:block xl:block 2xl:block'>
              <ShowCaseGameText description={description}/>
              <RentalButton />
            </div>
          </div>
        </div>

        <div className="image flex text-center
          flex-col lg:flex-row xl:flex-row 2xl:flex-row">
          <div className='flex w-full
          align-middle justify-center
          lg:pl-6 xl:pl-6 2xl:pl-6
          mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
            <img src={rentalGif} alt="Rental" className="w-full object-cover" />
          </div>
          <div className="w-full flex-col justify-center align
            lg:hidden xl:hidden 2xl:hidden ">
              <ShowCaseGameText description={description}/>
              <RentalButton />          
          </div>
        </div>
      </div>
    )
}
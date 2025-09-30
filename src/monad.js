import { MonadButton, PlushieButton, ShowCaseGameText } from './RentalSteamButton';
import umiImage from './assets/umi.webp';
import monadPicture from './assets/monad.png';
import { SectionTitle } from './sectionTitle';

export function Monad()
{
    const description = "Check out Lonely House's new multiplayer exploration game.";

    return (
      <div className="flex flex-col lg:flex-row xl:flex-row 
        col-span-6 justify-start lg:justify-center
        px-12 mg:px-36 lg:px-36 
        lg:h-2/5 xl:h-2/5 2xl:h-2/5
        mt-8 lg:mt-12 xl:mt-12 2xl:mt-12
        mb-16 lg:mb-32 xl:mb-32 2xl:mb-32">

        <div className="rental">
          <div className="information font-bold text-center lg:text-left">
            <SectionTitle title1="new game" title3="THE MONAD"/>
            <div className='hidden lg:flex lg:flex-col'>
              <ShowCaseGameText description={description}/>
              <MonadButton />
            </div>
          </div>
        </div>

        <div className="image flex text-center
          flex-col lg:flex-row xl:flex-row 2xl:flex-row">
          <div className='flex w-full
          align-middle justify-center
          lg:pl-6 xl:pl-6 2xl:pl-6
          mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>
            <img src={monadPicture} alt="Rental" className="w-full object-cover" />
          </div>
          <div className="w-full flex flex-col justify-center align
            lg:hidden xl:hidden 2xl:hidden ">
              <ShowCaseGameText description={description}/>
              <MonadButton />     
          </div>
        </div>
      </div>
    )
}
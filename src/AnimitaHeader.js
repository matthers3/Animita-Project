import animita from './assets/animation.gif';

export function AnimitaHeader()
{
    return (
      <div className="flex justify-center items-center lg:h-3/4
        mt-12 lg:mt-0 xl:mt-0 2xl:mt-0">
        <img src={animita} className="App-logo w-1/2 lg:w-1/4 h-auto" alt="logo" style={{animationIterationCount: 1}} />
      </div>
    );
}
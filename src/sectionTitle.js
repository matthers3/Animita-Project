
export function SectionTitle(props)
{
    return (
        <div>
          <h6 className="text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bolder">{props.title1}</h6>
          <h2 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bolder mt-2">{props.title3}</h2>
        </div>
      );
}
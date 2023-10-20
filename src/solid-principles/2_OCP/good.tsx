import { getAllTypes } from '../../constants/Types';
import TypeTag from './TypeTag';

function OCP() {

    const types = getAllTypes();
    function getTypeTagImage(name: string) {
        return <img className="w-6" src={`/src/assets/types/icons/${name}.svg`} />;
    }
    
    return (
        <section className="flex justify-center flex-wrap gap-4 px-28 py-6">
          {types.map((type) => (
            <TypeTag
              key={type.name}
              selected={true}
              name={type.name}
              icon={getTypeTagImage(type.name)}
              onClick={() => null}
            />
          ))}
        </section>
      );
}

export default OCP
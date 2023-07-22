import { useEffect, useState } from "react";
import { PaginationPokemonData } from "./Interfaces/PokemonInterface";

interface PaginationProps extends PaginationPokemonData {
  onUrlChange: (newUrl: string) => void;
}

export default function Pagination({
  count,
  url,
  onUrlChange,
}: PaginationProps) {
  const [current, setCurrent] = useState<number>(1);
  const [previouses, setPreviouses] = useState<Array<number>>([])
  const [nexts, setNexts] = useState<Array<number>>([])
  const lastPage = Math.ceil(count / 9);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = Number(event.currentTarget.value)
    const offset = (value - 1) * 9
    onUrlChange(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`)
  };

  useEffect(() => {
    const urlObj = new URL(url);
    const searchParams = urlObj.searchParams;

    const offset = searchParams.get("offset");
    const limit = searchParams.get("limit");

    if (offset && limit) {
      const calculatedCurrent = Math.ceil(Number(offset) / Number(limit)) + 1
      setCurrent(calculatedCurrent)
      if (calculatedCurrent == 1){
        setNexts([calculatedCurrent+1, calculatedCurrent+2])
      }
      if (calculatedCurrent == 2) {
        setPreviouses([1])
        setNexts([calculatedCurrent+1, calculatedCurrent+2])
      } else if (calculatedCurrent >= 3 && calculatedCurrent -2 < lastPage) {
        setPreviouses([calculatedCurrent-2, calculatedCurrent-1])
        setNexts([calculatedCurrent+1, calculatedCurrent+2])
      }
      if (calculatedCurrent == lastPage || calculatedCurrent == lastPage -1){
        setNexts([])
      }
    }
  }, [url]);

  return (
    <div className="pagination-container">
      {
        previouses.includes(1) || current == 1?
        null
        :
        <button
            onClick={handleClick} value={1}
          >
            {1}
          </button>
      }
      {previouses && current != 1 ? 
        previouses.map((previous, index)=> (
          <button
            key={index}
            onClick={handleClick} value={previous}
          >
            {previous}
          </button>
        )) : null}
      {current}
      {nexts.length > 0? 
        nexts.map((next, index)=> (
          <button
            key={index}
            onClick={handleClick} value={next}
          >
            {next}
          </button>
        )) : null}
      {
        nexts.includes(lastPage) || current == lastPage?
        null
        :
        <button
            onClick={handleClick} value={lastPage}
          >
            {lastPage}
          </button>
      }
    </div>
  );
}

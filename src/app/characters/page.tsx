import Character from "@/components/character";
import { fetch } from "@/services";
import { CharactersResponse } from "@/types";

export default async function Page() {
  const charactersResponse = await fetch<CharactersResponse>("/v1/public/characters");
  const characters = charactersResponse.data.results;

  return (
    <div>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );

}

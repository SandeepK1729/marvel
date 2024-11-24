import type { Character } from "@/types";
import Image from "next/image";

export default function Character({ character }: { character: Character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <Image
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
        width={200}
        height={200}
      />
    </div>
  );
}

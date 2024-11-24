"use client";
import type { Character } from "@/types";
import Image from "next/image";
import Link from "next/link";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Character({ character }: { character: Character }) {
  /*
  - comics
  - series
  - stories
  - events
  - urls
  */
  return (
    <div style={{ width: '20%' }}>
      <Link href={`/characters/${character.id}`}>
        <Card sx={{  }}>
          <CardMedia />
            <Image
              src={character.thumbnail.path + "." + character.thumbnail.extension}
              alt={character.name}
              width={345}
              height={345}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            {character.description && <Typography variant="body2" color="text.secondary">
              <q>{character.description}</q>
            </Typography>}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

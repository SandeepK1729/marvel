
export interface Response<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
};

export type Thumbnail = {
  path: string;
  extension: string;
}

export type ResourceType = 'comic' | 'series';

export interface SubResponse {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type?: ResourceType;
  }[];
  returned: number;
}

export type URL = {
  type: string;
  url: string;
}

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  comics: SubResponse;
  series: SubResponse;
  stories: SubResponse;
  events: SubResponse;
  urls: URL[];
}

export type CharactersResponse = Response<Character>;

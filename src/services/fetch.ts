import MD5 from "crypto-js/md5";

const {
  GATEWAY_URL = 'https://gateway.marvel.com',
  PUBLIC_KEY,
  PRIVATE_KEY,
  DEFAULT_REVALIDATE_TIME = 3600,
} = process.env;

const customizedFetch = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const timestamp = new Date().getTime();
  const hash = MD5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`).toString();

  const params = new URLSearchParams({
    ts: timestamp.toString(),
    apikey: PUBLIC_KEY || '',
    hash
  });
  
  const fullUrl = new URL(url, GATEWAY_URL);
  fullUrl.search = params.toString();

  const res = await fetch(
    fullUrl.toString(), {
      next: { revalidate: DEFAULT_REVALIDATE_TIME as number | false },
      ...options,
    });
  return res.json() as Promise<T>;
};

export default customizedFetch;

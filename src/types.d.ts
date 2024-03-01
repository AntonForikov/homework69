export interface Show {
  id: number,
  name: string,
  summary: string,
  image: {medium: string},
}

export interface ResponseFromApi {
  score: number,
  show: ShowOption
}

export interface ShowOption {
  id: string,
  label: string,
  name: string
}
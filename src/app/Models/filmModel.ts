
export interface resultModel{
    results: filmModel[]
}

export interface filmModel{
name: any
showFull: any
    id:string,
    original_title:string,
    title:string,
    overview: string,
    poster_path: string,
    vote_average: number,
    release_date: string
}
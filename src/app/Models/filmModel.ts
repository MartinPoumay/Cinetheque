
export interface resultModel{
    results: filmModel[]
}

export interface filmModel{
    id:string,
    original_title:string,
    overview: string,
    poster_path: string
}
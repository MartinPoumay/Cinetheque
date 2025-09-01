
export interface resultModel{
    results: filmModel[]
}

export interface filmModel{
showFull: any
    id:string,
    original_title:string,
    title:string,
    overview: string,
    poster_path: string
}
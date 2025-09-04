export interface resultModel{
    results: serieModel[]
}

export interface serieModel{
showFull: any
    id:string,
    original_name:string,
    title:string,
    overview: string,
    poster_path: string
}
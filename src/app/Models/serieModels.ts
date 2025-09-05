export interface resultSerieModel{
    results: serieModel[]
}

export interface serieModel{
setActiveCard(): unknown
name: any
showFull: any
    id:string,
    original_name:string,
    title:string,
    overview: string,
    poster_path: string,
    popularity : number
}
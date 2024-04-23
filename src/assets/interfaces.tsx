export interface Host{
    name:string,
    picture:string
}

export interface LogementInterface{
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: Host,
    rating: string,
    location: string,
    equipments: string[],
    tags: string[]
}

export interface CollapseInterface{
    id?: number,
    title: string,
    content?: string,
    equipments?:string[],
    description?:string
}
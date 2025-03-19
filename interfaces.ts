export interface CarItem {
    id:string;
    model:string
    picture:string
}

export interface CarJson {
    count:number;
    data:CarItem[]
}
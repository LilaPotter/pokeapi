export interface PokedexInterface {
    count:    number;
    next:     string;
    previous: null;
    results:  ResultInterface[];
}

export interface ResultInterface {
    name: string;
    url:  string;
    foto: string;

}
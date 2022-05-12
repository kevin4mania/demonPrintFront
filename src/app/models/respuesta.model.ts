export interface Respuesta {
    ok:       boolean;
    codError: string;
    msg:      string;
    body:     Array<string[]>;
}

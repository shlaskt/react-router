export enum Paths {
    Home, 
    About,
}

export const routeMap :Record<Paths,string> = {
    [Paths.Home]: "/",
    [Paths.About]: "/about"
}
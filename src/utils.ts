export enum Paths {
    Home, 
    About,
    Products,
    ProductDetails,
    Contact,
}

export const routeMap :Record<Paths,string> = {
    [Paths.Home]: "/",
    [Paths.About]: "/about",
    [Paths.Products]: "/products",
    [Paths.ProductDetails]: "/products/:id",
    [Paths.Contact]: "/contact",
}


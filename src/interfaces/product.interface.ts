export default interface IProduct {
    name: string,
    quantity: Number,
    category: string,
    lastSaleDate: Date,
    lastSaleQuantity: Number,
    daysToRunOut: Number,
    status: string
}
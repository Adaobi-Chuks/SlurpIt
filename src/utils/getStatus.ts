export default function getStatus(quantity: number) {
    if(quantity === 0) {
        return "out of stock";
    } else if (quantity <= 70) {
        return "low stock";
    }
    return "available";
}

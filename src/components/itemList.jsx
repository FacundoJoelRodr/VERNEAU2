import { Item } from "../components/item"

export const ItemList = ({productos}) =>
 productos.map(p => <Item key={p.id} p={p} />)

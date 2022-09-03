import { Item } from "../Item";
import { ItemPicture } from "../itempicture";

export class ItemViewModel {
    Item: Item;
    Items: Array<Item>;
    ItemPictures: Array<ItemPicture>;
    constructor() {
        this.Item = new Item();
        this.ItemPictures = new Array<ItemPicture>();
        this.Items = new Array<Item>();
    }
}
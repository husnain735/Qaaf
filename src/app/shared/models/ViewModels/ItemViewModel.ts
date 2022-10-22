import { Item } from "../Item";
import { ItemPicture } from "../itempicture";
import { ItemSize } from "../ItemSize";

export class ItemViewModel {
    Item: Item;
    Items: Array<Item>;
    ItemPictures: Array<ItemPicture>;
    New: Array<Item>;
    NewPictures: Array<ItemPicture>;
    Sale: Array<Item>;
    SalePictures: Array<ItemPicture>;
    UnStitched: Array<Item>;
    UnStitchedPictures: Array<ItemPicture>;
    TotalItems: number;
    ItemSize: Array<ItemSize>;
    constructor() {
        this.Item = new Item();
        this.ItemPictures = new Array<ItemPicture>();
        this.Items = new Array<Item>();
        this.ItemSize = new Array<ItemSize>();
    }
}

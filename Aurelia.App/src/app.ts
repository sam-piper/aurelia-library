import { AccountItem } from "my-shared-lib";

export class App {
    message: string;

    constructor() {
        const item = new AccountItem();
        item.accountIdentifier = "398729872";
        this.message = item.accountIdentifier;
    }
}
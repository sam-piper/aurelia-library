import { JsonObject, JsonMember } from "typedjson-npm";
import { AccountItemType } from "./AccountItemType";

@JsonObject
export class AccountItem {
    @JsonMember({ type: String })
    entityId: string;

    @JsonMember({ type: Number })
    itemType: AccountItemType;

    @JsonMember({ type: String })
    accountName: string;

    @JsonMember({ type: String })
    accountIdentifier: string;

    @JsonMember({ type: String })
    currencyCode: string;

    @JsonMember({ type: Date })
    lastActivity: Date;
}
import { JsonMember, JsonObject } from "typedjson-npm";

@JsonObject
export class ListItem {
    constructor(name?: string, value?: string) {
        this.name = name || '';
        this.value = value || '';
    }

    @JsonMember({ type: String })
    name: string;

    @JsonMember({ type: String })
    value: string;
}
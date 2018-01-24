import { JsonMember, JsonObject } from "typedjson-npm";

@JsonObject
export class ValidationMessage {
    @JsonMember({ type: String })
    key: string;

    @JsonMember({ type: String })
    description: string;
}
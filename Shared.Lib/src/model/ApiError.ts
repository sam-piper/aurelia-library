import { JsonMember, JsonObject } from "typedjson-npm";
import { ModelValidationResults } from "./validation/ModelValidationResults";

@JsonObject
export class ApiError {
    @JsonMember({ type: Number })
    statusCode: number;

    @JsonMember({ type: String })
    message: string;

    @JsonMember({ type: Boolean })
    isError: boolean;

    @JsonMember({ type: String })
    detail: string;

    @JsonMember({ type: ModelValidationResults })
    messages: ModelValidationResults;
}
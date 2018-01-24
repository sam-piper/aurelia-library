import { ValidationMessage } from "./ValidationMessage";
import { JsonMember, JsonObject } from "typedjson-npm";

// TODO: need better support for dictionary pattern here from TypedJSON, using type of Object means we aren't parsing ValidationMessage instances -
// direct support for Map is coming in next version

@JsonObject({ knownTypes: [ValidationMessage] })
export class ModelValidationResults {
    @JsonMember({ type: Object })
    errors: { [id: string]: ValidationMessage[] };

    @JsonMember({ type: Object })
    warnings: { [id: string]: ValidationMessage[] };

    addError(key: string, message: string) {
        if (key && message) {
            this.errors = this.errors || {};
            this.addMessage(this.errors, key, message);
        }
    }

    addWarning(key: string, message: string) {
        if (key && message) {
            this.warnings = this.warnings || {};
            this.addMessage(this.warnings, key, message);
        }
    }

    hasAnyErrors(): boolean {
        return Object.keys(this.errors).length > 0;
    }

    hasAnyWarnings(): boolean {
        return Object.keys(this.warnings).length > 0;
    }

    hasAnyMessages(): boolean {
        return this.hasAnyErrors() || this.hasAnyWarnings();
    }

    getErrorMessages(): string[] {
        const messages = this.getMessages(this.errors);
        return messages;
    }

    getWarningMessages(): string[] {
        const messages = this.getMessages(this.warnings);
        return messages;
    }

    private addMessage(map: { [id: string]: ValidationMessage[] }, key: string, message: string) {
        const value = new ValidationMessage();
        value.key = key;
        value.description = message;

        map[key] = map[key] || [];
        map[key].push(value);
    }

    private getMessages(dictionary: { [id: string]: ValidationMessage[] }): string[] {
        const messages: string[] = [];
        for (let key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                const list = dictionary[key];
                if (list) {
                    for (let message of list) {
                        if (messages.indexOf(message.description) === -1) {
                            messages.push(message.description);
                        }
                    }
                }
            }
        }

        messages.sort();
        return messages;
    }
}
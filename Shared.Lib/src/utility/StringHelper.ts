export class StringHelper {
    static toPascalCase(input: string): string {
        if (!input) {
            return input;
        }

        if (input.length === 1) {
            return input.toLowerCase();
        }

        const c = input.charAt(1);
        const result = input.charAt(0).toUpperCase() +
                       (c === c.toUpperCase() ? c.toLowerCase() : c) +
                       (input.length > 2 ? input.substr(2) : "");

        return result;
    }

    static toCamelCase(input: string): string {
        if (!input) {
            return input;
        }

        if (input.length === 1) {
            return input.toLowerCase();
        }

        const result = input.charAt(0).toLowerCase() + input.charAt(1).toLowerCase() + (input.length > 2 ? input.substr(2) : "");
        return result;
    }
}
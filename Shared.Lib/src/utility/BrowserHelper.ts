export class BrowserHelper {
    private static _transitionEndEvent: string;

    static getTransitionEndEvent(): string {
        if (this._transitionEndEvent) {
            return this._transitionEndEvent;
        }

        const el = document.createElement("fake") as any;
        const transitions: any = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        };

        // ReSharper disable once MissingHasOwnPropertyInForeach
        for (let t in transitions) {
            if (el.style[t] !== undefined) {
                this._transitionEndEvent = transitions[t];
                return this._transitionEndEvent;
            }
        }

        return this._transitionEndEvent;
    }
}
import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Display extends BaseGameObject {
    blockGravityForces = true;

    reactToCollision = function (collidingObject)   {
        if (collidingObject.name == "Cat") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
        }
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["../images/display2.png"]);
    }
}

export {Display};

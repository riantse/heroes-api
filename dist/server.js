"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose_1 = require("mongoose");
const morgan = require("morgan");
const hero_controller_1 = require("./heroes/hero.controller");
const app = express();
mongoose_1.connect("mongodb+srv://heroes:9S3Dfq3CukgLQCJm@cluster0-ttlhu.mongodb.net/heroes?retryWrites=true").then(result => console.log(result));
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(body_parser_1.json({ type: "application/vnd.api+json" }));
app.get("/hero", hero_controller_1.HeroController.list);
app.get("/hero/:id", hero_controller_1.HeroController.byId);
app.listen(8080);
console.log("App listening on port 8080");
//# sourceMappingURL=server.js.map
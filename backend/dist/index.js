"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routes_1.appRouter);
(0, db_1.default)()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
});

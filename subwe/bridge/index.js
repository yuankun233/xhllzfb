"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Basic = __importStar(require("./basic"));
const Route = __importStar(require("./route"));
const UI = __importStar(require("./ui"));
const Network = __importStar(require("./network"));
const Storage = __importStar(require("./storage"));
const Media = __importStar(require("./media"));
const Location = __importStar(require("./location"));
const Share = __importStar(require("./share"));
const Canvas = __importStar(require("./canvas"));
const File = __importStar(require("./file"));
const Open = __importStar(require("./open"));
const Device = __importStar(require("./device"));
const ThirdParty = __importStar(require("./third-party"));
const WXML = __importStar(require("./wxml"));
const wx = {
    ...Basic,
    ...Route,
    ...UI,
    ...Network,
    ...Storage,
    ...Media,
    ...Location,
    ...Share,
    ...Canvas,
    ...File,
    ...Open,
    ...Device,
    ...ThirdParty,
    ...WXML,
};
exports.default = wx;

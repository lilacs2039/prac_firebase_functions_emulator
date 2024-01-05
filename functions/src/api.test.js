"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const globals_1 = require("@jest/globals"); // Add import statement
(0, globals_1.describe)("test", () => {
    (0, globals_1.describe)('createDocument APIを実行のテスト', () => {
        (0, globals_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
            yield axios_1.default.post('http://localhost:5001/prac-firebase-functions/us-central1/createDocument');
        }));
        (0, globals_1.test)('getDocumentで想定通りのレスポンスが返ってくる', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get('http://localhost:5001/prac-firebase-functions/us-central1/getDocument');
            (0, globals_1.expect)(response.data).toEqual({ a: 123 });
        }));
    });
    (0, globals_1.describe)('updateDocument APIを実行のテスト', () => {
        (0, globals_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
            yield axios_1.default.post('http://localhost:5001/prac-firebase-functions/us-central1/updateDocument');
        }));
        (0, globals_1.test)('getDocumentで想定通りのレスポンスが返ってくる', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get('http://localhost:5001/prac-firebase-functions/us-central1/getDocument');
            (0, globals_1.expect)(response.data).toEqual({ a: 234, b: 345 });
        }));
    });
    (0, globals_1.describe)('deleteDocument APIを実行のテスト', () => {
        (0, globals_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
            yield axios_1.default.post('http://localhost:5001/prac-firebase-functions/us-central1/deleteDocument');
        }));
        (0, globals_1.test)('getDocumentで想定通りのレスポンスが返ってくる', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get('http://localhost:5001/prac-firebase-functions/us-central1/getDocument');
            (0, globals_1.expect)(response.data).toEqual("");
        }));
    });
});

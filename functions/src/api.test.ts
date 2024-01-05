import axios from 'axios'
import { describe, test, expect, beforeAll } from '@jest/globals'; // Add import statement

describe("test", () => {
    describe('createDocument APIを実行のテスト', () => {
        beforeAll(async () => {
            await axios.post('http://localhost:5001/prac-firebase-functions/us-central1/createDocument');
        })
        test('getDocumentで想定通りのレスポンスが返ってくる', async () => {
            const response = await axios.get('http://localhost:5001/prac-firebase-functions/us-central1/getDocument');
            expect(response.data).toEqual({ a: 123 })
        })
    })

    describe('updateDocument APIを実行のテスト', () => {
        beforeAll(async () => {
            await axios.post('http://localhost:5001/prac-firebase-functions/us-central1/updateDocument');
        })
        test('getDocumentで想定通りのレスポンスが返ってくる', async () => {
            const response = await axios.get('http://localhost:5001/prac-firebase-functions/us-central1/getDocument');
            expect(response.data).toEqual({ a: 234, b: 345 })
        })
    })

    describe('deleteDocument APIを実行のテスト', () => {
        beforeAll(async () => {
            await axios.post('http://localhost:5001/prac-firebase-functions/us-central1/deleteDocument');
        })
        test('getDocumentで想定通りのレスポンスが返ってくる', async () => {
            const response = await axios.get('http://localhost:5001/prac-firebase-functions/us-central1/getDocument');
            expect(response.data).toEqual("")
        })
    })
});

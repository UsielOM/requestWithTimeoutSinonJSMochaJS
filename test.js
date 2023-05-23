import sinon from "sinon";
import assert from "assert";
import { requestWithTimeout } from './app.js';

describe('Mis pruebas', () => {
    let fakeAPIStub;

    beforeEach(() => {
        fakeAPIStub = sinon.stub().resolves("Hello world");
    })

    afterEach(() => {
        sinon.restore();
    })

    it('Cuando la respuesta es exitosa', async () => {
        const response = await requestWithTimeout();

        assert.strictEqual(response, "Hello world");
        sinon.assert.calledOnce(fakeAPIStub);
    });
    
})
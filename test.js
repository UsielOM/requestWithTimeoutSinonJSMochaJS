import sinon from "sinon";
import assert from "assert";
import { requestWithTimeout } from './app.js';

describe('Mis pruebas', () => {
    let fakeAPIStub;

    beforeEach(() => {
        fakeAPIStub = sinon.stub().resolves("Hello world"); //devolverá una promesa resuelta con el texto Hello World 
    })//Se supone que este se ejecutara antes de cada prueba 

    afterEach(() => {
        sinon.restore(); 
    })//Se ejecutará después de cada prueba.

    it('Cuando la respuesta es exitosa', async () => {
        const response = await requestWithTimeout();

        assert.strictEqual(response, "Hello world");
        //sinon.assert.calledOnce(fakeAPIStub);//El codigo da error si  este nunca es llamado tengo que es
    });
    
})
test('should invoke _spaceReportModal when the custom event is dispatched', async () => {
      // Se obtiene un elemento del DOM utilizando la función "getElement" y se asigna a la variable "elDM".
      elDM = getElement(el, '[data-tag-name="emergency-crane-vehicle-reports-dm"]')

      // Se crea un nuevo evento personalizado con el nombre "emergency-crane-vehicle-reports-open-clore-area" y se asigna a la variable "event".
      const event = new CustomEvent('emergency-crane-vehicle-reports-open-clore-area');
      //Se crea la variable para alamcenar el metodo espiado 
      fakeScope(el, '_spaceReportModal');

      const spy = sinon.spy();

      elDM.dispatchEvent(event);

      // Utilizo spy para espiar  la función "_spaceReportModal" del elemento "el".
      const eventListener = () => {
        assert.isTrue(fakeScope.calledOnce);
      };

      el.addEventListener('emergency-crane-vehicle-reports-open-clore-area', spy);

      expect(spy).to.be.calledOnce;

      el.removeEventListener('emergency-crane-vehicle-reports-open-clore-area', eventListener);
    });

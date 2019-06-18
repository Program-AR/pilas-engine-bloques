import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { pilasMock, interpreterFactoryMock } from '../../helpers/mocks';

module('Integration | Component | pilas blockly', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setup = function() { //TODO: Mover a un lugar más general
      this.set('bloques', ['Repetir']);
      this.set('pilas', pilasMock);

      let modelMock = { 
        get(attr) { return this[attr]; }, 
        estiloToolbox: 'aplanado' 
      };
      this.set('model', modelMock);

      this.owner.register('service:interpreterFactory', interpreterFactoryMock);

      let environmentMock = Service.extend({ });
      this.owner.register('service:environment', environmentMock);

      this.owner.lookup('service:blocksGallery').start();
    };
  });

  test('Cuando el componente está cargando', async function(assert) {
    this.set('cargando', true);
    await render(pilasBlockly());

    assert.dom("button").doesNotExist('No muestra ningún botón');
    assert.ok(existeTexto("cargando"), "Solo muestra el texto 'cargando'");
  });

  test('Cuando el componente está listo para ser usado', async function(assert) {
    await render(pilasBlockly());
    
    assert.ok(existeBoton("Ejecutar"), "Tiene el botón ejecutar visible");
    assert.notOk(existeBoton("Compartir"), 'Ya no existe un botón para compartir por twitter por omisión');
    assert.ok(existeBoton("Abrir"), 'Existe un botón para cargar una solución');
    assert.ok(existeBoton("Guardar"), 'Existe un botón para guardar una solución');
  });

  test('Mientras se ejecuta un ejercicio', async function(assert) {
    this.set("ejecutando", true);
    await render(pilasBlockly());
    assert.ok(existeBoton("Reiniciar"), "Tiene el botón reiniciar visible");
  });

  test('Cuando se termina de ejecutar un ejercicio', async function(assert) {
    this.set("terminoDeEjecutar", true);
    await render(pilasBlockly());
    assert.ok(existeBoton("Reiniciar"), "Tiene el botón reiniciar visible");
  });

  test('Al reiniciar', async function(assert) {
    this.set("terminoDeEjecutar", true);
    await render(pilasBlockly());

    this.$("button:contains('Reiniciar')").click();

    assert.ok(existeBoton("Ejecutar"), "Tiene el botón ejecutar visible");
    assert.notOk(existeBoton("Reiniciar"), "Desaparece el botón reiniciar");
  });

  function pilasBlockly() {
    return hbs`{{ pilas-blockly cargando=cargando ejecutando=ejecutando terminoDeEjecutar=terminoDeEjecutar pilas=pilas bloques=bloques model=model modelActividad=model }}`;
  }

  function existeElementoConTexto(elemento, texto) {
    return this.$(elemento).text().includes(texto);
  }

  function existeBoton(texto) {
    return existeElementoConTexto("button", texto);
  }

  function existeTexto(texto) {
    return existeElementoConTexto("p", texto);
  }
});


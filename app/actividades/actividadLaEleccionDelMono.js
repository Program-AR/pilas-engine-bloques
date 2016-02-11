import bloques from 'pilas-engine-bloques/actividades/bloques';
var {Accion, Sensor, Si, Sino, Procedimiento} = bloques;

var Avanzar = Accion.extend({
  init() {
    this._super();
    this.set('id', 'Avanzar');
  },

  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField('Avanzar')
         .appendField(this.obtener_icono('derecha.png'));
  },

  nombre_comportamiento() {
    return 'MoverACasillaDerecha';
  },

  argumentos() {
    return '{}';
  }
});


var ComerManzana = Accion.extend({
  init() {
    this._super();
    this.set('id', 'ComerManzana');
  },


  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField('Comer manzana ')
         .appendField(this.obtener_icono('../libs/data/iconos.manzana.png'));
  },

  nombre_comportamiento() {
    return 'RecogerPorEtiqueta';
  },

  argumentos() {
    return '{\'etiqueta\' : \'ManzanaAnimada\',  nombreAnimacion: "comerManzana"}';
  }
});



var ComerBanana = Accion.extend({
  init() {
    this._super();
    this.set('id', 'ComerBanana');
  },


  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField('Comer banana ')
         .appendField(this.obtener_icono('../libs/data/iconos.banana.png')); //TODO: Hardcodeo feo de dir de icono
  },

  nombre_comportamiento() {
    return 'RecogerPorEtiqueta';
  },

  argumentos() {
    return '{\'etiqueta\' : \'BananaAnimada\',  nombreAnimacion: "comerBanana"}';
  }
});



var TocandoManzana = Sensor.extend({
  init() {
    this._super();
    this.set('id', 'tocandoManzana');
  },

  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField('¿Tocando manzana')
         .appendField(this.obtener_icono('../libs/data/iconos.manzana.png'))
         .appendField('?');
  },

  nombre_sensor() {
    return 'tocando(\'ManzanaAnimada\')';
  }
});


var TocandoBanana = Sensor.extend({
  init() {
    this._super();
    this.set('id', 'tocandoBanana');
  },

  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField('¿Tocando banana')
         .appendField(this.obtener_icono('../libs/data/iconos.banana.png'))
         .appendField('?');
  },

  nombre_sensor() {
    return 'tocando(\'BananaAnimada\')';
  }
});




var actividadLaEleccionDelMono = {
  nombre: 'La elección del mono',
  id: 'LaEleccionDelMono',
  enunciado: '¿Podés ayudar nuevamente a nuestro mono? Esta vez siempre tiene '+
     'una fruta para comer. ¡Pero no siempre es la misma! \n'+
    'Ejecutá el programa varias veces para asegurarte que siempre funciona. \n' +
    'Pista: ésta vez no alcanza con el bloque "Si".',

  consignaInicial: 'Si el escenario del protagonista varía, nuestro procedimiento debe utilizar alternativas condicionales que ajusten las acciones a estos cambios.',
  
  // la escena proviene de ejerciciosPilas
  escena: LaEleccionDelMono, // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,
  subtareas: [Procedimiento],

  // TODO: aca irian atributos iniciales que se desean para un personaje
  variables: [],
  control: [Si,Sino],
  expresiones: [],
  acciones: [ComerManzana,ComerBanana,Avanzar],
  sensores: [TocandoManzana,TocandoBanana],
};

export default actividadLaEleccionDelMono;

import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  titulo: DS.attr('string'),
  nombre: DS.attr('string'),
  descripcion: DS.attr('string'),
  grupos: hasMany('grupo'),
});
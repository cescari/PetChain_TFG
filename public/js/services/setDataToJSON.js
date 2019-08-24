/************************************************************/
/* File: setDataToJSON.js                                   */
/* Author: Carlos Escario Bajo                              */
/* Proyecto: TFG UNIR                                       */
/* Date: 21/08/2019                                         */
/* Version: 1.0                                             */
/* Javascript para la composicion del objeto JSON a enviar  */
/************************************************************/
var objectUpdate = {};
export function setDataToJSON(_data, _this, _action) {

    _data["vetidentificador"].vetName = _this.$children[0].$data.vetName;
    _data["vetidentificador"].vetId = _this.$children[0].$data.vetId;
    _data["vetidentificador"].vetSurname = _this.$children[0].$data.vetSurname;
    _data["vetidentificador"].vetCol = _this.$children[0].$data.vetCol;

    _data["mascota"].petIdNumber = _this.$children[1].$data.petIdNumber;
    _data["mascota"].fechImplantacion = _this.$children[1].$data.fechImplantacion;
    _data["mascota"].fechNac = _this.$children[1].$data.fechNac;
    _data["mascota"].fechalta = _this.$children[1].$data.fechalta;
    _data["mascota"].petName = _this.$children[1].$data.petName;
    _data["mascota"].raza = _this.$children[1].$data.raza;
    _data["mascota"].razaPet = _this.$children[1].$data.razaPet;
    _data["mascota"].razaOtra = _this.$children[1].$data.razaOtra;
    _data["mascota"].danger = _this.$children[1].$data.danger;
    _data["mascota"].capa = _this.$children[1].$data.capa;
    _data["mascota"].pelo = _this.$children[1].$data.pelo;
    _data["mascota"].genero = _this.$children[1].$data.genero;
    _data["mascota"].passport = _this.$children[1].$data.passport;
    _data["mascota"].aptitud = _this.$children[1].$data.aptitud;
    

    if (_action == 2){
        objectUpdate.fechaUltRev = _this.$children[1].$data.fechaUltRev;
        objectUpdate.vetNameUpdate = _this.$children[1].$data.vetNameUpdate;
        objectUpdate.vetSurnameUpDate = _this.$children[1].$data.vetSurnameUpDate;
        objectUpdate.vetNumUpdate = _this.$children[1].$data.vetNumUpdate;
        objectUpdate.vetProvUpdate = _this.$children[1].$data.vetProvUpdate;
        objectUpdate.estado = _this.$children[1].$data.estado;
        objectUpdate.lesion = _this.$children[1].$data.lesion;
        objectUpdate.numCertf = _this.$children[1].$data.numCertf;
        objectUpdate.observaciones = _this.$children[1].$data.observaciones;

        _data["mascota"].ultima_rev.push(objectUpdate);
    }

    _data["propietario"].propName = _this.$children[2].$data.propName;
    _data["propietario"].propSurname = _this.$children[2].$data.propSurname;
    _data["propietario"].propId = _this.$children[2].$data.propId;
    _data["propietario"].propPhone = _this.$children[2].$data.propPhone;
    _data["propietario"].provProp = _this.$children[2].$data.provProp;
    _data["propietario"].ciudadProp = _this.$children[2].$data.ciudadProp;
    _data["propietario"].cp = _this.$children[2].$data.cp;
    _data["propietario"].propPais = _this.$children[2].$data.propPais;
    
    return _data;
}
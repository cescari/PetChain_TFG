/************************************************************/
/* File: setDataToJSON.js                                   */
/* Author: Carlos Escario Bajo                              */
/* Proyecto: TFG UNIR                                       */
/* Date: 24/08/2019                                         */
/* Version: 2.0                                             */
/* Javascript para la composicion del objeto JSON a enviar  */
/************************************************************/
var objectUpdate = {};

export function setDataToJSON(_data, _this, _action) {
    console.log(_data)
    _data["vetidentificador"].vetName = _this.$children[0].vetName;
    _data["vetidentificador"].vetId = _this.$children[0].vetId;
    _data["vetidentificador"].vetSurname = _this.$children[0].vetSurname;
    _data["vetidentificador"].vetCol = _this.$children[0].vetCol;

    _data["mascota"].petIdNumber = _this.$children[1].petIdNumber;
    _data["mascota"].fechImplantacion = _this.$children[1].fechImplantacion;
    _data["mascota"].fechNac = _this.$children[1].fechNac;
    _data["mascota"].fechalta = _this.$children[1].fechalta;
    _data["mascota"].petName = _this.$children[1].petName;
    _data["mascota"].raza = _this.$children[1].raza;
    _data["mascota"].razaPet = _this.$children[1].razaPet;
    _data["mascota"].razaOtra = _this.$children[1].razaOtra;
    _data["mascota"].danger = _this.$children[1].danger;
    _data["mascota"].capa = _this.$children[1].capa;
    _data["mascota"].pelo = _this.$children[1].pelo;
    _data["mascota"].genero = _this.$children[1].genero;
    _data["mascota"].passport = _this.$children[1].passport;
    _data["mascota"].aptitud = _this.$children[1].aptitud;
    

     if (_action == 2){
        objectUpdate.fechaUltRev = _this.$children[1].fechaUltRev;
        objectUpdate.vetNameUpdate = _this.$children[1].vetNameUpdate;
        objectUpdate.vetSurnameUpDate = _this.$children[1].vetSurnameUpDate;
        objectUpdate.vetNumUpdate = _this.$children[1].vetNumUpdate;
        objectUpdate.vetProvUpdate = _this.$children[1].vetProvUpdate;
        objectUpdate.estado = _this.$children[1].estado;
        objectUpdate.lesion = _this.$children[1].lesion;
        objectUpdate.numCertf = _this.$children[1].numCertf;
        objectUpdate.observaciones = _this.$children[1].observaciones;

        _data["mascota"].ultima_rev[_data["mascota"].ultima_rev.length] = JSON.parse(JSON.stringify(objectUpdate));
    }

    _data["propietario"].propName = _this.$children[2].propName;
    _data["propietario"].propSurname = _this.$children[2].propSurname;
    _data["propietario"].propId = _this.$children[2].propId;
    _data["propietario"].propPhone = _this.$children[2].propPhone;
    _data["propietario"].provProp = _this.$children[2].provProp;
    _data["propietario"].ciudadProp = _this.$children[2].ciudadProp;
    _data["propietario"].cp = _this.$children[2].cp;
    _data["propietario"].propPais = _this.$children[2].propPais;
    
    return _data;
}

export function setJSONToData(_data, _this){
    _this.$children[1].petName = _data["mascota"].petName;
    _this.$children[1].petIdNumber = _data["mascota"].petIdNumber
    _this.$children[1].fechImplantacion = _data["mascota"].fechImplantacion;
    _this.$children[1].fechNac =_data["mascota"].fechNac;
    _this.$children[1].fechalta = _data["mascota"].fechalta;
    _this.$children[1].raza = _data["mascota"].raza;
    _this.$children[1].razaPet = _data["mascota"].razaPet;
    _this.$children[1].razaOtra = _data["mascota"].razaOtra;
    _this.$children[1].danger = _data["mascota"].danger;
    _this.$children[1].capa = _data["mascota"].capa;
    _this.$children[1].pelo = _data["mascota"].pelo;
    _this.$children[1].genero = _data["mascota"].genero;
    _this.$children[1].passport = _data["mascota"].passport;
    _this.$children[1].aptitud = _data["mascota"].aptitud;

   

    _this.$children[2].propName = _data["propietario"].propName;
    _this.$children[2].propSurname = _data["propietario"].propSurname;
    _this.$children[2].propId = _data["propietario"].propId;
    _this.$children[2].propPhone = _data["propietario"].propPhone;
    _this.$children[2].provProp = _data["propietario"].provProp;
    _this.$children[2].ciudadProp = _data["propietario"].ciudadProp;
    _this.$children[2].cp =_data["propietario"].cp;
}
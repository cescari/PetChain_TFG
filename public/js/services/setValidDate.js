/********************************************************/
/* File: setValidDate.js                                */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/08/2019                                     */
/* Version: 1.0                                         */
/* Servicio que comprueba la validez de las fechas      */
/********************************************************/
export function getValidDate(_dateNac, _dateAlta, _dateImpl) {
    var validDate = false;

    var dateImpl = new Date(_dateImpl);
    var dateNac = new Date(_dateNac);
    var dateAlta = new Date(_dateAlta);

    if (dateNac && dateImpl && dateAlta) {
        if (dateNac < dateAlta && dateNac < dateImpl) {
            validDate = true;
        }
    }
    return validDate;
}
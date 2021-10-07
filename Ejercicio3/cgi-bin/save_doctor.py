#!/usr/bin/python3  
# -*- coding: utf-8 -*-

import cgi
import cgitb

cgitb.enable()
import db

print('Content-type: text/html; charset=UTF-8')
print('')

utf8stdout = open(1, 'w', encoding='utf-8', closefd=False)

data = cgi.FieldStorage()
if len(data) > 0:
    try:
        mensaje = ""
        new_doc = db.Doctor('localhost', 'root', '', 'ejercicio3')
        last_doc = len(new_doc.get_doctors())
        id_med = last_doc + 1
        nombre = data.getvalue('nombre-medico')
        exp = data.getvalue('experiencia-medico')
        especialidad = data.getvalue('especialidad-medico')
        foto = ""
        email = data.getvalue('email-medico')
        celu = data.getvalue('celular-medico')
        new_data = id_med, nombre, exp, especialidad, foto, email, celu
        resultado = new_doc.save_doctor(new_data)
        mensaje = "Insertado nuevo médico: " + nombre
        print(mensaje, file=utf8stdout)
    except Exception as e:
        mensaje = "Error con base de datos: {0}".format(e)  + \
            "<br> No se pudo insertar médico en la base de datos."
        print(mensaje, file=utf8stdout)
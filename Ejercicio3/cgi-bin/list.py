#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi
import cgitb

cgitb.enable()
import db

print('Content-type: text/html; charset=UTF-8')
print('')

utf8stdout = open(1, 'w', encoding='utf-8', closefd=False)

docs = db.Doctor('localhost', 'root', '', 'ejercicio3')
list_docs = docs.get_doctors()
if len(list_docs) == 0:
    print("No hay médicos registrados", file=utf8stdout)
else:
    rows = []
    for doc in list_docs:
        nombre = doc[1]
        exp = doc[2]
        especialidad = doc[3]
        email = doc[5]
        cel = doc[6]
        # nombre, experiencia, especialidad, foto, email, celular
        row = """
        <tr>
            <td>{0}</td>
            <td>{1}</td>
            <td>{2}</td>
            <td>{3}</td>
            <td>{4}</td>
        </tr>
        """.format(nombre, exp, especialidad, email, cel)
        rows.append(row)
    str_rows = '\n'.join(rows)
    table = """
    <table>
        <thead>
            <tr>
                <th>nombre</th>
                <th>experiencia</th>
                <th>especialidad</th>
                <th>email</th>
                <th>celular</th>
            </tr>
        </thead>
        <tbody>
            {0}
        </tbody>
    </table>
    """.format(str_rows)
    print(table, file=utf8stdout)
#!/usr/bin/python3
# -*- coding: utf-8 -*-
import mysql.connector


class Doctor:

    def __init__(self, host, user, password, database):
        self.db = mysql.connector.connect(
            db=database,
            user=user,
            passwd=password,
            host=host,
            charset='utf8')
        self.cursor = self.db.cursor()

    def save_doctor(self, data):
        query = """
        INSERT INTO medico (id, nombre, experiencia, especialidad, foto, email, celular) 
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        res = self.cursor.execute(query, data)
        self.db.commit()

    def get_doctors(self):
        self.cursor.execute("SELECT * FROM medico")
        return self.cursor.fetchall()

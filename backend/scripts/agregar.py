from pymongo import MongoClient
dc = MongoClient("mongodb+srv://Thomazoide:Thom1232!@mastercluster.hasjpif.mongodb.net/Club_Hipico")
club_hipico = dc["Club_Hipico"]
solicitudes = club_hipico["solicitud_usuario"]
usuarios = club_hipico["usuarios"]
soli = {
    "tipo": "admin",
    "nombre": "Thomas Tellerias",
    "rut": "20220011-7",
    "email": "ttellerias01@outlook.com",
    "cell": "990950312",
    "pass": "0011",
}
s = list(usuarios.find())
print(s)
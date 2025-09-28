from fastapi import APIRouter
from backend.models.libro import Libro
from backend.services import libro_services

router = APIRouter()

# creamos un endpoint con una funcion la cual "obtiene" la lista de datos utilizando la funcion creada en el modulo servicios
@router.get("/libros")
def get_libros():
    return libro_services.obtener_libros()

# creamos un endpoint con una funcion la cual "obtiene" el valor dado y lo busca utilizando la funcion "buscar_libro" creada en el modulo servicios
@router.get("/libros/{id}")
def get_libro(id: int):
    libro = libro_services.buscar_libro(id)
    if libro:
        return libro
    return {"mensaje": "No se encontró el libro"}



from pydantic import BaseModel

# creamos una clase libro para tener un tipo de molde de como deben de ser nuestros datos
# BaseModel se encarga de asegurarse que los tipos de datos sean los establecidos 
class Libro(BaseModel):
    id: int
    titulo: str
    autor: str
    anio: int
    genero: str
    disponible: bool = True
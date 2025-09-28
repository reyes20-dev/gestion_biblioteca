from backend.data.datos import biblioteca


# creamos una funcion que nos retorne la lista "biblioteca"
def obtener_libros():
    return biblioteca

# creamos una funcion que nos permita buscar libros dentro de la lista 
# le especificamos a la funciona que va a buscar el libro con un dato de tipo INT
# creamos un for para iterar dentro de la lista y que asi nos permite buscar por ese "Id"
# finalmente con el if comparar los valores 
def buscar_libro( id : int ):
    for libro in biblioteca:
        # usamos esto ya que i representa cada libro dentro del la lista por lo siguiente usamos [] para acceder a un valor dentro de un diccionario
        # en este caso al valor que queremos acceder es al "id" para finalmente decir que si este valor es igual (==) al que estamos buscando nos lo retorne
        if libro["id"] == id:
            return libro
    # dejamos este mensaje "else" por fuera del for para que nos permita iterar sobre todos los libros
    return {"mensaje" : "No se encontro el libro"}
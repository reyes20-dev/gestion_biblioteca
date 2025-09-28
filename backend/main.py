# este proyecto consistiria un sistema de gestion de biblioteca con un breve CRUD y buena diseno de UI
from fastapi import FastAPI
from backend.routes import libro_routes


# creamos la aplicacion fastAPI
app = FastAPI()

app.include_router(libro_routes.router)

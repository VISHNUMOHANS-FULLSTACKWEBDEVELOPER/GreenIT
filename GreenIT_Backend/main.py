from fastapi import FastAPI
from app.routers import jobs

app = FastAPI(title="Green IT Resource Scheduler API")

app.include_router(jobs.router, prefix="/jobs", tags=["Jobs"])
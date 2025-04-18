from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import uuid

router = APIRouter()

class Job(BaseModel):
    id: str
    name: str
    description: str
    node_type: str
    status: str
    energy_kwh: float
    sla_priority: str

jobs_db = []

@router.get("/", response_model=List[Job])
def get_jobs():
    return jobs_db

@router.post("/", response_model=Job)
def create_job(job: Job):
    job.id = str(uuid.uuid4())
    jobs_db.append(job)
    return job
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.models.blog import Blog
from backend.database import get_db

router = APIRouter()

@router.get("/blogs/", response_model=list[Blog])
def read_blogs(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return db.query(Blog).offset(skip).limit(limit).all()

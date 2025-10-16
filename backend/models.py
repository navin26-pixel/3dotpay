from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid


class Benefit(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    image: str
    color: str
    order: int = 0
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


class BenefitCreate(BaseModel):
    title: str
    description: str
    image: str
    color: str
    order: int = 0
    active: bool = True


class BenefitUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    color: Optional[str] = None
    order: Optional[int] = None
    active: Optional[bool] = None


class Feature(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    icon: str
    title: str
    description: str
    order: int = 0
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


class FeatureCreate(BaseModel):
    icon: str
    title: str
    description: str
    order: int = 0
    active: bool = True


class FeatureUpdate(BaseModel):
    icon: Optional[str] = None
    title: Optional[str] = None
    description: Optional[str] = None
    order: Optional[int] = None
    active: Optional[bool] = None


class FAQ(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    category: str = "general"
    order: int = 0
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


class FAQCreate(BaseModel):
    question: str
    answer: str
    category: str = "general"
    order: int = 0
    active: bool = True


class FAQUpdate(BaseModel):
    question: Optional[str] = None
    answer: Optional[str] = None
    category: Optional[str] = None
    order: Optional[int] = None
    active: Optional[bool] = None


class Stats(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    countries: int
    users: str
    transactionVolume: str
    support: str
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


class StatsUpdate(BaseModel):
    countries: Optional[int] = None
    users: Optional[str] = None
    transactionVolume: Optional[str] = None
    support: Optional[str] = None


class Card(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    features: List[str]
    gradient: str
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


class CardCreate(BaseModel):
    name: str
    description: str
    features: List[str]
    gradient: str
    active: bool = True


class CardUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    features: Optional[List[str]] = None
    gradient: Optional[str] = None
    active: Optional[bool] = None


class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    status: str = "pending"
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


class ContactCreate(BaseModel):
    name: str
    email: str
    message: str


class ContactUpdate(BaseModel):
    status: str

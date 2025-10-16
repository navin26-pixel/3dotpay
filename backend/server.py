from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from datetime import datetime

from models import (
    Benefit, BenefitCreate, BenefitUpdate,
    Feature, FeatureCreate, FeatureUpdate,
    FAQ, FAQCreate, FAQUpdate,
    Stats, StatsUpdate,
    Card, CardCreate, CardUpdate,
    Contact, ContactCreate, ContactUpdate
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Helper function to convert MongoDB _id to id
def format_doc(doc):
    if doc and '_id' in doc:
        doc['id'] = doc.pop('_id')
    return doc


# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "3dotpay API is running"}


# Benefits endpoints
@api_router.get("/benefits", response_model=List[Benefit])
async def get_benefits():
    benefits = await db.benefits.find({"active": True}).sort("order", 1).to_list(100)
    return [Benefit(**format_doc(benefit)) for benefit in benefits]


@api_router.post("/benefits", response_model=Benefit)
async def create_benefit(benefit: BenefitCreate):
    benefit_obj = Benefit(**benefit.dict())
    doc = benefit_obj.dict()
    doc['_id'] = doc.pop('id')
    await db.benefits.insert_one(doc)
    return benefit_obj


@api_router.put("/benefits/{benefit_id}", response_model=Benefit)
async def update_benefit(benefit_id: str, benefit: BenefitUpdate):
    update_data = {k: v for k, v in benefit.dict().items() if v is not None}
    update_data['updatedAt'] = datetime.utcnow()
    
    result = await db.benefits.find_one_and_update(
        {"_id": benefit_id},
        {"$set": update_data},
        return_document=True
    )
    
    if not result:
        raise HTTPException(status_code=404, detail="Benefit not found")
    
    return Benefit(**format_doc(result))


@api_router.delete("/benefits/{benefit_id}")
async def delete_benefit(benefit_id: str):
    result = await db.benefits.delete_one({"_id": benefit_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Benefit not found")
    return {"success": True, "message": "Benefit deleted"}


# Features endpoints
@api_router.get("/features", response_model=List[Feature])
async def get_features():
    features = await db.features.find({"active": True}).sort("order", 1).to_list(100)
    return [Feature(**format_doc(feature)) for feature in features]


@api_router.post("/features", response_model=Feature)
async def create_feature(feature: FeatureCreate):
    feature_obj = Feature(**feature.dict())
    doc = feature_obj.dict()
    doc['_id'] = doc.pop('id')
    await db.features.insert_one(doc)
    return feature_obj


@api_router.put("/features/{feature_id}", response_model=Feature)
async def update_feature(feature_id: str, feature: FeatureUpdate):
    update_data = {k: v for k, v in feature.dict().items() if v is not None}
    update_data['updatedAt'] = datetime.utcnow()
    
    result = await db.features.find_one_and_update(
        {"_id": feature_id},
        {"$set": update_data},
        return_document=True
    )
    
    if not result:
        raise HTTPException(status_code=404, detail="Feature not found")
    
    return Feature(**format_doc(result))


@api_router.delete("/features/{feature_id}")
async def delete_feature(feature_id: str):
    result = await db.features.delete_one({"_id": feature_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Feature not found")
    return {"success": True, "message": "Feature deleted"}


# FAQs endpoints
@api_router.get("/faqs", response_model=List[FAQ])
async def get_faqs():
    faqs = await db.faqs.find({"active": True}).sort("order", 1).to_list(100)
    return [FAQ(**format_doc(faq)) for faq in faqs]


@api_router.get("/faqs/{faq_id}", response_model=FAQ)
async def get_faq(faq_id: str):
    faq = await db.faqs.find_one({"_id": faq_id})
    if not faq:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return FAQ(**format_doc(faq))


@api_router.post("/faqs", response_model=FAQ)
async def create_faq(faq: FAQCreate):
    faq_obj = FAQ(**faq.dict())
    doc = faq_obj.dict()
    doc['_id'] = doc.pop('id')
    await db.faqs.insert_one(doc)
    return faq_obj


@api_router.put("/faqs/{faq_id}", response_model=FAQ)
async def update_faq(faq_id: str, faq: FAQUpdate):
    update_data = {k: v for k, v in faq.dict().items() if v is not None}
    update_data['updatedAt'] = datetime.utcnow()
    
    result = await db.faqs.find_one_and_update(
        {"_id": faq_id},
        {"$set": update_data},
        return_document=True
    )
    
    if not result:
        raise HTTPException(status_code=404, detail="FAQ not found")
    
    return FAQ(**format_doc(result))


@api_router.delete("/faqs/{faq_id}")
async def delete_faq(faq_id: str):
    result = await db.faqs.delete_one({"_id": faq_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return {"success": True, "message": "FAQ deleted"}


# Stats endpoints
@api_router.get("/stats", response_model=Stats)
async def get_stats():
    stats = await db.stats.find_one()
    if not stats:
        raise HTTPException(status_code=404, detail="Stats not found")
    return Stats(**format_doc(stats))


@api_router.put("/stats", response_model=Stats)
async def update_stats(stats: StatsUpdate):
    update_data = {k: v for k, v in stats.dict().items() if v is not None}
    update_data['updatedAt'] = datetime.utcnow()
    
    result = await db.stats.find_one_and_update(
        {},
        {"$set": update_data},
        return_document=True
    )
    
    if not result:
        raise HTTPException(status_code=404, detail="Stats not found")
    
    return Stats(**format_doc(result))


# Cards endpoints
@api_router.get("/cards", response_model=List[Card])
async def get_cards():
    cards = await db.cards.find({"active": True}).to_list(100)
    return [Card(**format_doc(card)) for card in cards]


@api_router.get("/cards/{card_id}", response_model=Card)
async def get_card(card_id: str):
    card = await db.cards.find_one({"_id": card_id})
    if not card:
        raise HTTPException(status_code=404, detail="Card not found")
    return Card(**format_doc(card))


@api_router.post("/cards", response_model=Card)
async def create_card(card: CardCreate):
    card_obj = Card(**card.dict())
    doc = card_obj.dict()
    doc['_id'] = doc.pop('id')
    await db.cards.insert_one(doc)
    return card_obj


@api_router.put("/cards/{card_id}", response_model=Card)
async def update_card(card_id: str, card: CardUpdate):
    update_data = {k: v for k, v in card.dict().items() if v is not None}
    update_data['updatedAt'] = datetime.utcnow()
    
    result = await db.cards.find_one_and_update(
        {"_id": card_id},
        {"$set": update_data},
        return_document=True
    )
    
    if not result:
        raise HTTPException(status_code=404, detail="Card not found")
    
    return Card(**format_doc(result))


@api_router.delete("/cards/{card_id}")
async def delete_card(card_id: str):
    result = await db.cards.delete_one({"_id": card_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Card not found")
    return {"success": True, "message": "Card deleted"}


# Contact endpoints
@api_router.post("/contact", response_model=Contact)
async def create_contact(contact: ContactCreate):
    contact_obj = Contact(**contact.dict())
    doc = contact_obj.dict()
    doc['_id'] = doc.pop('id')
    await db.contacts.insert_one(doc)
    return contact_obj


@api_router.get("/contact", response_model=List[Contact])
async def get_contacts():
    contacts = await db.contacts.find().sort("createdAt", -1).to_list(100)
    return [Contact(**format_doc(contact)) for contact in contacts]


@api_router.put("/contact/{contact_id}", response_model=Contact)
async def update_contact(contact_id: str, contact: ContactUpdate):
    update_data = contact.dict()
    update_data['updatedAt'] = datetime.utcnow()
    
    result = await db.contacts.find_one_and_update(
        {"_id": contact_id},
        {"$set": update_data},
        return_document=True
    )
    
    if not result:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    return Contact(**format_doc(result))


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
#!/usr/bin/env python3
"""
Seed script to populate MongoDB with initial data for 3dotpay
"""
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path
from seed_data import benefits_data, features_data, faqs_data, stats_data, cards_data
from models import Benefit, Feature, FAQ, Stats, Card

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']


async def seed_database():
    """Seed the database with initial data"""
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print("🌱 Starting database seeding...")
    
    # Clear existing data
    print("🗑️  Clearing existing collections...")
    await db.benefits.delete_many({})
    await db.features.delete_many({})
    await db.faqs.delete_many({})
    await db.stats.delete_many({})
    await db.cards.delete_many({})
    
    # Seed Benefits
    print("📊 Seeding benefits...")
    for benefit_data in benefits_data:
        benefit = Benefit(**benefit_data)
        doc = benefit.dict()
        doc['_id'] = doc.pop('id')
        await db.benefits.insert_one(doc)
    print(f"   ✓ Added {len(benefits_data)} benefits")
    
    # Seed Features
    print("⚡ Seeding features...")
    for feature_data in features_data:
        feature = Feature(**feature_data)
        doc = feature.dict()
        doc['_id'] = doc.pop('id')
        await db.features.insert_one(doc)
    print(f"   ✓ Added {len(features_data)} features")
    
    # Seed FAQs
    print("❓ Seeding FAQs...")
    for faq_data in faqs_data:
        faq = FAQ(**faq_data)
        doc = faq.dict()
        doc['_id'] = doc.pop('id')
        await db.faqs.insert_one(doc)
    print(f"   ✓ Added {len(faqs_data)} FAQs")
    
    # Seed Stats
    print("📈 Seeding stats...")
    stats = Stats(**stats_data)
    doc = stats.dict()
    doc['_id'] = doc.pop('id')
    await db.stats.insert_one(doc)
    print("   ✓ Added platform stats")
    
    # Seed Cards
    print("💳 Seeding cards...")
    for card_data in cards_data:
        card = Card(**card_data)
        doc = card.dict()
        doc['_id'] = doc.pop('id')
        await db.cards.insert_one(doc)
    print(f"   ✓ Added {len(cards_data)} card types")
    
    print("✅ Database seeding completed successfully!")
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_database())
